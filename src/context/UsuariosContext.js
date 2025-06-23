'use client';
import { createContext, useEffect, useState } from "react";

export const UsuariosContext = createContext();

export function UsuariosProvider({ children }) {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioActual, setUsuarioActual] = useState(null);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    fetch("/data/usuarios.json")
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch(console.error);
  }, []);

  // Cargar favoritos del localStorage al cambiar de usuario
  useEffect(() => {
    if (usuarioActual) {
      // Usar email como identificador único
      const favoritosGuardados = localStorage.getItem(`favoritos_${usuarioActual.email}`);
      if (favoritosGuardados) {
        setFavoritos(JSON.parse(favoritosGuardados));
      } else {
        setFavoritos([]);
      }
    } else {
      // Si no hay usuario, limpiar favoritos
      setFavoritos([]);
    }
  }, [usuarioActual]);

  // Guardar favoritos en localStorage
  const guardarFavoritos = (nuevosFavoritos) => {
    if (usuarioActual) {
      localStorage.setItem(`favoritos_${usuarioActual.email}`, JSON.stringify(nuevosFavoritos));
      setFavoritos(nuevosFavoritos);
    }
  };

  // Agregar auto a favoritos
  const agregarFavorito = (auto) => {
    if (!usuarioActual) return false;
    
    const autoExiste = favoritos.find(f => f.id === auto.id);
    if (autoExiste) return false;
    
    const nuevosFavoritos = [...favoritos, auto];
    guardarFavoritos(nuevosFavoritos);
    return true;
  };

  // Quitar auto de favoritos
  const quitarFavorito = (autoId) => {
    if (!usuarioActual) return false;
    
    const nuevosFavoritos = favoritos.filter(f => f.id !== autoId);
    guardarFavoritos(nuevosFavoritos);
    return true;
  };

  // Verificar si un auto está en favoritos
  const esFavorito = (autoId) => {
    return favoritos.some(f => f.id === autoId);
  };

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
    if (user) {
      setUsuarioActual(user);
      // Limpiar favoritos al hacer login (se cargarán los del usuario)
      setFavoritos([]);
    }
    return user;
  };

  // Logout usuario
  const logout = () => {
    // Limpiar favoritos antes de hacer logout
    setFavoritos([]);
    setUsuarioActual(null);
  };

  return (
    <UsuariosContext.Provider value={{ 
      usuarios, 
      registrar, 
      login, 
      logout, 
      usuarioActual,
      favoritos,
      agregarFavorito,
      quitarFavorito,
      esFavorito
    }}>
      {children}
    </UsuariosContext.Provider>
  );
}