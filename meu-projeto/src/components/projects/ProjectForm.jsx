import React from "react";
import styles from "./ProjectForm.module.css";
import Input from "../form/input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

export default function ProjectForm({ btnText }) {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento do projeto"
      />
      <div>
        <Select name="category_id" text="Selecione a categoria" />
      </div>
      <SubmitButton text={btnText} />
    </form>
  );
}
