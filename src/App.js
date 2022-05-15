import './App.css';
import Testimonio from "./componentes/Testimonio.jsx"

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros clientes sobre AVSISTEMA</h1>
      <Testimonio 
      nombre="Joseph Brito"
      pais="Colombia"
      imagen="joseph"
      cargo="Medico General"
      empresa="Sanitas EPS"
      testimonio="LoExcelente empresa que se dedica a que nosotros sus cliente obtengamos lo que queremos en realidad, y lo principal que maneja muy bien calidad precio.
      Mi pagina diseñada por Avsistema es www.achujeeraa.org con aplicación SEO local." />

      <Testimonio 
      nombre="Michael Carrillo Fuetes"
      pais="Colombia"
      imagen="michael"
      cargo="Psicología"
      empresa="Ut Salud Guajira"
      testimonio="Recomiendo Avsistema por su facilidad de encaminar a nosotros los pequeños comerciantes a entrar a competir con la internet con precios que nos permite estar en competencia con empresas que están hace muchos años en la internet , en igualdad de condiciones." />

      <Testimonio 
      nombre="Roberto Henrique Molina"
      pais="Colombia"
      imagen="roberto"
      cargo="Mecanico Hidraulico"
      empresa="Jeans Motors"
      testimonio="Recomiendo Avsistema por su calidad y garantia en sus servicios encaminada a nosotros los pequeños comerciantes a entrar a competir con la internet con precios que nos permite estar en competencia con empresas que están hace muchos años en la internet , en igualdad de condiciones." />
      </div>
    </div>
  );
}

export default App;
