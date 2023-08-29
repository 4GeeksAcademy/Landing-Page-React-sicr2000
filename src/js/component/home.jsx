import React from "react";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Jumbotron />
        <div className="d-flex">
          <Card
            title="Estrés"
            content="El estrés es como Rexona, nunca te abandona, siempre está a tu lado en cada typeo de programación."
            button="Leer más..."
            src="https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/estres3_0.jpg.webp?itok=eGKYzesk"
          />
          <Card
            title="Desesperación"
            content="La desesperación comienza cuando no encuentras la solución al error de compilación que te lanza el webpack, node u otra compilador que no se suele comprender su funcionamiento mismo."
            button="Leer más..."
            src="https://hdeleon.net/wp-content/uploads/2020/11/shutterstock_400718536-e1494629616829.jpg"
          />
          <Card
            title="Saber que no sabes nada"
            content="Esta en la etapa en la que quedas en hueco, es decir, estás en el vacío, no sabes quien eres ni qué tienes que hacer en este plano terrenal."
            button="Leer más..."
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=519x10000:format=jpg/path/s8ba5aa992714d9f5/image/ie293ad15deee14e4/version/1547299340/s%C3%B3crates-plat%C3%B3n-filosof%C3%ADa-atenas-pericles-historia-%C3%A9tica-jenofonte.jpg"
          />
          <Card
            title="Quedarse en blanco"
            content="En este punto eres lo que se conoce como zombie, o mejor dicho, una papa, literalmente no funcionas y eso pasa cuando pasas a ver fetch y otras funcionabilidades de JavaScript."
            button="Leer más..."
            src="https://imagenes.extra.ec/files/image_full/files/fp/uploads/2020/11/10/5faaf36610561.r_d.532-262.jpeg"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
