'use client';
import { createContext, useEffect, useState } from "react";

export const AutosContext = createContext();

export function AutosProvider({ children }) {
  const [autos, setAutos] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/MichaelRiosOk/tp-next-g3-concesionaria/develop-mike/public/data/autos_argentina.json")
      .then((res) => res.json())
      .then((data) => setAutos(data))
      .catch(console.error);
  }, []);

  const actualizarAuto = (id, cambios) => {
    setAutos((prev) =>
      prev.map((auto) => (auto.id == id ? { ...auto, ...cambios } : auto))
    );
  };

  return (
    <AutosContext.Provider value={{ autos, actualizarAuto }}>
      {children}
    </AutosContext.Provider>
  );
}
