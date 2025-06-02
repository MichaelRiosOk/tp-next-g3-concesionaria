'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './login.module.css';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
          <button type="submit" className={styles.submitButton}>
            Ingresar
          </button>
        </form>
        <p className={styles.registerLink}>
          ¿No tienes cuenta? {' '}
          <Link href="/register">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
}