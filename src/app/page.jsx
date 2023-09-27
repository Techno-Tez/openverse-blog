import Navbar from "@/components/navbar/Navbar";
import styles from "./homepage.module.css";
import Footer from "@/components/footer/Footer";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

export default function Home({searchParams}) {

  const page = parseInt(searchParams.page) || 1;
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 md:mt-10">
        <CardList className="col-span-2" page={page}/>
        <Menu className="col-span-1" />
      </div>
    </div>
  )
}
