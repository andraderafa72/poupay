import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainBanner } from "../components/Banner";
import { ContactForm } from "../components/PageSections/Contato/ContactForm";
import { BannerDeAjuda } from "../components/PageSections/Contato/Ajuda";
import { RedesSociais } from "../components/PageSections/Contato/RedesSociais";

export function Contato() {
  return (
    <>
      <Header page="contato"/>

      <main>
        <MainBanner 
          page={'Contato'}
        />
        <ContactForm />
        <BannerDeAjuda />
        <RedesSociais />
      </main>

      <Footer />
    </>
  );
}