import React from 'react';
import Navbar from './Navbar';



function Home() {
  return (
  
    <div className="container">
      
      <main>
        <h1>Bienvenido/a a nuestra web de películas!</h1>
        <p>Aquí encontrarás una amplia variedad de películas de todos los géneros y épocas para que puedas disfrutar desde la comodidad de tu hogar. Navega por nuestra selección y encuentra las películas que más te gusten.</p>
        <p>Además, en nuestra web podrás:</p>
        <ul>
          
          <li>Crear listas de tus películas favoritas para tenerlas siempre a mano.</li>
          <li>Acceder a contenido exclusivo y a estrenos en línea.</li>
          <li>Juan Esteban Arcila- Juan Felipe Lopez- Juan Felipe Salamanca</li>
        </ul>
        <p>Gracias por visitar nuestra web y esperamos que disfrutes de tu experiencia cinematográfica con nosotros. ¡Disfruta de la magia del cine!</p>
      </main>
      <footer>
        <p>Derechos de autor © {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;

