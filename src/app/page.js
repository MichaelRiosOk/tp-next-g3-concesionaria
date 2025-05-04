import Image from "next/image";
import Cabecera from "./cabecera/Cabecera";
import Pie from "./pie/PieDePagina";
import HomePage from "./homePage/HomePage";

export default function Home() {
  return (
    <>
      <Cabecera />
      <HomePage />
      <Pie />
    </>
  );
}