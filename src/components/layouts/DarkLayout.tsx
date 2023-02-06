import { ReactElement } from "react"

interface Props { 
  children: ReactElement | ReactElement[]
}

export const DarkLayout = ({ children }: Props ) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        padding: '10px',
        borderRadius: '5px'
      }}
    >
      { children }
    </div>
  )
}
