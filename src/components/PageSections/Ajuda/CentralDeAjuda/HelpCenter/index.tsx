import { useState } from "react";
import { useLang } from "../../../../../hooks/useLang";
import { Container, QuestionContainer } from "./styles";
import arrow from '../assets/Arrow.svg';
interface HelpCenterProps {
  page: string;
  returnFunction: any;
}

interface Pergunta {
  pergunta: string;
  resposta: string;
}

interface QuestionProps {
  changeIndex: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  content: Pergunta[];
  title: string;
}

export function HelpCenter({ page, returnFunction }: HelpCenterProps) {
  const [perguntaIndex, setPerguntaIndex] = useState<number>(-1);
  const { TextContent } = useLang();


  if (perguntaIndex >= 0) {
    return (
      <Question
        index={perguntaIndex}
        content={TextContent.pages?.Ajuda.CentralDeAjuda[page].perguntas}
        changeIndex={setPerguntaIndex}
        title={TextContent.pages?.Ajuda.CentralDeAjuda[page].title}
      />
    );
  }

  return (
    <Container>
      <div className="header">
        <button onClick={returnFunction}>
          <img src={arrow} alt="" />
        </button>
        <h2>{TextContent.pages?.Ajuda.CentralDeAjuda[page].title}</h2>
      </div>
      <div className="question-wrapper">
        {[...TextContent.pages?.Ajuda.CentralDeAjuda[page].perguntas].map((el, index) => (
          <div className="question" key={index} onClick={() => setPerguntaIndex(index)}>
            <p>{el.pergunta}</p>
            {/* <p className="content">{el.resposta}</p> */}
          </div>
        ))}
      </div>
    </Container>
  );
}


function Question({ index, content, title, changeIndex }: QuestionProps) {
  const duvida = content[index];
  const rel = [...content].map((el, currentIndex) => {
    return {
      ...el,
      currentIndex,
    }
  })
  rel.splice(index, 1);

  return (
    <QuestionContainer>
      <div className="header">
        <button onClick={() => changeIndex(-1)}>
          <img src={arrow} alt="" />
        </button>
        <h2>{title}</h2>
      </div>
      <div className="left">
        <h4>{duvida.pergunta}</h4>
        <p>{duvida.resposta}</p>
      </div>

      <div className="right">
        <h4>Dúvidas relacionadas</h4>
        {rel.map((el) => (
          <div className="question" onClick={() => changeIndex(el.currentIndex)}>
            <p>{el.pergunta}</p>
          </div>
        ))}
      </div>
    </QuestionContainer>
  );
}