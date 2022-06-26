
import { useState } from 'react'
import Section from './styles/App';


function App() {


  const [ rota, setRota ] = useState(0);

  return (
    <>
      <Section rota>
        
        <div className='contenedor'>
          
          <section className="pantalla">
            <div className='contePantalla'>
              <div className='contenido'>

              </div>
            </div>
          </section>


          
          <section className="poke">

            <div className='pokeBall' style={{transform: `rotate(${rota}deg)`}}>

              <div className='arriba'></div>  
              <div className='abajo'></div>
              <div className='bola'>
                <div 
                  onClick={ () => setRota(rota + 50) }
                  style={{transform: `rotate(-${rota}deg)`}}
                ></div>
              </div>
            
            </div>

          </section>

        </div>

      </Section>
    </>
  );
}

export default App;
