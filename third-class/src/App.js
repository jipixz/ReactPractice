import "./styles/styles.scss"
import Curso from './curso'

const cursos = [
  {
    "title": "React desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/35a55094-93d2-4091-b8b8-06949a5c63be.png",
    "price": 20,
    "profesor": "Ernesto Sanchez"
  }, 
  {
    "title": "Drupal desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/9ccf39c6-3e21-411d-9f09-c3589cf93750.png",
    "price": 40,
    "profesor": "Juan Perez"
  }, 
  {
    "title": "Go desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/ef9fcbc0-8292-4e65-8022-491baa2bac09.png",
    "price": 30,
    "profesor": "Pedro Hernández"
  }, 
  {
    "title": "HTML desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/cd6b19fb-bfcb-4197-bf68-4fd2ab7f37e2.png",
    "price": 50,
    "profesor": "Kike Chan"
  }
]

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
      {
        cursos.map ( curso => <Curso title={curso.title} price={curso.price} image={curso.image} profesor={curso.profesor} />)
      }
    </div> 
  </>
)

export default App;