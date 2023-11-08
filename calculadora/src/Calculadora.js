
function Calculadora (props) {

    return(
        <div >          
        <button className="botao" onClick={props.function}>
        {props.operador}</button>
        </div>

    )

}
export default Calculadora;