import Comments from "@/components/Comments/Comments"
import Menu from "@/components/menu/Menu"
import Image from "next/image"

const fetchBlog = async (slug) => {
    const res = await fetch(`https://openverse-blog.vercel.app/api/posts/${slug}`, {
        cache: "no-cache",
    })

    if (!res.ok) {
        throw new Error("failed! ")
    }

    return await res.json()
}

const page = async ({ params }) => {
    const slug = params.blogname
    const blog = await fetchBlog(slug)
    return (
        <div className="">
            <div className="image-title-author flex flex-col-reverse md:flex-row gap-5">
                <div className="flex flex-col justify-between gap-4 w-full md:w-[40vw]">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
                        {blog?.title}
                    </h1>
                    <div className="author-details flex gap-3 items-center">
                        {blog?.user.image &&
                            <Image src={blog?.user.image} height={50} width={50} alt="author_image" className="aspect-square object-cover rounded-full" />
                        }
                        <div className='flex flex-col gap-1'>
                            <h2 className="text-gray-500">{blog?.user.name}</h2>
                            <h2 className="text-gray-500">{blog?.createdAt.substring(0, 10)}</h2>
                        </div>
                    </div>
                </div>
                {blog.img && (
                    <div className="imgContainer w-full md:w-[60vw] lg:w-[50vw] h-[40vh] relative">
                        <Image src={blog.img} alt="CardImg" fill className="object-cover rounded-lg" />
                    </div>
                )}
            </div>
            <div className="menu-blog-content-comments grid grid-cols-1 md:grid-cols-3 gap-7 mt-10">
                <div className='col-span-2 flex flex-col gap-5'>
                    <div className='content' dangerouslySetInnerHTML={{ __html: blog?.desc }}>
                        
                    </div>
                    <div className='comments'>
                        <Comments postSlug={slug} />
                    </div>
                </div>
                <Menu className="col-span-1" />
            </div>
        </div>
    )
}

export default page