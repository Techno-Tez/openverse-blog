
import React from 'react'
import Comments from '../Comments/Comments'

const BlogContent = ({desc, slug}) => {
  return (
    <div className='col-span-2 flex flex-col gap-5'>
        <div className='content'>
            {desc}
        </div>
        <div className='comments'>
            <Comments postSlug={slug}/>
        </div>
    </div>
  )
}

export default BlogContent