import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import logoImage from "../../assets/logo.svg";
import "./styles.css";

import api from "../../services/api";

export default function Profile() {
  const history = useHistory()

  const ongName = localStorage.getItem('ongName')
  const ongId = localStorage.getItem('ongId')

  const [incidents, setIncidents] = useState([])

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId
      }
    }).then((res) => {
      setIncidents(res.data)
    })
  }, [ongId])

  async function handleDeleteIncident(id) { 
    try {
      await api.delete(`incidents/${id}`,{
        headers: {
          Authorization: ongId
        }
      })
      setIncidents(incidents.filter( incident => incident.id !== id))
      
    } catch (error) {
      alert('Erro ao deletar caso, tente novamente.')
      
    }
  }
  function handleLogout(){
    localStorage.clear()
    history.push('/')
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImage} alt="Be the Hero" />
        <span>Bem vindo(a), {ongName}</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>

        <button onClick={handleLogout}>
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>caso:</strong>
            <p>{incident.title}</p>
            <strong>Descrição:</strong>
            <p>{incident.description}</p>
            <strong>valor:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>
            <button onClick={()=> handleDeleteIncident(incident.id)} type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
