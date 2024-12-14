
import { useNavigate } from 'react-router-dom';
import '../Css/Services.css';

const Services = () => {
    const navigate = useNavigate();

  return (
    <div className="container">
      <div className="header">
        <h1>Servicios Públicos</h1>
        <button className="back-button" onClick={() => navigate('/')}>
          Volver
        </button>
      </div>
      <div className="modules">
        <div className="module1" >
          <h2>Electricidad</h2>
        </div>
        <div className="module1" >
          <h2>Agua</h2>
        </div>
        <div className="module1" >
          <h2>Suscripción TV</h2>
        </div>
        <div className="module1" >
          <h2>Gas Natural</h2>
        </div>
      </div>
    </div>
  );
};

export default Services;