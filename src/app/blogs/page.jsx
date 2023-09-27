import CardList from "@/components/cardList/CardList"
import Menu from "@/components/menu/Menu"

const page = ({searchParams}) => {
    const page = parseInt(searchParams.page) || 1;
    const cat = searchParams.cat

    return (
        <>
        <div>
            <h1 className="text-center w-full text-xl sm:text-2xl md:text-3xl capitalize">{cat} Blogs</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-10">
            <CardList page={page} cat={cat}/>
            <Menu className="col-span-1" />
        </div>
        </>
    )
}

export default page