import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './cardList.module.css'

const Card = ({ key, blog }) => {

    return (
        <Link href={`/posts/${blog.slug}`} key={key} className="px-2 py-7 flex flex-col lg:flex-row gap-3 lg:gap-7 justify-center border-0 border-b-[1px] border-yellow-300">
            {blog.img && (
                <div className="imgContainer w-full lg:w-1/3 h-[30vh] lg:h-[130px] 2xl:[350px] relative ">
                    <Image src={blog.img} alt="CardImg" fill className=" object-cover rounded-lg" />
                </div>
            )}
            <div className="textContainer flex-1 flex flex-col gap-2 text-sm">
                <div className="flex gap-2 justify-between md:justify-start">
                    <span className="text-gray-500">{blog.createdAt.substring(0, 10)}</span>
                    <span className="text-red-500 uppercase">{blog.catSlug}</span>
                </div>

                <h1 className={`${styles.title} text-xl font-bold"`}>
                    {blog.title}
                </h1>

                <div className={styles.para} dangerouslySetInnerHTML={{ __html: blog?.desc.substring(0,100) + "..."}}></div>
            </div>
        </Link>
    )
}

export default Card