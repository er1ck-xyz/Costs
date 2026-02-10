import React, { useState, useEffect } from "react";
import styles from "./ProjectForm.module.css";
import Input from "../form/input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

export default function ProjectForm({ handleSubmit, projectData, btnText }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});
  useEffect(() => {
    async function Carregar() {
      const response = await fetch("http://localhost:5001/categories");
      const data = await response.json();
      setCategories(data);
    }
    Carregar();
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }
  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }
  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ""}
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento do projeto"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ""}
      />
      <div>
        <Select
          name="category_id"
          text="Selecione a categoria"
          options={categories}
          handleOnChange={handleCategory}
          value={project.category ? project.category.id : ""}
        />
      </div>
      <SubmitButton text={btnText} />
    </form>
  );
}
