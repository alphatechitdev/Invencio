import Image from "next/image";
import styles from "./page.module.css";
import Intro from "@/components/Intro/Intro";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
    <Header/>
    <Intro/>
    </>
  );
}
