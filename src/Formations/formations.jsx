import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";
import { Header } from "../header";

const courses = [
  {
    title: "Data Science",
    description: "Apprenez les techniques avancées de la science des données, incluant le traitement des données massives, l'analyse prédictive et le machine learning.",
    image: "path/to/data-science-image.jpg",
    link: "https://www.e-university.site/course/data-science"
  },
  {
    title: "Intelligence Artificielle",
    description: "Explorez les concepts fondamentaux et avancés de l'intelligence artificielle, y compris les réseaux neuronaux, le deep learning et les algorithmes génétiques.",
    image: "path/to/ia-image.jpg",
    link: "https://www.e-university.site/home/courses?category=certified-ai-developer"
  },
  {
    title: "Blockchain Technology",
    description: "Découvrez les bases et les applications avancées de la technologie blockchain, ainsi que son impact sur les différents secteurs industriels.",
    image: "path/to/blockchain-image.jpg",
    link: "https://www.e-university.site/course/blockchain-technology"
  },
  {
    title: "Cybersecurity",
    description: "Maîtrisez les aspects critiques de la cybersécurité, y compris la gestion des risques, la protection des données, et les stratégies de défense contre les cyberattaques.",
    image: "path/to/cybersecurity-image.jpg",
    link: "https://www.e-university.site/course/cybersecurity"
  },
  {
    title: "Audit Informatique",
    description: "Formez-vous aux méthodes et pratiques d'audit informatique pour assurer la conformité et la sécurité des systèmes d'information.",
    image: "path/to/audit-informatique-image.jpg",
    link: "https://www.e-university.site/course/audit-informatique"
  },
  {
    title: "Génie de Logiciel",
    description: "Apprenez les meilleures pratiques de génie logiciel pour concevoir, développer et maintenir des logiciels de haute qualité.",
    image: "path/to/genie-logiciel-image.jpg",
    link: "https://www.e-university.site/course/genie-de-logiciel"
  },
  {
    title: "Réseaux Informatique",
    description: "Acquérez des compétences en conception, configuration et gestion des réseaux informatiques pour assurer une connectivité optimale.",
    image: "path/to/reseaux-informatique-image.jpg",
    link: "https://www.e-university.site/course/reseaux-informatique"
  }
];

export function Formations() {
  return (
    <div className={`p-4 min-h-screen bg-gray-100 ${s.App}`}>
      <Header />
      <h1 className="text-center text-3xl font-bold mb-8">Formations Professionnelles</h1>
      <div className="container mx-auto">
        {courses.map((course, index) => (
         <Link to="https://datascientest.com/big-data-tout-savoir#"> <div key={index} className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
            <p className="mb-4">{course.description}</p>
            <img src={course.image} alt={course.title} className="mb-4 w-full h-64 object-cover rounded-md" />
            <a href={course.link} target="_blank" rel="noopener noreferrer" className="inline-block py-2 px-4 bg-blue-600 text-white rounded-md">
              Inscription
            </a>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
