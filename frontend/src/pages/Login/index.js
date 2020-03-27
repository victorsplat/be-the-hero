import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import logoImage from "../../assets/logo.svg";
import heroesImage from "../../assets/heroes.png";
import "./styles.css";

import api from "../../services/api";

export default function Login() {

  const history = useHistory();
  const [id, setId] = useState('')
  async function handleLogin(e) {
    e.preventDefault()

    try {
      const response = await api.post('sessions', { id })
      const ongName = response.data.name
      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName', ongName)
      history.push('/profile')

    } catch (error) {
      alert('Falha no login, tente novamente.')
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImage} alt="Be the Hero" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu Login!</h1>
          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" /> Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImage} alt="Heroes" />
    </div>
  );
}
