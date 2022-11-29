import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <li className='list-none'>
        <Link href='/posts' className='text-2xl font-bold'>Go to posts </Link>
      </li>
    </div>
  )
}

export default Home
