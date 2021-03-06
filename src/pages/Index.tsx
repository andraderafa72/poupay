import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { AppSection } from "../components/PageSections/index/AppSection";
import { BaixeOApp } from "../components/PageSections/index/BaixeOApp";
import { Hero } from "../components/PageSections/index/Hero";
import { Midia } from "../components/PageSections/index/Midia";
import { NossosUsuarios } from "../components/PageSections/index/NossosUsuarios";
import { Parceiros } from "../components/PageSections/index/Parceiros";
import { Recursos } from "../components/PageSections/index/Recursos";
import { Vantagens } from "../components/PageSections/index/Vantagens";
import { useLang } from "../hooks/useLang";

export function Index() {
  const { TextContent } = useLang();
  
  return (
    <>
      <Header page="home" />
      
      <main>
        <Hero />
        <Vantagens TextContent={TextContent}/>
        <NossosUsuarios />
        <Midia />
        <AppSection />
        <Recursos />
        <Parceiros />
        <BaixeOApp />
      </main>

      <Footer />
    </>
  );
}