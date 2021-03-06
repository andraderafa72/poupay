import { PrimaryButton } from "../../../Button";
import { Container } from "./styles";
import check from "../shared/check.svg";
import pinkCheck from "./assets/pink-check.svg";
import not from "./assets/not.svg";
import { useEffect, useRef, useState } from "react";

export function Pricing() {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    setScroll(331);
  }, []);
  
  
  if(ref.current && containerRef.current){
    if(ref.current.clientWidth >= 410 && ref.current.clientWidth < 440){
      ref.current.scrollLeft = ref.current.clientWidth / 1.35
    } else if(ref.current.clientWidth >= 750 && ref.current.clientWidth < 780){
      ref.current.scrollLeft = 140
    } else if (ref.current.clientWidth < 410 && ref.current.clientWidth > 340){
      ref.current.scrollLeft = ref.current.clientWidth / 1.1
    } else if (ref.current.clientWidth < 340){
      ref.current.scrollLeft = ref.current.clientWidth / 1.035
    }
  }
  
  function handleScroll() {
    console.log(scroll);
  }

  return (
    <Container ref={containerRef}>
      <header>
        <h2>Simples, valores transparentes</h2>
        <span>Sem contratos ou surpresas extras</span>
      </header>

      <main className="desktop">
        <div className="wrapper">
          <div className="col-1">
            <div className="space"></div>
            <div className="todos-os-beneficios">
              <p>Lorem ipsum dolor sit amet,</p>
              <p>Lorem ipsum dolor sit amet,</p>
              <p>Lorem ipsum dolor sit amet,</p>
              <p>Lorem ipsum dolor sit amet,</p>
              <p>Lorem ipsum dolor sit amet,</p>
              <p>Lorem ipsum dolor sit amet,</p>
              <p>Lorem ipsum dolor sit amet,</p>
              <p>Lorem ipsum dolor sit amet,</p>
            </div>
          </div>

          <div className="col-2">
            <div className="free">
              <span>Free</span>
              <p className="price">
                R$ <strong>0,00</strong> <span>/m??s</span>
              </p>
              <PrimaryButton>Escolher Plano</PrimaryButton>
            </div>
            <div className="wrapper">
              <div className="plano-free">
                <p>
                  <img src={check} alt="" />
                </p>
                <p>
                  <img src={check} alt="" />
                </p>
                <p>
                  <img src={check} alt="" />
                </p>
                <p>
                  <img src={check} alt="" />
                </p>
                <p>
                  <img src={check} alt="" />
                </p>
                <p>
                  <img src={not} alt="" />
                </p>
                <p>
                  <img src={not} alt="" />
                </p>
                <p>
                  <img src={not} alt="" />
                </p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="premium">
              <span className="recomendado">Recomendado</span>
              <span>Premium anual</span>
              <p className="price">
                R$ <strong>0,00</strong> <span>/m??s</span>
              </p>
            </div>

            <div className="plano-anual">
              <p>
                <img src={pinkCheck} alt="" />
              </p>
              <p>
                <img src={pinkCheck} alt="" />
              </p>
              <p>
                <img src={pinkCheck} alt="" />
              </p>
              <p>
                <img src={pinkCheck} alt="" />
              </p>
              <p>
                <img src={pinkCheck} alt="" />
              </p>
              <p>
                <img src={pinkCheck} alt="" />
              </p>
              <p>
                <img src={pinkCheck} alt="" />
              </p>
              <p>
                <img src={pinkCheck} alt="" />
              </p>

              <div className="button">
                <PrimaryButton>Escolher plano</PrimaryButton>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="premium-mensal">
              <span>Premium mensal</span>
              <p className="price">
                R$ <strong>0,00</strong> <span>/m??s</span>
              </p>
              <PrimaryButton>Escolher Plano</PrimaryButton>
            </div>

            <div className="wrapper">
              <div className="plano-premium">
                <p>
                  <img src={check} alt="" />
                </p>
                <p>
                  <img src={check} alt="" />
                </p>
                <p>
                  <img src={check} alt="" />
                </p>
                <p>
                  <img src={check} alt="" />
                </p>
                <p>
                  <img src={check} alt="" />
                </p>
                <p>
                  <img src={check} alt="" />
                </p>
                <p>
                  <img src={check} alt="" />
                </p>
                <p>
                  <img src={check} alt="" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <main className="mobile"  ref={ref} onScroll={handleScroll}>
        <div className="col-1">
          <div className="pricing">
            <span>Free</span>
            <p className="price">
              R$ <strong>0,00</strong> <span>/m??s</span>
            </p>
          </div>
          <div className="wrapper">
            <div className="plano">
              <p>
                <img src={check} alt="" />
                Lorem ipsum dolor sit amet,
              </p>
              <p>
                <img src={check} alt="" />
                Lorem ipsum dolor sit amet,
              </p>
              <p>
                <img src={check} alt="" />
                Lorem ipsum dolor sit amet,
              </p>
              <p>
                <img src={check} alt="" />
                Lorem ipsum dolor sit amet,
              </p>
              <p>
                <img src={check} alt="" />
                Lorem ipsum dolor sit amet,
              </p>
              <p>
                <img src={not} alt="" />
                Lorem ipsum dolor sit amet,
              </p>
              <p>
                <img src={not} alt="" />
                Lorem ipsum dolor sit amet,
              </p>
              <p>
                <img src={not} alt="" />
                Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>
          <PrimaryButton>Escolher Plano</PrimaryButton>

        </div>

        <div className="col-2">
          <div className="pricing">
            <span>Premium anual</span>
            <p className="price">
              R$ <strong>0,00</strong> <span>/m??s</span>
            </p>
          </div>
          <div className="wrapper">
            <div className="plano">
              <p>
                <img src={pinkCheck} alt="" />
                Lorem ipsum dolor sit amet,
              </p>
              <p>
                <img src={pinkCheck} alt="" />
                Lorem ipsum dolor sit amet,
              </p>
              <p>
                <img src={pinkCheck} alt="" />
                Lorem ipsum dolor sit amet,
              </p>
              <p>
                <img src={pinkCheck} alt="" />
                Lorem ipsum dolor sit amet,
              </p>
              <p>
                <img src={pinkCheck} alt="" />
                Lorem ipsum dolor sit amet,
              </p>
              <p>
                <img src={pinkCheck} alt="" />
                Lorem ipsum dolor sit amet,
              </p>
              <p>
                <img src={pinkCheck} alt="" />
                Lorem ipsum dolor sit amet,
              </p>
              <p>
                <img src={pinkCheck} alt="" />
                Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>
          <PrimaryButton>Escolher Plano</PrimaryButton>

        </div>

        <div className="col-3">
          <div className="pricing">
            <span>Premium mensal</span>
            <p className="price">
              R$ <strong>0,00</strong> <span>/m??s</span>
            </p>
          </div>
          <div className="wrapper">
            <div className="plano">
              <p>
                <img src={check} alt="" />
                Lorem ipsum dolor sit amet,
              </p>
              <p>
                <img src={check} alt="" />
                Lorem ipsum dolor sit amet,
              </p>
              <p>
                <img src={check} alt="" />
                Lorem ipsum dolor sit amet,
              </p>
              <p>
                <img src={check} alt="" />
                Lorem ipsum dolor sit amet,
              </p>
              <p>
                <img src={check} alt="" />
                Lorem ipsum dolor sit amet,
              </p>
              <p>
                <img src={check} alt="" />
                Lorem ipsum dolor sit amet,
              </p>
              <p>
                <img src={check} alt="" />
                Lorem ipsum dolor sit amet,
              </p>
              <p>
                <img src={check} alt="" />
                Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>
          <PrimaryButton>Escolher Plano</PrimaryButton>
        </div>
      </main>
    </Container>
  );
}
