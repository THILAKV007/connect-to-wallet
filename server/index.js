// index.js — Advanced 0x Proxy Server (Multi-Chain + Auto Token Map)
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");

// Load .env or .env.local
const envLocal = path.join(process.cwd(), ".env.local");
if (fs.existsSync(envLocal)) dotenv.config({ path: envLocal });
else dotenv.config();

process.env.NO_PROXY =
  process.env.NO_PROXY ||
  [
    "api.0x.org",
    ".0x.org",
    "polygon.api.0x.org",
    "bsc.api.0x.org",
    "base.api.0x.org",
    "optimism.api.0x.org",
    "arbitrum.api.0x.org",
    "avalanche.api.0x.org",
  ].join(",");

const API_KEY = process.env.OX_API_KEY || process.env.REACT_APP_OX_API_KEY;
if (!API_KEY) console.warn("⚠️ Warning: OX_API_KEY not set.");

const app = express();
app.use(cors());
app.use(express.json());

// -----------------------------
// 🧠 Token Address Dictionary
// -----------------------------
const TOKEN_MAP = {
  "1": {
    // Ethereum
    ETH: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    USDC: "0xA0b86991c6218b36c1d19D4a2E9Eb0cE3606eB48",
    DAI: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  },
  "56": {
    // BSC
    BNB: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    WBNB: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    BUSD: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    USDT: "0x55d398326f99059fF775485246999027B3197955",
    USDC: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
    DAI: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
    CAKE: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
  },
  "137": {
    // Polygon
    MATIC: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    WMATIC: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    USDT: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    USDC: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    DAI: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
  },
};

// -----------------------------
// 🪄 Utility Functions
// -----------------------------
function normalizeToken(symbolOrAddress, chain = "1") {
  if (!symbolOrAddress) return null;
  const val = symbolOrAddress.trim();
  if (val.startsWith("0x") && val.length === 42) return val;
  const dict = TOKEN_MAP[chain] || {};
  const match = dict[val.toUpperCase()];
  if (!match)
    console.warn(`⚠️ Unknown token "${val}" on chain ${chain}, using raw value.`);
  return match || val;
}

function get0xBaseUrl(chain) {
  const c = String(chain);
  switch (c) {
    case "1":
      return "https://api.0x.org";
    case "137":
      return "https://polygon.api.0x.org";
    case "56":
      return "https://bsc.api.0x.org";
    case "8453":
      return "https://base.api.0x.org";
    case "10":
      return "https://optimism.api.0x.org";
    case "42161":
      return "https://arbitrum.api.0x.org";
    case "43114":
      return "https://avalanche.api.0x.org";
    default:
      return "https://api.0x.org";
  }
}

function hintForError(err) {
  const code = String(err?.code || err?.type || "").toUpperCase();
  if (code.includes("ECONNREFUSED"))
    return "Connection refused. Make sure server & internet are fine.";
  if (code.includes("ENOTFOUND"))
    return "DNS not found. Try changing DNS to 1.1.1.1 or 8.8.8.8.";
  if (code.includes("ETIMEDOUT"))
    return "Request timed out. Disable VPN/adblocker and retry.";
  return "Unknown network issue. Check logs.";
}

// -----------------------------
// ✅ Routes
// -----------------------------

app.get("/api/health", (req, res) => res.json({ ok: true, message: "0x proxy server healthy ✅" }));

// 🪙 Tokens list
app.get("/api/tokens", async (req, res) => {
  try {
    const chain = req.query.chain || "1";
    const url = `${get0xBaseUrl(chain)}/swap/v2/tokens`;
    console.log(`[proxy] Fetching tokens for chain ${chain}`);
    const r = await fetch(url, {
      headers: { "0x-api-key": API_KEY || "", Accept: "application/json" },
    });
    const json = await r.json();
    res.status(r.status).json(json);
  } catch (err) {
    console.error("Error fetching tokens:", err);
    res.status(500).json({ error: "Token fetch failed", hint: hintForError(err) });
  }
});

