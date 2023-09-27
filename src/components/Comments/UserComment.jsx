import Image from 'next/image'
import React from 'react'

const UserComment = ({comment}) => {
    return (
        <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-3 items-center'>
                    <Image src={comment.user.image} height={50} width={50} alt="author_image" className="aspect-square object-cover rounded-full" />
                    <div className='flex flex-col gap-1'>
                        <h2 className="text-gray-500">{comment.user.name}</h2>
                        <h2 className="text-gray-500">{comment.createdAt}</h2>
                    </div>
                </div>
                <p>{comment.desc}</p>
            </div>
            
        </div>
    )
}

export default UserComment