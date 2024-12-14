
import { useNavigate } from 'react-router-dom';
import '../Css/Supplier.css';

const Supplier = () => {
    const navigate = useNavigate();

  return (
    <div className="container">
      <div className="header">
        <h1>Proveedores</h1>
        <button className="back-button" onClick={() => navigate('/')}>
          Volver
        </button>
      </div>
      <div className="modules">
        <div className="module" onClick={() => navigate('/SupplierForm')}>
          <h2>Agregar Proveedor</h2>
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
        
        
      </div>
    </div>
  );
};

export default Supplier;