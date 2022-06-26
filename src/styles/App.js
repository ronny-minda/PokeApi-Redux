

import styled from 'styled-components';

const Section = styled.section`
  background-color: red;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .contenedor {
    height: 95%;
    width: 500px;
    background-color: #726e6d;
    border-radius: 7px;
    border-radius: 10px;

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
        /* background-color: black; */

        .contenido {
          height: 100%;
          width: 100%;
          background-color: aqua;
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