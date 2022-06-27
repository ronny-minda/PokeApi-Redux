
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { guardarinfo } from './store/slice/pokeData';
import axios from 'axios';
import { motion } from 'framer-motion';

import Section from './styles/App';



function App() {

  const [ rota, setRota ] = useState(0);
  const [ idPoke, setIdPoke ] = useState(1);
  const [ listo, setListo ] = useState(false);

  const {value} = useSelector( state => state.pokeData )
  

  const dispatch = useDispatch();




  const buscarPokemon = (id = 1) => {

    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then( (respuesta) => {
        setListo(true)
        console.log(respuesta.data.sprites.front_default)
        dispatch(guardarinfo(respuesta.data))
        
      })

    setRota(rota + 50);

  }
  
  useEffect(() => {
    setIdPoke(idPoke + 1)
    buscarPokemon(1)
  }, [])

  const Luz = [
    ['#09FF0022', '#09FF00','#09FF0022', '#09FF00','#09FF0022', '#09FF00','#09FF0022', '#09FF00','#09FF0022', '#09FF00','#09FF0022', '#09FF00'],
    ['0px 0px 61px 20px #09FF0022','0px 0px 61px 20px #09FF00','0px 0px 61px 20px #09FF0022','0px 0px 61px 20px #09FF00','0px 0px 61px 20px #09FF0022','0px 0px 61px 20px #09FF00','0px 0px 61px 20px #09FF0022','0px 0px 61px 20px #09FF00','0px 0px 61px 20px #09FF0022','0px 0px 61px 20px #09FF00','0px 0px 61px 20px #09FF0022','0px 0px 61px 20px #09FF00',]
  ]


  return (
    <>
      <Section rota>
        
        <div className='contenedor'>

          <motion.div
            animate={{ background: Luz[0], boxShadow: Luz[1] }}
            transition={{ ease: "easeOut", duration: 1}}
            className='luz'
          ></motion.div>
          
          <section className="pantalla">
            <div className='contePantalla'>
              <motion.div 
                animate={{ opacity: ['0','1']}}
                transition={{ duration: 0.2, delay: 1  }}
                className='contenido'
              >

                {
                  listo && 
                  <>
                    <img src={value.sprites.other.dream_world.front_default} alt="img" />
                    <div className='onteInfo'></div>
                    <div className='infoFinal'>
                      <p>{value.name}</p>
                    </div>
                    <div className='fil'></div>
                    <div className='filtroPantalla'>
                      <div className='filtro1'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
          
                      </div>
                      <div className='filtro2'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
          
                      </div>
                    </div>
                    
                  </>
                }

              </motion.div>
            </div>
          </section>


          
          <section className="poke">

            <div className='pokeBall' style={{transform: `rotate(${rota}deg)`}}>

              <div className='arriba'></div>  
              <div className='abajo'></div>
              <div className='bola'>
                <div 
                  onClick={ () => {
                    setIdPoke(idPoke + 1)
                    buscarPokemon( idPoke )
                  }}
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
