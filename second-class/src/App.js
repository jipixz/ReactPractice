import "./styles/styles.scss"
import Curso from './curso'

const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt="test" src="https://ed-grid.com/assets/img/utils/grid.svg" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Mi primer curso</p>
            <p>Algún día será una página web</p>
            <a href="https://www.google.com" className="button">Comprar</a>
          </div>
        </div>
      </div>
    </div>

    <div className="ed-grid m-grid-3">
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
    </div>
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