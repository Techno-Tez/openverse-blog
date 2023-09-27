"use client"
import { useSession, signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

const LoginPage = () => {
    const {data, status} = useSession()
    const router = useRouter()

    if (status === "loading"){
        return (
            <div className="my-10 text-center" >
                Loading...
            </div>
        )
    }

    if (status === "authenticated"){
        router.push("/")
    }

    return (
        <div className="md:p-10 h-[70vh] md:h-[60vh]">
            <div className="flex flex-col gap-5 justify-center items-center bg-black/10 h-full rounded-xl">
                <button className="px-2 md:px-4 py-2 bg-green-500 text-white w-[70%] sm:w-[50%] md:w-[40%] rounded-lg" onClick={()=> signIn("google")}>Sign in with Google</button>
                
            </div>
        </div>
    );
}

export default LoginPage;