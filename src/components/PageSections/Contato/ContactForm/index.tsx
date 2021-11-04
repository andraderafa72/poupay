import { FormEvent } from "react";
import { PrimaryButton } from "../../../Button";
import { Container } from "./styles";
import ilustration from './assets/ilustration.svg'
import blob from './assets/blob.svg'

export function ContactForm() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    alert('enviado')
  }

  return (
    <Container>
      <div className="left">
        <img src={blob} className="blob" alt="" />
        <img src={ilustration} alt="" />
      </div>

      <div className="right">
        <header>
          <h2>Entre em contato! Adoraríamos te ouvir :)</h2>
        </header>
        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label htmlFor="">Nome</label>
            <input type="text" placeholder="Digite aqui" required/>
          </div>
          
          <div className="input-group">
            <label htmlFor="">E-mail</label>
            <input type="text" placeholder="Digite aqui" required/>
          </div>

          <div className="input-group">
            <label htmlFor="">Assunto</label>
            <input type="text" placeholder="Digite aqui" required/>
          </div>

          <div className="input-group">
            <label htmlFor="">Mensagem</label>
            <textarea placeholder="Digite aqui" required/>
          </div>

   {/*        <div className="input-group">
            <label htmlFor="">Motivo</label>
            <input type="text" list="motivos" placeholder="Digite aqui" />
            <datalist id="motivos">
              <option>Motivo 1</option>
              <option>Motivo 2</option>
              <option>Motivo 3</option>
              <option>Motivo 4</option>
            </datalist>
          </div> */}

          <div className="input-group">
            <label htmlFor="">Anexos</label>
            <input type="file" placeholder="Digite aqui" />
          </div>

          <PrimaryButton type="submit">Enviar</PrimaryButton>
        </form>
      </div>
    </Container>
  );
}