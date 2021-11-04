import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainBanner } from "../components/Banner";
import { NossaHistoria } from "../components/PageSections/SobreNos/NossaHistoria";
import { Principios } from "../components/PageSections/SobreNos/Principios";
import { TimePouPay } from "../components/PageSections/SobreNos/TimePouPay";
import { useLang } from "../hooks/useLang";

export function SobreNos() {
  const { TextContent } = useLang();

  return (
    <>
      <Header page="sobre"/>

      <main>
        <MainBanner 
          page={'Sobre nós'}
          title={TextContent.pages?.SobreNos.Banner.title}
          subtitle={TextContent.pages?.SobreNos.Banner.subtitle}
        />
        <NossaHistoria />
        <Principios />
        <TimePouPay />
      </main>

      <Footer />
    </>
  );
}