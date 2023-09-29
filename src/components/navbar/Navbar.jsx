"use client"
import React, { useState } from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import { Kaushan_Script } from 'next/font/google'
import { signOut, useSession } from 'next-auth/react'
import { toast } from 'react-toastify'

const ks = Kaushan_Script({
    weight: '400',
    subsets: ['latin']
})

const link = [
    {
        name: "ABOUT",
        link: "about-us",
        favIcon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
        </svg>
    },
    {
        name: "CONTACT",
        link: "contact-us",
        favIcon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>
    }
]


const Navbar = () => {
    const { status } = useSession()

    const [burger, setBurger] = useState("")
    return (
        <div className={`${styles.main} mb-6 sm:mb-8 md:mb-10 max-w-[1440px] p-3 lg:px-5 flex justify-between items-center min-h-[10vh] mx-auto poppins z-[90] border-b border-yellow-300 relative`}>
            <Link href="/" className='flex gap-3 items-center'>
                <Image src="/logo.png" height={50} width={50} alt='logo_image' />
                <h1 className={`${ks.className} text-3xl`}>OpenVerse</h1>
            </Link>

            <div className='relative z-10'>
                <div className='hidden lg:flex items-center gap-8 poppins font-medium'>

                    <ThemeToggle />
                    <Link href="/about-us" className=' '>About</Link>

                    <Link href="/contact" className=''>Contact</Link>
                    {
                        status === "unauthenticated" ?
                            (
                                <Link href="/login">Login</Link>
                            )
                            : (
                                <div className="flex gap-8">
                                    <Link href="/write">Write</Link>
                                    <Link href="/" onClick={() => {
                                        signOut();
                                        toast.success('Logged Out Successfully', {
                                            position: "top-right",
                                            autoClose: 3000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                            theme: "light",
                                        });
                                        
                                        }}>Logout</Link>
                                </div>
                            )
                    }
                </div>

                <div className='lg:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={() => setBurger(true)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>

            {burger &&
                <div className='lg:hidden w-full h-screen bg-black opacity-80 fixed z-10 top-0 left-0 duration-200' onClick={() => { setBurger(false) }}> </div>
            }

            <div className={burger ? 'lg:hidden fixed min-w-[80vw] sm:min-w-[40vw] min-h-screen right-0 top-0 z-20 pt-6 duration-500 bg-white text-black' : 'lg:hidden fixed min-w-[80vw] sm:min-w-[40vw] min-h-screen right-[-100%] top-0 z-20 pt-6 duration-500 overflow-hidden bg-white text-black'}>
                <div className='flex justify-between items-center px-6'>
                    <Link href="/" onClick={() => setBurger(false)}>
                        <Image src="/logo.png" alt="logo" height={50} width={50} />
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 right-4" onClick={() => setBurger(false)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='flex flex-col pl-5 gap-6 mt-6 relative'>
                    {link.map((tag, idx) => {
                        return (
                            <div key={idx}>
                                {tag.link &&
                                    <Link className='flex gap-2' href={`/${tag.link}`} onClick={() => setBurger(false)}>
                                        {tag.favIcon}
                                        {tag.name}
                                    </Link>}
                                {!tag.link &&
                                    <div className='flex gap-2' onClick={() => setBurger(false)}>
                                        {tag.favIcon}
                                        {tag.name}
                                    </div>
                                }
                            </div>
                        )
                    })}
                    {
                        status === "unauthenticated" ?
                            (
                                <Link href="/login" className='flex gap-2' onClick={() => setBurger(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                    </svg>

                                    LOGIN
                                </Link>
                            )
                            : (
                                <>
                                    <Link href="/write" className='flex gap-2' onClick={() => setBurger(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                        </svg>
                                        WRITE
                                    </Link>
                                    <Link href="/" className='flex gap-2' onClick={() => { 
                                        signOut();
                                        setBurger(false)
                                        toast.success('Logged out Successfully', {
                                            position: "top-right",
                                            autoClose: 3000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                            theme: "light",
                                        });
                                        }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                        </svg>
                                        LOGOUT
                                    </Link>
                                </>
                            )
                    }
                    <ThemeToggle />
                </div>
                <div className='absolute bottom-5 left-5 text-2xl flex flex-col gap-2'>
                    <h3 className={ks.className}>OpenVerse</h3>
                    <h3 className="text-sm ">by <span className='text-yellow-500 font-medium'>TechTez</span></h3>
                </div>

            </div>
        </div>
    )
}

export default Navbar