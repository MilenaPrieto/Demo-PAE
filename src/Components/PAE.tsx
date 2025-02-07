import { useNavigate } from 'react-router-dom';
import '../Css/Services.css';

const Pae = () => {
    const navigate = useNavigate();

  return (
    <div className="container">
      <div className="header">
        <h1>Programa de Alimentación Escolar</h1>
        <button className="back-button" onClick={() => navigate('/')}>
          Volver
        </button>
      </div>
      <div className="modules">
        <div className="module1" >
          <h2>Proveedores</h2>
        </div>
        <div className="module1" >
          <h2>Minuta de Porciones</h2>
        </div>
        <div className="module1" >
          <h2>Evaluación</h2>
        </div>
      </div>
    </div>
  );
};

export default Pae;