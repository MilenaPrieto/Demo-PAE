import { useNavigate } from 'react-router-dom'
import '../Css/Return.css';
import proveedoresData from './Suppler.json';
import { useEffect, useState } from 'react';

const Return: React.FC = () => {
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
        <h1>Devoluciones</h1>
        <button className="back-button" onClick={() => navigate('/Supplier')}>
          Volver
        </button>
      </div>
      <div className="form-container">
        <form>
          <div className="form-group">
            <label htmlFor="id_evaluacion">ID Devolución</label>
            <input type="text" id="id_evaluacion" name="id_evaluacion" placeholder="ID Devolución" />
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
            <label htmlFor="fecha_evaluacion">Fecha Devolución</label>
            <input type="text" id="fecha_evaluacion" name="fecha_evaluacion" placeholder="Fecha Devolución" />
          </div>
          <div className="form-group">
            <label htmlFor="criterios_evaluados">Motivo</label>
            <input type="text" id="criterios_evaluados" name="criterios_evaluados" placeholder="Motivo" />
          </div>
          <div className="form-group">
            <label htmlFor="resultado">Cantidad Devuelta</label>
            <input type="text" id="resultado" name="resultado" placeholder="Cantidad Devuelta" />
          </div>
          <div className="form-group">
            <label htmlFor="acciones_correctivas">Resolución</label>
            <textarea id="acciones_correctivas" name="acciones_correctivas" placeholder="Resolución"></textarea>
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

export default Return