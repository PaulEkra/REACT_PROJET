import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Connexion } from './connexion/connexion';
import { Inscription } from './inscription/inscription';
import { Accueil } from './Accueil/accueil';
import { Propos } from './A propos/a_propos';
import { Formations } from './Formations/formations';
import { CourseDetail } from './CoursDetails/Cours';
import { Tutoriat } from './Tutoriat/tutoriat';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
      
        <Route path="/" element={<div><Accueil/></div>} />
        <Route path="/connexion" element={<div><Connexion/></div>} />
        
        <Route path='/inscription' element={<div><Inscription/></div>}/>
        <Route path="/about" element={<div><Propos/></div>} />
        <Route path="/formations" element={<div><Formations/></div>} />
        <Route path="/course/:courseId" element={<div><CourseDetail/></div>} />
        <Route path="/tutoriat" element={<div><Tutoriat/></div>} />

      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
