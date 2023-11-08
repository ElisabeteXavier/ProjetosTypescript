import { useEffect, useState } from "react";
import Calculadora from "./Calculadora";

function Tela() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [operador, setOperador] = useState("+");
  const [resultado, setResultado] = useState(0);
  const [historico, setHistorico] = useState([{}]);

  function IncrementarHistorico(result, sinal) {
    console.log(resultado, "resulfhbdf");
    setHistorico([
      ...historico,
      {
        numero1: numero1,
        operador: sinal,
        numero2: numero2,
        resultado: result.toFixed(2),
      },
    ]);
  }

  function Subtracao() {
    const result = numero1 - numero2;
    setOperador("-");
    setResultado(result.toFixed(2));
    IncrementarHistorico(result, "-");
  }
  function Adicao() {
    const result = numero1 + numero2;
    setOperador("+");
    setResultado(result.toFixed(2));
    IncrementarHistorico(result, "+");
  }
  function Multiplicacao() {
    const result = numero1 * numero2;
    setOperador("*");
    setResultado(result.toFixed(2));
    IncrementarHistorico(result, "*");
  }
  function Divisao() {
    const result = numero1 / numero2;
    setOperador("/");
    setResultado(result.toFixed(2));
    IncrementarHistorico(result, "/");
  }

  return (
    <div>
      <div className="container">
        <div className="tela">
          <div>
            <input
              className="inputNumero"
              type="number"
              value={numero1}
              onChange={(e) => setNumero1(Number(e.target.value))}
            />
            <input
              className="inputNumero"
              type="number"
              value={numero2}
              onChange={(e) => setNumero2(Number(e.target.value))}
            />
          </div>
          <div>
            <h1>
              {numero1} {operador} {numero2} = {resultado}
            </h1>
          </div>
          <div className="calculadora">
            <Calculadora function={Subtracao} operador="-" />
            <Calculadora function={Adicao} operador="+" />
            <Calculadora function={Multiplicacao} operador="*" />
            <Calculadora function={Divisao} operador="/" />
          </div>
        </div>

        <div className="container-historico">
          <div className="historico">
            <p>Histórico</p>
            {historico?.length > 1 && (
              <>
                {console.log(historico, "histoornhdbh")}
                {historico.map((item, index) => (
                  <div>
                    {item?.numero1}
                    {item?.operador}
                    {item?.numero2} {index > 0 ? "=" : ""} {item?.resultado}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tela;
