import { useState } from "react";

function Contador() {
    const [numero, setNumero] = useState(0);
  function subtrair() {
   
    setNumero(numero-1);
  }
  function adicionar() {
   
    setNumero(numero+1);
  }
 
  return (
    <div>
      <h1>Meu primeiro componente {numero}</h1>
      <button onClick={subtrair}> Subtrair</button>
      <button onClick={adicionar}> Adicionar</button>
    </div>
  );
}
export default Contador;
