//Criação de componentes para reutilizar

//const Tittle = (props) => {
// <h1>{ props.children }</h1>}

export function App() {

  return (
    <div className="bg-blue h-screen ">
      <header className="">
          <nav className="">
            <ul className="flex justify-evenly">

              <li>
                <a href="/">
                  <span className="font-bold text-white">Home</span>
                </a>
              </li>

              <li>
                <a href="http://">
                  <span className="font-bold text-white">Sobre</span>
                </a>
              </li>

              <li>
                <a href="http://">
                  <span className="font-bold text-white">Publicações</span>
                </a>
                
              </li>

              <li>
                <a href="http://">
                  <span className="font-bold text-white">Contato</span>
                </a>
              
              </li>

            </ul>
          </nav>
      </header>
      
      <section className="flex items-center absolute right-80 mt-10 mr-10 ">
        <h1 className="font-bold text-white relative right-36">Olá, meu nome é Caique Souza Fonseca</h1>
        <img src="/src/assets/image/caique.jpg" alt="foto-pessoal" className=" rounded-full h-64 w-64 "/>
      </section>

      <section>

      </section>
      
    </div>
  )
}
