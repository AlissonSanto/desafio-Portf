import Presentation from './Elementos/Componentes/Presentation/Presentation';
import Header from './Elementos/Componentes/Header/Header';
import Projects from './Elementos/Componentes/Projects/Projects';
import TimeLine from './Elementos/Componentes/TimeLine/TimeLine';
import Footer from './Elementos/Componentes/Footer/Footer';
import './App.css'

function App() {

  return (
    <div className='App'>
      <Header/>
     <Presentation/>
     <Projects/>
     <h1 id='me'>Sobre Mim</h1> 
        
        <TimeLine year="2021"
                  text="Me Formo no ensino medio pelo colegio
                  Centro de Exelecia Atheneu Sergipense"
                  />
        <TimeLine year="2022"
                  text="Inicio a Vida academica na faculdade,
                        neste ano começei fazendo Educação fisica
                        porem logo no segundo periodo tranquei o curso
                        para seguir na area de tecnologia"
                  />
        <TimeLine year="2023"
                  text="Começei a fazer um curso na Escola de Tecnologias DNC
                        em FullStack. Não Satisfeito e a procura de 
                        mais conhecimento dou inicio a varios mini-cursos
                        de programação. "
                  />
        <TimeLine year="2024"
                  text="Atras de um estagio ou emprego na area de desenvolvedor
                        dou inicio no curso Ciencias da Computação 
                        na Faculdade Estacio de Sá."
                  />
      
      <Footer/>


    </div>
  )
}

export default App
