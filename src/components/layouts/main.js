import React from 'react'
import Navbar from '@/components/navbar'
import { Inter } from "next/font/google"

const inter = Inter({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
});

export default function LayoutMain({ children }) {
  return (
    <>
      <div className={inter.className}>
        <Navbar />
        <main
          style={{
            margin: '0px 150px',
            padding: '80px 0px'
          }}
        >
          {children}
        </main>
      </div>
    </>  
  )
}