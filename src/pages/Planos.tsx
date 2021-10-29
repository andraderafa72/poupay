import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainBanner } from "../components/Banner";
import { Pricing } from "../components/PageSections/PlanosEPreços/Pricing";
import { ComeceAgora } from "../components/PageSections/PlanosEPreços/ComeceAgora";
import { BaixeOApp } from "../components/PageSections/PlanosEPreços/BaixeOApp";
import { CardsSection } from "../components/PageSections/PlanosEPreços/CardsSection";
import { Comparativo } from "../components/PageSections/PlanosEPreços/Comparativo";

export function Planos() {
  return (
    <>
      <Header page="planos"/>

      <main>
        <MainBanner 
          page={'Planos e preços'}
        />
        <Pricing />
        <ComeceAgora />
        <CardsSection />
        <BaixeOApp />
        <Comparativo />
      </main>

      <Footer />
    </>
  );
}