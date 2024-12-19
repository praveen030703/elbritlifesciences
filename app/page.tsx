import Navbar from "./Navbar/page";
import Content from "./Content/page";
import Footer from "./Footer/page";
import Card from "./Card/page";
import Ingredients from "./Ingrediants/page";
import Blog from "./Blog/page";
import "./responsive.css";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Content />
      <Card />
      <Ingredients />
      <Blog />

      <Footer />
    </div>
  );
}
