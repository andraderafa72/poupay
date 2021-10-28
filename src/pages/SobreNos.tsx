import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainBanner } from "../components/Banner";
import { NossaHistoria } from "../components/PageSections/SobreNos/NossaHistoria";
import { Principios } from "../components/PageSections/SobreNos/Principios";
import { TimePouPay } from "../components/PageSections/SobreNos/TimePouPay";

export function SobreNos() {
  return (
    <>
      <Header page="sobre"/>

      <main>
        <MainBanner page={'Sobre nós'}/>
        <NossaHistoria />
        <Principios />
        <TimePouPay />
      </main>

      <Footer />
    </>
  );
}