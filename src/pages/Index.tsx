import { Header } from "../components/Header";
import { AppSection } from "../components/PageSections/index/AppSection";
import { Hero } from "../components/PageSections/index/Hero";
import { Midia } from "../components/PageSections/index/Midia";
import { NossosUsuarios } from "../components/PageSections/index/NossosUsuarios";
import { Vantagens } from "../components/PageSections/index/Vantagens";

export function Index() {
  return (
    <>
      <Header page="home" />
      <main>
        <Hero />
        <Vantagens />
        <NossosUsuarios />
        <Midia />
        <AppSection />
      </main>
    </>
  );
}