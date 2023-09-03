'use client'

import { useEffect, useState } from 'react'
import { useTheme } from '@mui/material'
import { ResponsiveChoropleth } from '@nivo/geo'
import useMediaQuery from '@mui/material/useMediaQuery'

import { mockGeographyData } from '@/data/mockData'
import { geoFeatures } from '@/data/mockGeoFeatures'
import { tokens } from '@/styles/theme'

export function GeographyChart({ isDashboard = false }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const isNonMobile = useMediaQuery('(min-width:600px)')
  const [projectionScale, setProjectionScale] = useState(60)

  useEffect(() => {
    if (!isDashboard && isNonMobile) {
      setProjectionScale(150)
    }
    if (!isDashboard && !isNonMobile) {
      setProjectionScale(40)
    }
    if (isDashboard && !isNonMobile) {
      setProjectionScale(40)
    }
  }, [isDashboard, isNonMobile])

  const margin = isNonMobile
    ? { top: 0, right: 0, bottom: 0, left: 0 }
    : { top: isDashboard ? 0 : -120, right: 0, bottom: 0, left: 0 }

  return (
    <ResponsiveChoropleth
      data={mockGeographyData}
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
      features={geoFeatures.features}
      margin={margin}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={projectionScale}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      borderWidth={0.75}
      borderColor="#333"
      colors="spectral"
      legends={
        !isDashboard
          ? [
              {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: isNonMobile ? -100 : 90,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: '#ffffff',
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  )
}
