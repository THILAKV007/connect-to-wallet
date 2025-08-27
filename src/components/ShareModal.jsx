import React from 'react'
import {
  Modal,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  IconButton,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from 'recharts'
function ShareModal({ open, onClose, isDarkMode }) {
  // Sample chart data for Bedrock
  const chartData = [
    { value: 9180 },
    { value: 9190 },
    { value: 9185 },
    { value: 9195 },
    { value: 9200 },
    { value: 9205 },
    { value: 9209 },
  ]

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1300,
      }}
    >
      <Card
        sx={{
          width: { xs: '90%', sm: 500, md: 600 },
          maxWidth: 700,
          backgroundColor: isDarkMode ? '#10254A' : '#BEE5FB',
          borderRadius: 3,
          outline: 'none',
          position: 'relative',
        }}
      >
        {/* Modal Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 2,
            pb: 1,
          }}
        >
          <Typography
            variant='h6'
            sx={{
              color: isDarkMode ? '#ffffff' : '#000000',
              fontWeight: 600,
            }}
          >
            Share
          </Typography>
          <IconButton
            onClick={onClose}
            sx={{
              color: isDarkMode ? '#ffffff' : '#000000',
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <CardContent sx={{ p: 2, pt: 0 }}>
          {/* Token Info Card */}
          <Card
            sx={{
              backgroundColor: isDarkMode ? '#f8f9fa' : '#f8f9fa',
              borderRadius: 2,
              p: 2,
              mb: 2,
            }}
          >
            {/* Token Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  backgroundColor: '#2d1b69',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                }}
              >
                <Typography
                  sx={{
                    color: '#8b5cf6',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                  }}
                >
                  ≋
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant='h6'
                  sx={{
                    color: '#000000',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                  }}
                >
                  Bedrock
                </Typography>
                <Typography
                  sx={{
                    color: '#666666',
                    fontSize: '0.9rem',
                  }}
                >
                  Be
                </Typography>
              </Box>
            </Box>

            {/* Price */}
            <Typography
              variant='h4'
              sx={{
                color: '#000000',
                fontWeight: 600,
                mb: 1,
              }}
            >
              $9209.00
            </Typography>

            {/* Price Change */}
            <Typography
              sx={{
                color: '#4caf50',
                fontSize: '0.9rem',
                mb: 2,
              }}
            >
              0.07% (5m)
            </Typography>

            {/* Chart */}
            <Box sx={{ height: 80, mb: 2 }}>
              <ResponsiveContainer width='100%' height='100%'>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient
                      id='colorGradient'
                      x1='0'
                      y1='0'
                      x2='0'
                      y2='1'
                    >
                      <stop offset='0%' stopColor='#4caf50' stopOpacity={0.3} />
                      <stop
                        offset='100%'
                        stopColor='#4caf50'
                        stopOpacity={0.05}
                      />
                    </linearGradient>
                  </defs>
                  <Area
                    type='monotone'
                    dataKey='value'
                    stroke='#4caf50'
                    strokeWidth={2}
                    fill='url(#colorGradient)'
                    dot={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </Card>

          {/* Share Buttons */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant='contained'
              sx={{
                flex: 1,
                backgroundColor: isDarkMode ? '#3D5174' : '#4a5568',
                color: '#ffffff',
                textTransform: 'none',
                borderRadius: 2,
                py: 1.5,
                '&:hover': {
                  backgroundColor: isDarkMode ? '#2d3748' : '#2d3748',
                },
              }}
            >
              X.com
            </Button>
            <Button
              variant='contained'
              sx={{
                flex: 1,
                backgroundColor: isDarkMode ? '#3D5174' : '#4a5568',
                color: '#ffffff',
                textTransform: 'none',
                borderRadius: 2,
                py: 1.5,
                '&:hover': {
                  backgroundColor: isDarkMode ? '#2d3748' : '#2d3748',
                },
              }}
            >
              Warpcast
            </Button>
            <Button
              variant='contained'
              sx={{
                flex: 1,
                backgroundColor: isDarkMode ? '#3D5174' : '#4a5568',
                color: '#ffffff',
                textTransform: 'none',
                borderRadius: 2,
                py: 1.5,
                '&:hover': {
                  backgroundColor: isDarkMode ? '#2d3748' : '#2d3748',
                },
              }}
            >
              Copy Link
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Modal>
  )
}

export default ShareModal
