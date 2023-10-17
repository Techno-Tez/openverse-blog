"use client"

import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";

import React, { useEffect, useState } from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { app } from "@/utils/firebase";
import { toast } from "react-toastify";
import Image from "next/image";

const storage = getStorage(app);

const WritePage = () => {
    const [title, setTitle] = useState("")
    const [file, setFile] = useState(null)
    const [category, setCategory] = useState("style")
    const [imageURL, setImageURL] = useState(null)
    const [open, setopen] = useState(false)
    const [value, setValue] = useState("")

    const { status } = useSession()
    const router = useRouter()

    useEffect(() => {
        const upload = async () => {
            const fileName = new Date().getTime + file.name
            const storageRef = ref(storage, fileName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
                (snapshot) => {

                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                },
                () => {

                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        setImageURL(downloadURL)
                        toast.success('Image Uploaded', {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    });
                }
            );
        }

        file && upload()
    }, [file])

    const slugify = (str) =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");

    const handleSubmit = async () => {
        const res = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                desc: value,
                img: imageURL,
                catSlug: category,
                slug: slugify(title)
            })
        })
        console.log(res);
        if (res.status === 200) {
            toast.success('Published Successfully', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }else{
            toast.error('Something went wrong', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        router.push(`/blogs?cat=${category}`)
    }

    if (status === "loading") {
        return (
            <div className="my-10 text-center" >
                Loading...
            </div>
        )
    }

    if (status === "unauthenticated") {
        router.push("/")
    }

    if (typeof window !== "object") {
        return (
            <div>Hello</div>
        )
    }

    else {

        return (
            <div className='flex flex-col gap-4 relative'>
                <input type="text" value={title} placeholder='Title' className='text-2xl outline-none bg-inherit w-full' onChange={e => setTitle(e.target.value)} />

                <div className="flex gap-2 items-center">
                    <h3>Category : </h3>
                    <select name="category" value={category} onChange={e => { setCategory(e.target.value); console.log(category); }} id="category" className="capitalize w-max rounded-md outline-none bg-inherit text-inherit">
                        <option className="bg-blue-300 text-black" value="style">style</option>
                        <option className="bg-blue-300 text-black" value="travel">travel</option>
                        <option className="bg-blue-300 text-black" value="coding">coding</option>
                        <option className="bg-blue-300 text-black" value="food">food</option>
                        <option className="bg-blue-300 text-black" value="fashion">fashion</option>
                        <option className="bg-blue-300 text-black" value="culture">culture</option>
                    </select>
                </div>

                <div className='flex gap-3'>
                    <button onClick={() => setopen(!open)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>

                    {open && (
                        <div className='flex gap-3'>
                            <input className='hidden' type="file" name="image" id="image" onChange={(e) => { setFile(e.target.files[0]) }} />
                            <button >
                                <label htmlFor="image" className=' cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                </label>
                            </button>
                            
                        </div>
                    )}
                </div>

                {imageURL && (
                    <div className="h-[30vh] md:h-[60vh] rounded-lg w-full overflow-hidden relative">
                        <Image src={imageURL} fill={true} alt="Thumbnail" className="rounded-lg object-cover"/>
                    </div>
                )}

                <textarea className='min-h-screen p-2 w-full outline-none text-[15px] bg-inherit' placeholder='Tell your story...' value={value} onChange={e => setValue(e.target.value)}/>

                <button className='w-max mx-auto md:absolute md:top-[0px] md:right-[0px] bg-green-600 text-white px-4 py-2 rounded-full' onClick={handleSubmit}>Publish</button>
            </div>
        )
    }
}

export default WritePage