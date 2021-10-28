import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainBanner } from "../components/Banner";

export function Contato() {
  return (
    <>
      <Header page="contato"/>

      <main>
        <MainBanner 
          page={'Contato'}
        />
        
      </main>

      <Footer />
    </>
  );
}