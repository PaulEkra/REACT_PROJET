// CourseDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import s from "./style.module.css";
import { Header } from "../header";

const courses = [
  {
    id: "data-science",
    title: "Data Science",
    description:`Description Complète 
    La science des données est un domaine passionnant qui combine la statistique, l\'analyse mathématique, l\'informatique et la visualisation afin d\'extraire des connaissances significatives et impacter des coins divers de l\'industrie et recherche. Ce cours approfondi sur la science des données est conçu pour fournir aux étudiants une compréhension solide des principes fondamentaux ainsi qu\'une exposition aux techniques avancées utilisées dans le traitement des données.\
    Objectifs du cours :
    Fondamentaux Statistiques et Mathématiques : Construire une base solide en statistiques et en mathématiques qui supporte les techniques d'analyse de données.\
    Analyse de Données en Profondeur : Apprendre à manipuler, nettoyer et analyser les données à travers des outils et langages modernes comme Python, R, SQL et Tableau.\
    Machine Learning et Apprentissage Automatique : Comprendre et appliquer des algorithmes de machine learning, y compris l'apprentissage supervisé et non supervisé.\
    Big Data Technologies : Gagner de l'expérience avec les architectures de big data comme Apache Hadoop et Spark pour gérer des volumes massifs de données.\
    Visualisation de Données : Maîtriser les techniques avancées de visualisation pour représenter efficacement les données.\
    Plan de Cours :\
    Introduction et Histoire de la Data Science\
    Statistiques pour la Data Science\
    Programmation Python/R pour Data Science\
    Extraction de Données et Nettoyage\
    Introduction au Machine Learning\
    Deep Learning et Neurones Artificiels\
    Technologies de Big Data\
    Visualisation Interactive de Données\
    Gestion et Sécurité des Données\
    Applications de Data Science dans Divers Secteurs\
    Compétences Développées :\
    Analytique Avancée : Compétence pour inspecter, nettoyer, transformer et modéliser les données.\
    Résolution de Problèmes : Aptitude à utiliser des approches scientifiques et analytiques pour résoudre des problèmes complexes.\
    Pensée Critique : Évaluer des méthodes, des résultats et des implications dans l'analyse de données.`,
    image: "https://cdn.futura-sciences.com/buildsv6/images/wide1920/9/5/0/950321c11d_50173256_data-science-1.jpg",
    link: "https://www.e-university.site/course/data-science"
  },
  {
    id: "intelligence-artificielle",
    title: "Intelligence Artificielle",
    description: "Explorez les concepts fondamentaux et avancés de l'intelligence artificielle, y compris les réseaux neuronaux, le deep learning et les algorithmes génétiques.",
    image: "https://th.bing.com/th/id/OIP.wx-VAVMGHeK8UdgWYpzecgHaEU?rs=1&pid=ImgDetMain",
    link: "https://www.e-university.site/home/courses?category=certified-ai-developer"
  },
  {
    id: "blockchain-technology",
    title: "Blockchain Technology",
    description: "Découvrez les bases et les applications avancées de la technologie blockchain, ainsi que son impact sur les différents secteurs industriels.",
    image: "https://th.bing.com/th/id/R.e32faa7aeeb4fd4538bd617c18de42c0?rik=%2boRLaUoz0Adn1g&pid=ImgRaw&r=0",
    link: "https://www.e-university.site/course/blockchain-technology"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Maîtrisez les aspects critiques de la cybersécurité, y compris la gestion des risques, la protection des données, et les stratégies de défense contre les cyberattaques.",
    image: "https://th.bing.com/th/id/R.d59ca1b02076f779c1ab0aa0168d2743?rik=miFuoT%2fMW0vkrg&pid=ImgRaw&r=0",
    link: "https://www.e-university.site/course/cybersecurity"
  },
  {
    id: "audit-informatique",
    title: "Audit Informatique",
    description: "Formez-vous aux méthodes et pratiques d'audit informatique pour assurer la conformité et la sécurité des systèmes d'information.",
    image: "https://th.bing.com/th/id/OIP.bwTfVnS7W1csm0NRHRG4bAHaEi?w=292&h=180&c=7&r=0&o=5&pid=1.7",
    link: "https://www.e-university.site/course/audit-informatique"
  },
  {
    id:"genie-logiciel",
    title: "Genie Logiciel",
    description: "Apprenez les meilleures pratiques de génie logiciel pour concevoir, développer et maintenir des logiciels de haute qualité.",
    image: "https://th.bing.com/th/id/R.c5e39f5587930c952faf07e1756da65a?rik=3n%2fIdWtyWtkIKw&pid=ImgRaw&r=0&sres=1&sresct=1",
    link: "https://www.e-university.site/course/genie-de-logiciel"
  },
  {
    id:"reseaux-informatique",
    title: "Réseaux Informatique",
    description: "Acquérez des compétences en conception, configuration et gestion des réseaux informatiques pour assurer une connectivité optimale.",
    image: "https://th.bing.com/th/id/OIP.W8AUWCRJiSCA4OhbWMZW_QHaFj?pid=ImgDet&w=474&h=355&rs=1",
    link: "https://www.e-university.site/home/course/administration-reseaux-avancee/12"
  }
];

export function CourseDetail() {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return <p>Course not found!</p>;
  }

  return (
    <div className={`p-4 min-h-screen bg-gray-100 ${s.App}`}>
      <Header />
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <img src={course.image} alt={course.title} className=" mb-4 w-full h-64 object-cover rounded-md" />
        <p className="mb-4">{course.description}</p>
        <a href={course.link} target="_blank" rel="noopener noreferrer" className="inline-block py-2 px-4 bg-blue-600 text-white rounded-md">
          Inscription
        </a>
        <br />
        <Link to="/formations" className="inline-block mt-4 text-blue-500">Retour aux formations</Link>
      </div>
    </div>
  );
}
