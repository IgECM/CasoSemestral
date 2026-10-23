import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../organism/Navbar';
import Footer from '../organism/Footer';

function PlantillaPublica(props) {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column min-vh-100">
      
      <Navbar onNavegar={navigate} />
      
      <main className="flex-grow-1">
        {props.children}
      </main>
      
      <Footer  />
      
    </div>
  );
}

export default PlantillaPublica;