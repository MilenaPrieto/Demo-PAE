
import { useNavigate } from 'react-router-dom';
import '../Css/Supplier.css';

const Supplier = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="header">
        <h1>Proveedor</h1>
        <button className="back-button" onClick={() => navigate('/')}>
          Volver
        </button>
      </div>
      <div className="form-container">
        <form>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" placeholder="Nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="nit">NIT</label>
            <input type="text" id="nit" name="nit" placeholder="NIT" />
          </div>
          <div className="form-group">
            <label htmlFor="contacto">Contacto</label>
            <input type="text" id="contacto" name="contacto" placeholder="Contacto" />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input type="text" id="telefono" name="telefono" placeholder="Teléfono" />
          </div>
          <div className="actions">
            <button type="submit" className="submit-button">
              Agregar
            </button>
            <button type="button" className="list-button">
              Listar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Supplier;