import Link from "next/link"
import { useRouter } from "next/router";
import { CSSProperties } from "react";

interface Props { 
  name: string;
  path: string;
}

const style: CSSProperties = { 
  color: 'rgb(100, 255, 255)'
}

export const ActiveLink = ({ name, path }: Props ) => {

  const { asPath } = useRouter()
  
  return (
    <Link 
      href={ path }
      style={
        path === asPath ? style : undefined
      }
    >
      { name }
    </Link>
  )
}
