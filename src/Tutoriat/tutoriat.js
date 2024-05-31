import React, { useState } from "react";
import { Header } from "../header";
import s from "./style.module.css"; // Import the CSS module

const courses = [
  {
    university: "UPB",
    courses: [
      {
        no: "CS101",
        title: "Introduction to Computer Science",
        description: "Basic concepts of computer science.",
        cost: "10000 FCFA"
      },
      {
        no: "CS102",
        title: "Data Structures and Algorithms",
        description: "Introduction to data structures and algorithms.",
        cost: "15000 FCFA"
      }
    ]
  },
  {
    university: "Another Polytechnic University",
    courses: [
      {
        no: "IT201",
        title: "Database Management Systems",
        description: "Overview of database management systems.",
        cost: "12000 FCFA"
      },
      {
        no: "IT202",
        title: "Web Development",
        description: "Introduction to web development.",
        cost: "13000 FCFA"
      }
    ]
  }
];

export function Tutoriat() {
  const [formData, setFormData] = useState({
    courseNo: "",
    title: "",
    description: "",
    university: "",
    name: "",
    surname: "",
    tel: "",
    email: "",
    startDate: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, save data to the database
    console.log(formData);
  };

  return (
    <div className={`font-sans p-6 ${s.App}`}>
      <Header />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Cours Offerts</h1>
        {courses.map((university) => (
          <div key={university.university} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{university.university}</h2>
            <ul>
              {university.courses.map((course) => (
                <li key={course.no} className="mb-4">
                  <h3 className="text-xl font-semibold">{course.title}</h3>
                  <p>{course.description}</p>
                  <p className="font-bold">Coût mensuel: {course.cost}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <h1 className="text-3xl font-bold text-center mb-8">Inscription aux Cours</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block font-medium">No Cours</label>
              <input
                type="text"
                className={`form-control mt-1 block w-full ${s.customInput}`}
                name="courseNo"
                value={formData.courseNo}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block font-medium">Titre</label>
              <input
                type="text"
                className={`form-control mt-1 block w-full ${s.customInput}`}
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block font-medium">Description</label>
              <input
                type="text"
                className={`form-control mt-1 block w-full ${s.customInput}`}
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block font-medium">Université</label>
              <input
                type="text"
                className={`form-control mt-1 block w-full ${s.customInput}`}
                name="university"
                value={formData.university}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block font-medium">Nom</label>
              <input
                type="text"
                className={`form-control mt-1 block w-full ${s.customInput}`}
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block font-medium">Prénom</label>
              <input
                type="text"
                className={`form-control mt-1 block w-full ${s.customInput}`}
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block font-medium">Téléphone</label>
              <input
                type="tel"
                className={`form-control mt-1 block w-full ${s.customInput}`}
                name="tel"
                value={formData.tel}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                className={`form-control mt-1 block w-full ${s.customInput}`}
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block font-medium">Date de Début</label>
              <input
                type="date"
                className={`form-control mt-1 block w-full ${s.customInput}`}
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type="submit" className={`${s.customButton} mt-4`}>
            Inscription
          </button>
        </form>
      </div>
    </div>
  );
}
