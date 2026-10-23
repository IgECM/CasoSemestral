import React from 'react';
import Titulo from '../atoms/Titulo';
import Parrafo from '../atoms/Parrafo';

function TarjetaNosotros({ cantidad, cargo }) {
  return (
    <div className="p-4 bg-white rounded-3 shadow-sm h-100 border-top border-info border-4 text-center">
      <Titulo nivel={3} texto={cantidad} className="display-4 fw-bold text-info mb-0" />
      <Parrafo texto={cargo} className="fw-medium mt-2 fs-5" />
    </div>
  );
}

export default TarjetaNosotros;