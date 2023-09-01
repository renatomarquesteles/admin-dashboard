'use client'

import { ResponsiveLine } from '@nivo/line'
import { useTheme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'

import { mockLineData } from '@/data/mockData'
import { tokens } from '@/styles/theme'

export function LineChart({ isDashboard = false }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const isNonMobile = useMediaQuery('(min-width:600px)')

  const margin = isNonMobile
    ? { top: 50, right: 110, bottom: 50, left: 60 }
    : { top: 50, right: 10, bottom: 50, left: 13 }

  return (
    <ResponsiveLine
      data={mockLineData}
      theme={{
        textColor: colors.grey[100],
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
        crosshair: {
          line: {
            stroke: colors.primary[100],
          },
        },
      }}
      colors={isDashboard ? { datum: 'color' } : { scheme: 'nivo' }}
      margin={margin}
      curve="linear"
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : 'transportation',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickValues: isNonMobile ? 5 : 0,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : 'count',
        legendOffset: isNonMobile ? -40 : -8,
        legendPosition: 'middle',
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={8}
      pointColor={{ from: 'color' }}
      enablePointLabel={!isNonMobile}
      pointLabelYOffset={-12}
      isInteractive={isNonMobile}
      useMesh={true}
      legends={[
        {
          anchor: isNonMobile ? 'bottom-right' : 'top',
          direction: isNonMobile ? 'column' : 'row',
          justify: false,
          translateX: isNonMobile ? 100 : 0,
          translateY: isNonMobile ? 0 : -50,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: isNonMobile ? 0.75 : 1,
          symbolSize: 12,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  )
}
