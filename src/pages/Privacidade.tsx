import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainBanner } from "../components/Banner";
import { Politica } from "../components/PageSections/Privacidade/Politica";

export function Privacidade() {
  return (
    <>
      <Header page="politica"/>

      <main>
        <MainBanner page={'Política de privacidade'}/>
        <Politica />
      </main>

      <Footer />
    </>
  );
}