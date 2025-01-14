import { useNavigate } from 'react-router-dom';
import '../Css/Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="header">
        <h1>Sistema de Gestión de Servicio Administrativo - SiGa</h1>
      </div>
      <div className="modules">
        <div className="module" onClick={() => navigate('/Supplier')}>
          <h2>Proveedor</h2>
        </div>
        <div className="module" onClick={() => navigate('/Fse')}>
          <h2>P.A.E.</h2>
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