import React from "react";

const Jumbotron = () => {
  return (
    <>
      <div className="p-3"></div>
      <div className="jumbotron px-5 pb-5 rounded mt-5">
        <h1 className="display-4">Recibe una cálida bienvenida!</h1>
        <p className="lead">
          Esta landing page demuestra las frustraciones representadas en
          imágenes de un programador junior que está en sus primeros días de
          aprendizaje, espero comprendas y sientas el sufrimiento que vivimos en
          el día a día de la programación web.
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Mira abajo...
        </a>
      </div>
    </>
  );
};

export default Jumbotron;