// 💰 Regular Quote
app.get("/api/quote", async (req, res) => {
  try {
    const chain = req.query.chain || "1";
    const sell = normalizeToken(req.query.sellToken, chain);
    const buy = normalizeToken(req.query.buyToken, chain);

    const params = new URLSearchParams({ ...req.query, sellToken: sell, buyToken: buy });
    params.delete("chain");

    const url = `${get0xBaseUrl(chain)}/swap/v2/quote?${params}`;
    console.log(`[proxy] Quote for ${sell} → ${buy} on ${chain}`);

    const r = await fetch(url, {
      headers: { "0x-api-key": API_KEY || "", Accept: "application/json" },
    });
    const json = await r.json();
    res.status(r.status).json(json);
  } catch (err) {
    console.error("Quote error:", err);
    res.status(500).json({ error: "Quote failed", hint: hintForError(err) });
  }
});

// ⚡ Gasless Quote
app.get("/api/gasless/quote", async (req, res) => {
  try {
    const chain = req.query.chain || "1";
    const sell = normalizeToken(req.query.sellToken, chain);
    const buy = normalizeToken(req.query.buyToken, chain);

    if (sell === TOKEN_MAP[chain]?.ETH) {
      return res.status(400).json({ error: "Gasless not supported for ETH on this chain." });
    }

    const params = new URLSearchParams({ ...req.query, sellToken: sell, buyToken: buy });
    params.delete("chain");

    const url = `${get0xBaseUrl(chain)}/gasless/quote?${params}`;
    console.log(`[proxy] Gasless quote ${sell} → ${buy} on ${chain}`);

    const r = await fetch(url, {
      headers: {
        "0x-api-key": API_KEY || "",
        "0x-version": "v2",
        "0x-chain-id": chain,
        Accept: "application/json",
      },
    });
    const json = await r.json();
    res.status(r.status).json(json);
  } catch (err) {
    console.error("Gasless quote error:", err);
    res.status(500).json({ error: "Gasless quote failed", hint: hintForError(err) });
  }
});

// ⚙️ Gasless Price
app.get("/api/gasless/price", async (req, res) => {
  try {
    const chain = req.query.chain || "1";
    const sell = normalizeToken(req.query.sellToken, chain);
    const buy = normalizeToken(req.query.buyToken, chain);

    const params = new URLSearchParams({ ...req.query, sellToken: sell, buyToken: buy });
    params.delete("chain");

    const url = `${get0xBaseUrl(chain)}/gasless/price?${params}`;
    console.log(`[proxy] Gasless price ${sell} → ${buy} on ${chain}`);

    const r = await fetch(url, {
      headers: {
        "0x-api-key": API_KEY || "",
        "0x-version": "v2",
        "0x-chain-id": chain,
        Accept: "application/json",
      },
    });
    const json = await r.json();
    res.status(r.status).json(json);
  } catch (err) {
    console.error("Gasless price error:", err);
    res.status(500).json({ error: "Gasless price failed", hint: hintForError(err) });
  }
});

// 🚀 Gasless Submit
app.post("/api/gasless/submit", async (req, res) => {
  try {
    const chain = req.body.chain || "1";
    const url = `${get0xBaseUrl(chain)}/gasless/submit`;

    const r = await fetch(url, {
      method: "POST",
      headers: {
        "0x-api-key": API_KEY || "",
        "0x-version": "v2",
        "0x-chain-id": chain,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });
    const json = await r.json();
    res.status(r.status).json(json);
  } catch (err) {
    console.error("Gasless submit error:", err);
    res.status(500).json({ error: "Gasless submit failed", hint: hintForError(err) });
  }
});

// -----------------------------
// 🚀 Start Server
// -----------------------------
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ 0x Proxy Server running on port ${PORT}`));
