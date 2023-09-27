"use client"

import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";

const fetcher = async (url) => {
    const res = await fetch(url);

    const data = await res.json();

    if (!res.ok) {
        const error = new Error(data.message);
        throw error;
    }

    return data;
};

const Comments = ({ postSlug }) => {
    const { status } = useSession();

    const { data, mutate, isLoading } = useSWR(
        `http://localhost:3000/api/comments?postSlug=${postSlug}`,
        fetcher
    );

    const [desc, setDesc] = useState("");

    const handleSubmit = async () => {
        await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({ desc, postSlug }),
        });
        mutate();
        setDesc("")
    };


    return (
        <div className="flex flex-col">
            <h1 className='text-xl ml:text-3xl font-semibold'>Comments</h1>
            <div className='flex flex-col gap-2 md:flex-row'>
                <div className='w-full md:w-3/4 justify-center items-center'>
                    {
                        status === "authenticated" ? (

                            <textarea name="user_comment" id="user_comment" rows="3" className='w-full p-2 border border-gray-300 rounded-md focus:outline-none' placeholder='Your comment here...' onChange={(e) => setDesc(e.target.value)} value={desc}></textarea>

                        ) : (

                            <div className='w-full rounded-lg bg-red-300 p-3 mt-4 font-semibold'>Login to comment !</div>

                        )
                    }
                </div>
                {status === "authenticated" && <div className='w-max bg-red-500 text-white h-max p-2 rounded-md'>
                    <button onClick={handleSubmit}>Submit</button>
                </div>}
            </div>
            <div className='mt-7 flex flex-col'>
                {isLoading
                    ? "loading"
                    : data?.map((comment) => {
                        return (
                            <div className='flex flex-col gap-10 border border-b-[1px] border-t-0 border-x-0 py-5 px-5'>
                                <div className='flex flex-col gap-3 text-sm'>
                                    <div className='flex gap-3 items-center'>
                                        <Image src={comment.user.image} height={50} width={50} alt="author_image" className="aspect-square object-cover rounded-full h-10 w-10" />
                                        <div className='flex flex-col gap-1'>
                                            <h2 className="text-gray-500 ">{comment.user.name}</h2>
                                            <h2 className="text-gray-500">{comment.createdAt.substring(0,10)}</h2>
                                        </div>
                                    </div>
                                    <p>{comment.desc}</p>
                                </div>

                            </div>
                        )
                    })}

            </div>
        </div>
    );
};
export default Comments;