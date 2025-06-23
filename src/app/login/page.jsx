'use client';
import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';
import { UsuariosContext } from '../../context/UsuariosContext';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useContext(UsuariosContext);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = login(formData.email, formData.password);
    if (user) {
      router.push('/');
    } else {
      setError('Email o contraseña incorrectos');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" className={styles.submitButton}>
            Ingresar
          </button>
        </form>
        <p className={styles.registerLink}>
          ¿No tienes cuenta? <Link href="/register">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
}