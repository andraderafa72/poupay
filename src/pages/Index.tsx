import { Header } from "../components/Header";
import { Hero } from "../components/Page/index/Hero";
import { Vantagens } from "../components/Page/index/Vantagens";

export function Index (){
  return (
    <>
      <Header page="home" />
      <Hero />
      <main style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        <Vantagens />
      </main>
    </>
  );
}