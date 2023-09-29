"use client"

import React from 'react'
import styles from './pagination.module.css'
import { useRouter } from 'next/navigation'

const Pagination = ({cat, page, hasPrev, hasNext}) => {
    const router = useRouter()
    return (
        <div className='flex justify-between mt-5'>
            <button disabled={!hasPrev} onClick={()=> router.push(`?cat=${cat}&page=${page-1}`)} className='px-3 lg:px-6 py-2 rounded-full w-max bg-red-500 hover:bg-red-600 duration-200 text-white disabled:cursor-not-allowed disabled:bg-gray-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>

            </button>
            <button disabled={!hasNext} onClick={()=> router.push(`?cat=${cat}&page=${page+1}`)} className='px-3 lg:px-6 py-2 rounded-full w-max bg-red-500 hover:bg-red-600 duration-200 text-white disabled:cursor-not-allowed disabled:bg-gray-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </button>
        </div>
    )
}

export default Pagination