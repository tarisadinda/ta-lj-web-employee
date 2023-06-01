import Head from 'next/head'
import { Inter } from 'next/font/google'
import Login from './login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <b className='text-align-center'>Going to /login page</b>
    </>
  )
}
