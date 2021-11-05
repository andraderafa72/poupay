import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainBanner } from "../components/Banner";
import { Pricing } from "../components/PageSections/PlanosEPreços/Pricing";
import { ComeceAgora } from "../components/PageSections/PlanosEPreços/ComeceAgora";
import { BaixeOApp } from "../components/PageSections/PlanosEPreços/BaixeOApp";
import { CardsSection } from "../components/PageSections/PlanosEPreços/CardsSection";
import { Comparativo } from "../components/PageSections/PlanosEPreços/Comparativo";
import { useLang } from "../hooks/useLang";

export function Planos() {
  const { TextContent } = useLang();
  return (
    <>
      <Header page="planos"/>

      <main>
        <MainBanner 
          page={'Planos e preços'}
          title={TextContent.pages?.Planos.Banner.title}
          subtitle={TextContent.pages?.Planos.Banner.subtitle}
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