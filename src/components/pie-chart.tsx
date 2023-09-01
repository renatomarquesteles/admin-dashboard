'use client'

import { ResponsivePie } from '@nivo/pie'
import { useTheme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'

import { tokens } from '@/styles/theme'
import { mockPieData } from '@/data/mockData'

export function PieChart() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const isNonMobile = useMediaQuery('(min-width:600px)')

  const margin = isNonMobile
    ? { top: 40, right: 80, bottom: 80, left: 80 }
    : { top: -100, right: 0, bottom: 0, left: 0 }

  return (
    <ResponsivePie
      data={mockPieData}
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
      margin={margin}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      enableArcLinkLabels={isNonMobile}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      enableArcLabels={!isNonMobile}
      arcLabelsRadiusOffset={0.4}
      arcLabelsTextColor={colors.primary[500]}
      legends={[
        {
          anchor: isNonMobile ? 'bottom' : 'bottom-left',
          direction: isNonMobile ? 'row' : 'column',
          justify: false,
          translateX: 0,
          translateY: isNonMobile ? 56 : -50,
          itemsSpacing: isNonMobile ? 0 : 4,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#fff',
              },
            },
          ],
        },
      ]}
    />
  )
}
