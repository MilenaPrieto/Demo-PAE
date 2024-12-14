import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/Evaluation.css';
import proveedoresData from './Suppler.json';

const Evaluation = () => {
  const navigate = useNavigate();
  const [proveedores, setProveedores] = useState<string[]>([]);
  const [selectedProveedor, setSelectedProveedor] = useState<string>('');

  useEffect(() => {
    const fetchProveedores = async () => {
      // Simula la obtención de proveedores desde una API
      setProveedores(proveedoresData);
    };
    fetchProveedores();
  }, []);

  const handleProveedorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProveedor(e.target.value);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Evaluación</h1>
        <button className="back-button" onClick={() => navigate('/Supplier')}>
          Volver
        </button>
      </div>
      <div className="form-container">
        <form>
          <div className="form-group">
            <label htmlFor="id_evaluacion">ID Evaluación</label>
            <input type="text" id="id_evaluacion" name="id_evaluacion" placeholder="ID Evaluación" />
          </div>
          <div className="form-group">
            <label htmlFor="id_proveedor">Proveedor</label>
            <select id="id_proveedor" name="id_proveedor" value={selectedProveedor} onChange={handleProveedorChange}>
              <option value="">Seleccione un proveedor</option>
              {proveedores.map((proveedor, index) => (
                <option key={index} value={proveedor}>
                  {proveedor}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="fecha_evaluacion">Fecha Evaluación</label>
            <input type="text" id="fecha_evaluacion" name="fecha_evaluacion" placeholder="Fecha Evaluación" />
          </div>
          <div className="form-group">
            <label htmlFor="criterios_evaluados">Criterios Evaluados</label>
            <input type="text" id="criterios_evaluados" name="criterios_evaluados" placeholder="Criterios Evaluados" />
          </div>
          <div className="form-group">
            <label htmlFor="resultado">Resultado</label>
            <input type="text" id="resultado" name="resultado" placeholder="Resultado" />
          </div>
          <div className="form-group">
            <label htmlFor="observaciones">Observaciones</label>
            <textarea id="observaciones" name="observaciones" placeholder="Observaciones"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="acciones_correctivas">Acciones Correctivas</label>
            <textarea id="acciones_correctivas" name="acciones_correctivas" placeholder="Acciones Correctivas"></textarea>
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


export default Evaluation;