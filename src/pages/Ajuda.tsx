import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainBanner } from "../components/Banner";
import { CentralDeAjuda } from "../components/PageSections/Ajuda/CentralDeAjuda";
import { useLang } from "../hooks/useLang";

export function Ajuda() {
  const { TextContent } = useLang();
  return (
    <>
      <Header page="ajuda"/>

      <main>
        <MainBanner 
          page={'Ajuda'}
          title={TextContent.pages?.Ajuda.Banner.title}
          subtitle={TextContent.pages?.Ajuda.Banner.subtitle}
        />
        
        <CentralDeAjuda />
      </main>

      <Footer />
    </>
  );
}