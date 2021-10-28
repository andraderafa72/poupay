import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainBanner } from "../components/PageSections/SobreNos/Banner";
import { NossaHistoria } from "../components/PageSections/SobreNos/NossaHistoria";
import { Principios } from "../components/PageSections/SobreNos/Principios";
import { TimePouPay } from "../components/PageSections/SobreNos/TimePouPay";

export function SobreNos() {
  return (
    <>
      <Header page="sobre"/>

      <main>
        <MainBanner />
        <NossaHistoria />
        <Principios />
        <TimePouPay />
      </main>

      <Footer />
    </>
  );
}