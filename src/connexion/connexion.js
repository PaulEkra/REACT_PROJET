import s from "./style.module.css";
import { Link } from "react-router-dom";
import { Header } from "../header";


export function Connexion() {
  return (
    <div className={s.App}>
      <Header/>
      <form>
            <h2 class="text-center mb-4">Connectez-vous</h2>

            <div className="row justify-content-center">
              <div className="col-12 col-md-6 mb-2">
                <label for="username">USERNAME</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  id="username"
                  required
                />
              </div>
              <div className="col-12 col-md-6 mb-2">
                <label for="password">MOT DE PASSE</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary mb-2 mx-auto">Connexion</button>
      </form>
     <Link to='/inscription'> Vous n'avez pas de compte? Inscrivez-vous</Link>
    </div>
  );
}
