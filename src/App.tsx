import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Supplier from './Components/Supplier'
import Evaluation from './Components/Evaluation'
import History from './Components/History'
import Return from './Components/Return'
import Services from './Components/Services'
import Fse from './Components/FSE'
import SupplierForm from './Components/SupplierForm'
import Pae from './Components/PAE'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/supplier" element={<Supplier />} />
        <Route path="/supplierform" element={<SupplierForm />} />
        <Route path="/evaluation" element={<Evaluation />} />
        <Route path="/history" element={<History />} />
        <Route path="/return" element={<Return />} />
        <Route path="/services" element={<Services />} />
        <Route path="/fse" element={<Fse />} />
        <Route path="/pae" element={<Pae />} />
      </Routes>
    </Router>
  )
}

export default App