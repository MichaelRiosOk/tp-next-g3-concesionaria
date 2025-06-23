'use client';
import { createContext, useEffect, useState } from "react";

export const UsuariosContext = createContext();

export function UsuariosProvider({ children }) {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioActual, setUsuarioActual] = useState(null); // Nuevo estado

  useEffect(() => {
    fetch("/data/usuarios.json")
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch(console.error);
  }, []);

  // Registrar usuario (solo en memoria)
  const registrar = (nuevoUsuario) => {
    if (usuarios.some(u => u.email === nuevoUsuario.email)) {
      return { exito: false, mensaje: "El email ya está registrado" };
    }
    setUsuarios(prev => [...prev, nuevoUsuario]);
    return { exito: true };
  };

  // Login usuario
  const login = (email, password) => {
    const user = usuarios.find(u => u.email === email && u.password === password);
    if (user) setUsuarioActual(user); // Guarda el usuario logueado
    return user;
  };

  // Logout usuario
  const logout = () => {
    setUsuarioActual(null); // Cierra sesión
  };

  return (
    <UsuariosContext.Provider value={{ usuarios, registrar, login, logout, usuarioActual }}>
      {children}
    </UsuariosContext.Provider>
  );
}