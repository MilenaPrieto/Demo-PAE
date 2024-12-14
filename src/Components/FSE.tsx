import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Css/Return.css';

const Fse: React.FC = () => {
  const navigate = useNavigate();
 

  return (
    <div className="container">
      <div className="header">
        <h1>Proyecto de Inversión</h1>
        <button className="back-button" onClick={() => navigate('/')}>
          Volver
        </button>
      </div>
      <div className="form-container">
        <form>
          <div className="form-group">
            <label htmlFor="id_evaluacion">Fecha de inicio</label>
            <input type="text" id="id_evaluacion" name="id_evaluacion" placeholder="Fecha de inicio" />
          </div>
          <div className="form-group">
            <label htmlFor="fecha_evaluacion">Fecha de final</label>
            <input type="text" id="fecha_evaluacion" name="fecha_evaluacion" placeholder="Fecha de final" />
          </div>
          <div className="form-group">
            <label htmlFor="criterios_evaluados">Monto en pesos</label>
            <input type="text" id="criterios_evaluados" name="criterios_evaluados" placeholder="Monto en pesos" />
          </div>
          <div className="form-group">
            <label htmlFor="resultado">Descripción</label>
            <input type="text" id="resultado" name="resultado" placeholder="Descripción" />
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

export default Fse