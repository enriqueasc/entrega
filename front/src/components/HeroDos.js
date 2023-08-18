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
      <h1 className="mb-4">Registrate como paciente</h1>

      
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Edad:
          <input
            type="number"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Teléfono:
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Hero;
