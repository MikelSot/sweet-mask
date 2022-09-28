import { GraphicsAreaData } from 'mock2/data/graphicsArea.data'
import { createContext, useContext, useState } from 'react'

export const GraphicsAreaContext = createContext({})

type Props = {
  children: React.ReactNode
}

export const GraphicsAreaProvider = (props: Props) => {
  const [graphicsArea, setGraphicsArea] = useState(GraphicsAreaData)

  return (
    <GraphicsAreaContext.Provider value={{ graphicsArea }}>
      {props.children}
    </GraphicsAreaContext.Provider>
  )
}

export const useGraphicsArea = () => useContext(GraphicsAreaContext)
