import './App.css';
import logo from './images/logo.png';
import promo1 from './images/promo1.avif';
import promo2 from './images/promo2.avif';
import promo3 from './images/promo3.webp';
import producto1 from './images/producto1.jpeg';
import producto2 from './images/producto2.webp';
import producto3 from './images/producto3.webp';
import mapa from './images/mapa.avif';
function App() {
  return (
    <div className="min-h-screen">
      <header>
        <img src={logo} alt="Logo" className="header-logo" />
        <nav>
          <ul>
            <li><a href="#home" className="hover:text-primary">Inicio</a></li>
            <li><a href="#promociones" className="hover:text-primary">Promociones</a></li>
            <li><a href="#productos" className="hover:text-primary">Productos</a></li>
            <li><a href="#sugerencias" className="hover:text-primary">Sugerencias</a></li>
            <li><a href="#ubicacion" className="hover:text-primary">Ubicación</a></li>
            <li><a href="#contactanos" className="hover:text-primary">Contáctanos</a></li>
          </ul>
        </nav>
      </header>
      <div id="home" className="main-heading">
        <h1>Bienvenido a nuestra tienda!</h1>
        <p>Descubra productos increíbles y grandes ofertas.</p>
      </div>
      <section id="promociones">
        <h2>Revisa Nuestras últimas promociones.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <PromotionCard title="Promotion 1" description="Increinles descuentos en nuestros mejores productos" image={promo1} />
          <PromotionCard title="Promotion 2" description="Compra uno y te llevas otro completamente gratis" image={promo2} />
          <PromotionCard title="Promotion 3" description="Envio gratis en pedidos superiores a 100 BS"  image={promo3}/>
        </div>
      </section>
      <section id="productos">
        <h2>Productos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProductCard title="Product 1" price="35.00Bs" image={producto1} />
          <ProductCard title="Product 2" price="50.00Bs" image={producto2}/>
          <ProductCard title="Product 3" price="20.00Bs" image={producto3}/>
        </div>
      </section>
      <section id="sugerencias">
        <h2>Sugerencias</h2>
        <form>
          <input type="email" placeholder="Email" className="input-field" />
          <input type="text" placeholder="Name" className="input-field" />
          <input type="tel" placeholder="Phone Number" className="input-field" />
          <textarea placeholder="Comments" className="input-field"></textarea>
          <button className="primary-btn">Enviar</button>
        </form>
      </section>
      <section id="ubicacion">
        <h2>Ubicación</h2>
        <img src={mapa} alt="Map" className="w-full h-96 object-cover rounded-lg" />
      </section>
      <section id="contactanos">
        <h2>Contáctanos</h2>
        <div className="space-y-4">
          <p>Si tiene alguna pregunta, no dude en comunicarse con nosotros en:</p>
          <p>Email: <a href="mailto:elmeriaricomachura99@gmail.com" className="text-primary hover:underline">elmeriaricomachura99@gmail.com</a></p>
          <p>Phone: <a href="tel:+59174253085" className="text-primary hover:underline">+591 74253085</a></p>
        </div>
      </section>
      <footer>
        <p>&copy; 2024 Tienda en Línea. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

const PromotionCard = ({ title, description , image}) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const ProductCard = ({ title, price, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
};

export default App;
