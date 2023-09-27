import React from 'react'
import styles from './menu.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AuthorChoice from './AuthorChoice'
import Popular from './Popular'

const Menu = () => {
    return (
        <div className='col-span-1 flex flex-col gap-6'>
            <div className='flex flex-col gap-3'>
                <div>
                    <h2>{"What's Hot"}</h2>
                    <h2 className='font-bold text-xl'>Most Popular</h2>
                </div>
                <Popular withImage={false} />
            </div>
            <hr className='border-t-[1px] border-yellow-300 w-full mx-auto'/>
            <div className='flex flex-col gap-3'>
                <div>
                    <h2>{"Disocover by Topic"}</h2>
                    <h2 className='font-bold text-xl'>Categories</h2>
                </div>
                <div className='grid grid-cols-3 gap-3 text-sm'>
                    <Link href="/blogs?cat=style" className='text-center cursor-pointer px-3 py-2 bg-yellow-300 rounded-xl duration-200 text-black hover:bg-yellow-400'>Style</Link>
                    <Link href="/blogs?cat=fashion" className='text-center cursor-pointer px-3 py-2 bg-blue-300 rounded-xl duration-200 text-black hover:bg-blue-400'>Fashion</Link>
                    <Link href="/blogs?cat=coding" className='text-center cursor-pointer px-3 py-2 bg-green-300 rounded-xl duration-200 text-black hover:bg-green-400'>Coding</Link>
                    <Link href="/blogs?cat=food" className='text-center cursor-pointer px-3 py-2 bg-red-300 rounded-xl duration-200 text-black hover:bg-red-400'>Food</Link>
                    <Link href="/blogs?cat=travel" className='text-center cursor-pointer px-3 py-2 bg-gray-400 rounded-xl duration-200 text-black hover:bg-gray-500'>Travel</Link>
                    <Link href="/blogs?cat=culture" className='text-center cursor-pointer px-3 py-2 bg-pink-300 rounded-xl duration-200 text-black hover:bg-pink-400'>Culture</Link>
                </div>
            </div>
            <hr className='border-t-[1px] border-yellow-300 w-full mx-auto'/>
            
            <div className='flex flex-col gap-3'>
                <div>
                    <h2>{"Chosen by Author"}</h2>
                    <h2 className='font-bold text-xl'>Editor's Pick</h2>
                </div>
                <AuthorChoice withImage={true} />
            </div>
        </div>
    )
}

export default Menu