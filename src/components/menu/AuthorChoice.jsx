import Image from "next/image";
import Link from "next/link";

const AuthorChoice = ({ withImage }) => {
    return (
        <div className='flex flex-col h-full gap-8 mt-5'>
            <Link href="/posts/embrace-the-cold-with-style-the-moose-knuckle-coat" className='h-[15vh] sm:h-[10vh] flex items-center gap-3 '>
                {
                withImage &&
                    <div className="imgContainer aspect-square w-[1/3] h-full relative">
                        <Image src="https://firebasestorage.googleapis.com/v0/b/blog-37a17.appspot.com/o/function%20getTime()%20%7B%20%5Bnative%20code%5D%20%7Dstyle1.png?alt=media&token=46302012-82ac-499a-a91b-eabffe4d6264" alt="CardImg" fill className="object-cover rounded-full" />
                    </div>
                }
                <div className="textContainer w-[2/3] flex text-[12px] flex-col gap-1">
                    <span className="text-red-500 bg-yellow-300 px-2 py-1 rounded-2xl w-max text-[10px]">GENERAL</span>
                    <div>
                        <h1 >
                        Embrace the Cold with Style: The Moose Knuckle Coat
                        </h1>
                    </div>
                    <span className="text-red-500">John Renis</span>
                </div>
            </Link>
            <Link href="/posts/which-foods-are-rich-in-omega-3-and-how-do-they-impact-our-health" className='h-[15vh] sm:h-[10vh] flex items-center gap-3 '>
                {
                withImage && <div className="imgContainer aspect-square w-[1/3] h-full relative">
                    <Image src="https://firebasestorage.googleapis.com/v0/b/blog-37a17.appspot.com/o/function%20getTime()%20%7B%20%5Bnative%20code%5D%20%7Dfood2.webp?alt=media&token=70b99efa-5cc7-41d2-b071-ee625f8f713f" alt="CardImg" fill className="object-cover rounded-full" />
                </div>
                }
                <div className="textContainer flex text-[12px] w-[2/3] gap-1 flex-col">
                    <span className="text-white bg-indigo-300 px-2 py-1 rounded-2xl w-max text-[10px]">FOOD</span>
                    <div >
                        <h1 >
                        Which Foods Are Rich in Omega-3 and How Do They Impact Our Health
                        </h1>
                    </div>
                    <span className="text-red-500">Sarah Taylor</span>
                </div>
            </Link>
            <Link href="/posts/spanish-fashion" className='flex items-center gap-3 h-[15vh] sm:h-[10vh]'>
                {
                withImage && <div className="imgContainer aspect-square h-full w-[1/3] relative">
                    <Image src="https://firebasestorage.googleapis.com/v0/b/blog-37a17.appspot.com/o/function%20getTime()%20%7B%20%5Bnative%20code%5D%20%7Dfash2.webp?alt=media&token=851227fc-ef41-49ce-81cb-37bbd92e4a27" alt="CardImg" fill className="object-cover rounded-full" />
                </div>
                }
                <div className="textContainer flex text-[12px] flex-col gap-1 w-[2/3]">
                    <span className="text-blue-800 bg-green-300 px-2 py-1 rounded-2xl w-max text-[10px]">FASHION</span>
                    <div>
                        <h1 >
                        SPANISH FASHION
                        </h1>
                    </div>
                    <span className="text-red-500">Andrew Ramen</span>
                </div>
            </Link>
        </div>
    );
}

export default AuthorChoice;