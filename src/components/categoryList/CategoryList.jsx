import React from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Kaushan_Script } from 'next/font/google'

const ks = Kaushan_Script({
    weight: '400',
    subsets: ['latin']
})

const fetchCategory = async () => {
    const res = await fetch("/api/categories", {
        cache: "no-cache",
    })
    
    if (!res.ok) {
        throw new Error("failed! ")
    }

    return await res.json()
}                                                                 


const CategoryList = async () => {
    const data = await fetchCategory()
    return (
        <div className='my-10 border border-yellow-300 border-x-0 border-y-[1px] pb-10'>
            <h1 className='text-xl sm:text-2xl md:text-4xl text-center w-full my-8'>Popular Categories</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 text-[12px] sm:text-[18px] justify-between gap-4">
                {data?.map((data, idx) => {
                    return (
                        <Link key={idx} href={`/blogs?cat=${data.slug}`} className={`${styles[data.title]} ${ks.className} tracking-wider duration-200 flex gap-3 flex-wrap items-center justify-center h-[15vh] rounded-lg bg-[#57c4ff31] capitalize`}>
                            <Image alt={`${data.title}_image`} src={data.img} width={32} height={32} className='rounded-[50%] h-10 w-10'/>
                            {data.title}
                        </Link>
                    )
                })}
            </div>

        </div>
    )
}

export default CategoryList