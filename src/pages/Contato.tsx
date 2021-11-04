import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainBanner } from "../components/Banner";
import { ContactForm } from "../components/PageSections/Contato/ContactForm";
import { BannerDeAjuda } from "../components/PageSections/Contato/Ajuda";
import { RedesSociais } from "../components/PageSections/Contato/RedesSociais";
import { useLang } from "../hooks/useLang";

export function Contato() {
  const { TextContent } = useLang();
  
  return (
    <>
      <Header page="contato"/>

      <main>
        <MainBanner 
          page={'Contato'}
          title={TextContent.pages?.Contato.Banner.title}
          subtitle={TextContent.pages?.Contato.Banner.subtitle}
        />
        <ContactForm />
        <BannerDeAjuda />
        <RedesSociais />
      </main>

      <Footer />
    </>
  );
}