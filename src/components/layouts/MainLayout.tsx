import Head from 'next/head'
import React, { ReactElement } from 'react'
import styles from '../../styles/Home.module.css'
import { NavBar } from '../NavBar'

interface Props { 
  children: ReactElement | ReactElement[]
}

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Home Rosemberg</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
  
      { children }
    </>
  )
}