
import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'
import { Kaushan_Script } from 'next/font/google'
import Link from 'next/link'
import HeroText from './HeroText'


const ks = Kaushan_Script({
    weight: '400',
    subsets: ['latin']
})

const Featured = () => {
    return (
        <div className='flex flex-col gap-1 md:gap-3'>
            <div className={`text-2xl sm:text-3xl md:text-5xl font-semibold`}>
                <HeroText />
            </div>
            <h1 className={`${ks.className} text-2xl sm:text-3xl md:text-4xl`}>
                Discover. Explore. Inspire. Openly...
            </h1>
            <div className="flex flex-col md:flex-row md:gap-5 gap-5 mt-5 md:mt-8">
                <Link href="/posts/im-not-afraid-lets-say-im-aware" className="h-[28vh] sm:h-[40vh] w-full md:w-1/2">
                    <Image src="/travel2.webp" className="h-full w-full object-cover" height={1000} width={1000} alt="heroImg" />
                </Link>
                <div className="md:w-1/2 flex flex-col justify-between gap-4">
                    <Link href="/posts/im-not-afraid-lets-say-im-aware" className='flex flex-col gap-3'>
                        <h1 className={`${styles.postTitle} text-2xl font-semibold flex flex-col gap-4`}>I’m Not Afraid — Let’s Say I’m Aware</h1>
                        <p className={styles.postDes}>
                            An American woman from Arizona went missing in 2015, while walking the Camino de Santiago. I heard of it through a Camino Forum online. I had a trip planned for October 1st through November 11th. Where had she gone?.....
                        </p>
                    </Link>
                    <div>
                        <p className={styles.postDes}>Debra G. Harman, MEd</p>
                        <p className={styles.postDes}>25 Sept, 2023</p>
                    </div>
                    <Link href="/posts/im-not-afraid-lets-say-im-aware" className={`${styles.button} bg-gray-300 text-black py-2 rounded-xl text-center`}>Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default Featured