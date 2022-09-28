import { Area } from '@ant-design/plots'
import { useGraphicsArea } from 'mock2/context/graphicsArea.context'
import React from 'react'

type Props = {}

const index = (props: Props) => {
  const { graphicsArea }: any = useGraphicsArea()

  const config = {
    data: graphicsArea,
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      range: [0, 1]
    },
    areaStyle: {
      fill: '#0E9CFF'
    }
  }

  return <Area {...config} />
}

export default index
