import prisma from "@/utils/connect";

const { NextResponse } = require("next/server");

// GET SINGLE POST 
export const GET = async (req, { params }) => {

    const  slug  = params.slug
    try {
        const post = await prisma.post.findUnique({
            where: {
                slug,
            },
            include: {user: true}
        })
        return new NextResponse(
            JSON.stringify( post , { status: 200 })
        )
    } catch (error)  {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: "Something went Wrong!" }, { status: 500 })
        )
    }
}