import React, { useState } from "react";
import logo from "../assets/logo.svg";

const Hero = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    edad: "",
    email: "",
    telefono: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Datos enviados:", formData);
    // Puedes agregar aquí la lógica para enviar los datos a un servidor si es necesario
  };

  return (
    <div className="text-center hero my-5">
      <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
      <h1 className="mb-4">Registrar un consultorio</h1>

      
      <form onSubmit={handleSubmit}>
        <label>
          Piso:
          <input
            type="text"
            name="piso"
            value={formData.piso}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Numero:
          <input
            type="number"
            name="numero"
            value={formData.numero}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Especialidad:
          <input
            type="text"
            name="especialidad"
            value={formData.especialidad}
            onChange={handleChange}
          />
        </label>
        <br />
        
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Hero;
