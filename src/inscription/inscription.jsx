import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";
import { Header } from "../header";
import 'bootstrap/dist/css/bootstrap.min.css';


export function Inscription() {
  return (
    <div className={s.App}>
      <Header/>
      <h3>INSCRIVEZ-VOUS:</h3>
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
            <label>NOM:</label>
            <input
              type="text"
              className="form-control"
              name="nom"
              id="nom"
              required
            />
          </div>
          <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
            <label>PRÉNOM:</label>
            <input
              type="text"
              className="form-control"
              name="prenom"
              id="prenom"
              required
            />
          </div>
          <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
            <label>SOCIÉTÉ:</label>
            <input
              type="text"
              className="form-control"
              name="societe"
              id="societe"
              required
            />
          </div>
          <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
            <label>EMAIL:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
            <label>ADRESSE:</label>
            <input
              type="text"
              className="form-control"
              name="adresse"
              id="adresse"
              required
            />
          </div>
          <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
            <label>TÉLÉPHONE:</label>
            <input
              type="tel"
              className="form-control"
              name="tel"
              id="tel"
              required
            />
          </div>
          <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
            <label>DATE DE NAISSANCE:</label>
            <input
              type="date"
              className="form-control"
              name="datenaissance"
              id="datenaissance"
              required
            />
          </div>
          <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
            <label>MOT DE PASSE:</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              required
            />
          </div>
          <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
            <label>CNI:</label>
            <input
              type="text"
              className="form-control"
              name="cni"
              id="cni"
              required
            />
          </div>
          <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
            <label>PHOTO:</label>
            <input
              type="file"
              className="form-control"
              name="photo"
              id="photo"
              accept="image/*"
              required
            />
          </div>
        </div>
        <button type="submit" className={`btn btn-primary ${s.btn}`}>
          INSCRIPTION
        </button><br/>
        <Link to="/connexion">Vous avez déjà un compte? Connectez-vous</Link>
      </form>
    </div>
  );
}

function handleSubmit(event) {
  event.preventDefault();
  // Handle form submission here
}
