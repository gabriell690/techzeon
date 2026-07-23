import TopHeader from "./TopHeader";
import CategoryMenu from "./CategoryMenu";
import TrendingBar from "./TrendingBar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">

      <TrendingBar />
      
      <TopHeader />

      <CategoryMenu />

      

    </header>
  );
}