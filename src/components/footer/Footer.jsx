import React from 'react'
import Link from 'next/link'
import { Kaushan_Script } from 'next/font/google'
import Image from 'next/image'

const ks = Kaushan_Script({
  weight: '400',
  subsets: ['latin']
})

const Footer = () => {
  return (
    <footer className="bg-inherit mt-10 border-t-[1px] border-yellow-300">
      <div className="px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center">
          <Image src="/logo.png" height={50} width={50} alt='logo_image'/>
          <span className={`ml-3 text-3xl ${ks.className}`}>OpenVerse</span>
        </Link>
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:py-2 sm:mt-0 mt-4">© 2023 TechTez — All rights reserved. 
          <Link href="https://www.instagram.com/_pateltejas_/" className="ml-1 text-transparent font-medium bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" rel="noopener noreferrer" target="_blank">@_pateltejas_</Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start items-center">
          <Link href="https://twitter.com/tejaspatel1532" className="ml-3 text-blue-500">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </Link>
          <Link href="https://www.instagram.com/_pateltejas_/" className="ml-3 ">
            <Image src="/instagram.png" height={25} width={25} alt='instagram' />
          </Link>
          <Link href="https://www.linkedin.com/in/tejas-patel-509343246/" className="ml-3 text-blue-600">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </Link>
        </span>
      </div>
    </footer>
  )
}

export default Footer