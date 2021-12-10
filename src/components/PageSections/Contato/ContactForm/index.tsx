import { useState } from "react";
import { PrimaryButton } from "../../../Button";
import { Container } from "./styles";
import ilustration from './assets/ilustration.svg'
import blob from './assets/blob.svg';
import { api } from "../../../../services/api";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface FormProps {
  nome: string;
  email: string;
  celular: string;
  empresa?: string;
  assunto: string;
  mensagem: string;
}

export function ContactForm() {
  const [anexos, setAnexos] = useState<FileList | null>();
  const { register, handleSubmit } = useForm<FormProps>()

  async function onSubmit(data: FormProps) {
    const loadingToast = toast.loading('Enviando sua mensage...')
    const body = {
      nome: data.nome,
      email: data.email,
      celular: data.celular,
      empresa: data.empresa || '',
      assunto: data.assunto,
      mensagem: data.mensagem,
      anexos: anexos,
    }

    console.log(body);
    

    try {
      await api.post('', body);

      toast.remove(loadingToast);
      toast.success('Mensagem enviada!')
    } catch (error) {
      toast.remove(loadingToast);
      toast.error('Ocorreu um erro ao enviar sua mensagem.')
      console.log(error)
    }
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
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="input-group">
            <label htmlFor="">Nome</label>
            <input {...register('nome')} type="text" placeholder="Digite aqui" required />
          </div>

          <div className="input-group">
            <label htmlFor="">E-mail</label>
            <input {...register('email')} type="text" placeholder="Digite aqui" required />
          </div>

          <div className="input-group">
            <label htmlFor="">Celular</label>
            <input {...register('celular')} type="tel" placeholder="Digite aqui" required />
          </div>

          <div className="input-group">
            <label htmlFor="">Empresa (opcional)</label>
            <input {...register('empresa')} type="text" placeholder="Digite aqui" />
          </div>

          <div className="input-group">
            <label htmlFor="">Assunto</label>
            <input {...register('assunto')} type="text" placeholder="Digite aqui" required />
          </div>

          <div className="input-group">
            <label htmlFor="">Mensagem</label>
            <textarea {...register('mensagem')} placeholder="Digite aqui" required />
          </div>

          <div className="input-group">
            <label>Anexos</label>
            <label className="file" htmlFor="anexos">Selecione os arquivos</label>
            <input type="file" placeholder="Selecione" id="anexos" onChange={e => setAnexos(e.target.files)} multiple/>
            {anexos && Array.from(anexos).map(file => (<span>{file.name},</span>))}
          </div>

          <PrimaryButton type="submit">Enviar</PrimaryButton>
        </form>
      </div>
    </Container>
  );
}