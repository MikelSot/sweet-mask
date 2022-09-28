import { Column } from '@ant-design/plots'
import { useGraphicsColumn } from 'mock2/context/graphicsColumn.context'
import React from 'react'

type Props = {}

const index = (props: Props) => {
  const { graphicsColumn }: any = useGraphicsColumn()

  const config = {
    data: graphicsColumn,
    xField: 'type',
    yField: 'sales',
    // label: {
    //   // 可手动配置 label 数据标签位置
    //   position: 'middle',
    //   // 'top', 'bottom', 'middle',
    //   // 配置样式
    //   style: {
    //     fill: '#FFFFFF',
    //     opacity: 0.6
    //   }
    // },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false
      }
    },
    meta: {
      type: {
        alias: '类别'
      },
      sales: {
        alias: '销售额'
      }
    },
    columnStyle: {
      fill: 'rgba(14, 156, 255, 0.3)',
      stroke: '#0E9CFF'
    }
  }

  return <Column {...config} />
}

export default index
