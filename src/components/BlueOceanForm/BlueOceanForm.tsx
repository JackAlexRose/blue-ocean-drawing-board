import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "./BlueOceanForm.module.css";
import { FactorsForm } from "../FactorsForm";

export type BlueOceanFormProps = {
  titleChangeHandler: (title: string) => void;
  addDatasetHandler?: () => void;
  changeFactors: (factorList: string[]) => void;
};

const BlueOceanForm: React.FC<BlueOceanFormProps> = ({
  titleChangeHandler,
  changeFactors,
}) => {
  return (
    <div className={styles.formContainer}>
      <TextField
        label="Chart Title"
        onChange={(e) => titleChangeHandler(e.target.value)}
        variant="standard"
        style={{ margin: "20px 20px" }}
      />
      <FactorsForm changeFactors={changeFactors} />
    </div>
  );
};

export default BlueOceanForm;
