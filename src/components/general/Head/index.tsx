import React from 'react'
import Head from 'next/head';

export const LocalHead = ({pageName}: {pageName: string}) => {
  return (
    <Head>
        <title>CalculaECO - {pageName}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}