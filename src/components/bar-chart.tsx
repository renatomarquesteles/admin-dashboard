'use client'

import { useMediaQuery, useTheme } from '@mui/material'
import { ResponsiveBar } from '@nivo/bar'

import { mockBarData } from '@/data/mockData'
import { tokens } from '@/styles/theme'

export function BarChart({ isDashboard = false }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const isNonMobile = useMediaQuery('(min-width:600px)')

  const margin = isNonMobile
    ? {
        top: 50,
        right: 130,
        bottom: 50,
        left: 60,
      }
    : {
        top: 50,
        right: 15,
        bottom: 50,
        left: 45,
      }

  return (
    <ResponsiveBar
      data={mockBarData}
      theme={{
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
          basic: {
            color: colors.grey[500],
          },
        },
      }}
      keys={['hot dog', 'burger', 'kebab', 'donut']}
      indexBy="country"
      margin={margin}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={['#32936f', '#2274A5', '#E83F6F', '#FFBF00']}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : 'country',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : 'food',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      enableLabel={false}
      legends={[
        {
          dataFrom: 'keys',
          anchor: isNonMobile ? 'bottom-right' : 'top-right',
          direction: isNonMobile ? 'column' : 'row',
          justify: false,
          translateX: isNonMobile ? 120 : 0,
          translateY: isNonMobile ? 0 : -25,
          itemsSpacing: 2,
          itemWidth: isNonMobile ? 100 : 40,
          itemHeight: 20,
          itemDirection: isNonMobile ? 'left-to-right' : 'bottom-to-top',
          itemOpacity: 0.85,
          symbolSize: 20,
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
      role="application"
      ariaLabel="Bar chart demo"
      barAriaLabel={function (e) {
        return e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
      }}
    />
  )
}
