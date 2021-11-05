import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainBanner } from "../components/Banner";
import { Politica } from "../components/PageSections/Privacidade/Politica";
import { useLang } from "../hooks/useLang";

export function Privacidade() {
  const { TextContent } = useLang();
  return (
    <>
      <Header page="politica"/>

      <main>
        <MainBanner 
          page={'Política de privacidade'}
          title={TextContent.pages?.Privacidade.Banner.title}
          subtitle={TextContent.pages?.Privacidade.Banner.subtitle}
        />
        <Politica />
      </main>

      <Footer />
    </>
  );
}