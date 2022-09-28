import { GraphicsColumnData } from 'mock2/data/graphicsColumn.data'
import { createContext, useContext, useState } from 'react'

export const GraphicsColumnContext = createContext({})

type Props = {
  children: React.ReactNode
}

export const GraphicsColumnProvider = (props: Props) => {
  const [graphicsColumn, setGraphicsColumn] = useState(GraphicsColumnData)

  return (
    <GraphicsColumnContext.Provider value={{ graphicsColumn }}>
      {props.children}
    </GraphicsColumnContext.Provider>
  )
}

export const useGraphicsColumn = () => useContext(GraphicsColumnContext)
