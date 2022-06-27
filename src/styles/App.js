

import styled from 'styled-components';

const Section = styled.section`
  /* background-color: red; */
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0.9);

  @media (max-width: 650px) {
    transform: scale(0.7);
  }
  @media (max-width: 450px) {
    transform: scale(0.6);
  }


  .contenedor {
    height: 900px;
    width: 500px;
    background-color: #726e6d;
    border-radius: 7px;
    border-radius: 10px;
    position: absolute;
    
    
    .luz {
      height: 40px;
      width: 20px;
      background-color: #09FF00;
      box-shadow: 0px 0px 61px 20px #09FF00;
      position: absolute;
      right: 0;
      top: 70px;
    }

    .pantalla {
      height: 45%;
      width: 100%;
      /* background-color: blue; */
      display: flex;
      justify-content: center;
      

      .contePantalla {
        border-radius: 0 0 7px 7px;
        border: 40px solid #1d1d1e;
        height: 93%;
        width: 80%;
        box-shadow:  5px 5px 10px #2e2c2c, -5px 0px 10px #b6b0ae;
        /* background-color: black; */

        .contenido {
          height: 100%;
          width: 100%;
          background-color: #fff;
          position: relative;
          z-index: 50;

          opacity: 0;
          
          img {
            height: 80%;
            width: 80%;
            position: absolute;
            top: 0;
            right: 0;
          }
          .onteInfo {
            width: 0;
            height: 0;
            border: 150px solid transparent;
            border-left: 100px solid red;
            border-bottom: 100px solid red;
            position: absolute;
            bottom: 0;
          }
          .infoFinal {
            position: absolute;
            bottom: 0;
            left: 0;
            p {
              color: #fff;
              font-size: 40px;
            }
          }
          @keyframes pulse {
            0% {
              background-color: #24842777;
            }
            50% {
              background-color: #28912477;
            }
            100% {
              background-color: #24842777;
            }
          }
          .fil {
            backdrop-filter: blur(1.1px);
            background-color: #24842777;
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            z-index: 90;
            animation: pulse 0.1s infinite;
          }
          .filtroPantalla {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            z-index: 70;

            .filtro1 {
              height: 100%;
              width: 100%;
              /* background-color: #0009; */
              position: absolute;
              top: 0;
              left: 0;
              z-index: 60;
              
              display: flex;
              
              & > * {
                border: 0.1px solid #000;
                height: 100%;
                width: 5px;
                /* background-color: red; */
              }
            }
            .filtro2 {
              height: 100%;
              width: 100%;
              /* background-color: #0009; */
              position: absolute;
              top: 0;
              left: 0;
              z-index: 60;
              
              display: flex;
              flex-direction: column;
              
              & > * {
                border: 0.1px solid #000;
                height: 5%;
                width: 100%;
                /* background-color: red; */
              }
            }
          }
          
        }
      }
    }
    .poke {
      height: 55%;
      width: 100%;
      /* background-color: #1d1d1e; */

      .pokeBall {
        transition: 0.4s;
        height: 500px;
        width: 500px;
        background-color: #1d1d1e;
        border-radius: 50%;
        border: 15px solid #0000;
        position: relative;

        .arriba {
          height: 100%;
          width: 100%;
          border-radius: 50%;
          background-color: #cf3d26;
          clip-path: inset(0 0 55% 0);
          position: absolute;
        }
        .bola {
          height: 30%;
          width: 30%;
          border-radius: 50%;
          background-color: #1d1d1e;
          position: absolute;
          top: calc(50% - 15%);
          left: calc(50% - 15%);
          display: flex;
          justify-content: center;
          align-items: center;

          div {
            transition: 0.4s;
            height: 65%;
            width: 65%;
            border-radius: 50%;
            background-color: #fff;
            box-shadow:  6px 6px 5px #000000,-6px -6px 5px #3c3c3c;
          }
          div:active {
            box-shadow: inset 6px 6px 5px #929292,
            inset -6px -6px 5px #ffffff;
          }
        }
        .abajo {
          height: 100%;
          width: 100%;
          border-radius: 50%;
          background-color: #cf3d26;
          clip-path: inset(55% 0 0 0);
          position: absolute;
        }
      }
    }
  }
`;


export default Section;