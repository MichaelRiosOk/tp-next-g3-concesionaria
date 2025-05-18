import Image from "next/image";
import Cabecera from "./cabecera/Cabecera";
import Pie from "./pie/PieDePagina";
import HomePage from "./homePage/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}