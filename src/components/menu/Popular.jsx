import Image from "next/image";
import Link from "next/link";

const Popular = () => {
    return (
        <div className='flex flex-col gap-6'>
            <Link href="/posts/why-glitter-is-the-avocado-toast-of-fashion" className='flex items-center gap-4'>
                <div className="textContainer flex text-[12px] flex-col gap-1">
                    <span className="text-red-500 bg-yellow-300 px-2 py-1 rounded-2xl w-max text-[10px]">FASHION</span>
                    <div >
                        <h1 >
                        Why Glitter is the Avocado Toast of Fashion
                        </h1>
                    </div>
                    <span className="text-red-500">Aeria Sanheuz</span>
                </div>
            </Link>
            <Link href="/posts/the-crosscurrents-of-fashion-trends" className='flex items-center gap-3'>
               
                <div className="textContainer flex text-[12px] flex-col gap-1">
                    <span className="text-white bg-indigo-300 px-2 py-1 rounded-2xl w-max text-[10px]">FASHION</span>
                    <div>
                        <h1 >
                        The Crosscurrents of Fashion Trends
                        </h1>
                    </div>
                    <span className="text-red-500">Mia Martinez</span>
                </div>
            </Link>

            <Link href="/posts/redux-mastering-state-management-for-seamless-development" className='flex items-center gap-3'>
               
                <div className="textContainer flex text-[12px] flex-col gap-1">
                    <span className="text-blue-800 bg-green-300 px-2 py-1 rounded-2xl w-max text-[10px]">CODING</span>
                    <div>
                        <h1 >
                        Redux: Mastering State Management for Seamless Development
                        </h1>
                    </div>
                    <span className="text-red-500">Tejas Patel</span>
                </div>
            </Link>
        </div>
    );
}

export default Popular;