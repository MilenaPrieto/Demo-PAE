import { useNavigate } from 'react-router-dom';
import '../Css/Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="header">
        <h1>Bienvenido al Programa de Alimentación Escolar - PAE</h1>
      </div>
      <div className="modules">
        <div className="module" onClick={() => navigate('/Supplier')}>
          <h2>Proveedor</h2>
        </div>
        <div className="module" onClick={() => navigate('/Evaluation')}>
          <h2>Evaluación</h2>
        </div>
        <div className="module" onClick={() => navigate('/History')}>
          <h2>Historial</h2>
        </div>
        <div className="module" onClick={() => navigate('/Return')}>
          <h2>Devoluciones</h2>
        </div>
        <div className="module" onClick={() => navigate('/Services')}>
          <h2>Servicios Públicos</h2>
        </div>
        <div className="module" onClick={() => navigate('/Fse')}>
          <h2>FSE</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;