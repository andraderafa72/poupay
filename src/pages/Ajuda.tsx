import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainBanner } from "../components/Banner";
import { CentralDeAjuda } from "../components/PageSections/Ajuda/CentralDeAjuda";

export function Ajuda() {
  return (
    <>
      <Header page="ajuda"/>

      <main>
        <MainBanner 
          page={'Ajuda'}
        />
        
        <CentralDeAjuda />
      </main>

      <Footer />
    </>
  );
}