import "./styles/styles.scss"
import Banner from '../../fourth-class/src/banner'
import Formulario from '../../fourth-class/src/formulario'

const App = () => (
  <>
    <Banner />
    <Formulario />
  </>
)

export default App;


// Reglas JSX
// 1. Toda etiqueta debe de cerrarse
// 2. Los componentes deben devolver un solo elemento padre
// 3. Apoyarse de los Fragment cuando necesito devolvwer 2 elementos
// 4. Fragment   =>   <> hijos </>
// 5. img siempre se cierra
// 6. class   =>   className
// 7. for   =>   htmlFor
// 8. NO if, else, while
