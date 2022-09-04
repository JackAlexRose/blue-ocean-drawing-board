import React from "react";
import { TextField, Select, Button } from "@mui/material";
import styles from "./FactorsForm.module.css";

type FactorsFormProps = {
  changeFactors: (factorList: string[]) => void;
};

export const FactorsForm: React.FC<FactorsFormProps> = ({ changeFactors }) => {
  const [factorList, setFactorList] = React.useState<string[]>([]);
  const [activeFactor, setActiveFactor] = React.useState<number>(-1);
  const [factorName, setFactorName] = React.useState<string>("");

  React.useEffect(() => {
    if (activeFactor < 0) {
      setActiveFactor(factorList.length - 1);
    }
  }, []);

  React.useEffect(() => {
    changeFactors(factorList);
  }, [factorList]);

  const handleSelectChange = (value: string) => {
    if (factorList.includes(value)) {
      setActiveFactor(factorList.indexOf(value));
    }
  };

  const addFactor = () => {
    let newIndex = factorList.length + 1;
    while (factorList.includes(`Factor ${newIndex}`)) {
      newIndex++;
    }
    const newFactorList = [...factorList, `Factor ${newIndex}`];
    setFactorList(newFactorList);
    setActiveFactor(newFactorList.length - 1);
    setFactorName("");
  };

  const editFactorName = (value: string) => {
    if (activeFactor !== undefined) {
      const newFactorList = [...factorList];
      newFactorList[activeFactor] = value;
      setFactorList(newFactorList);
      setFactorName(value);
    }
  };

  const deleteFactor = () => {
    if (activeFactor !== undefined) {
      const newFactorList = [...factorList];
      newFactorList.splice(activeFactor, 1);
      setFactorList(newFactorList);
      setActiveFactor(newFactorList.length - 1);
      setFactorName("");
    }
  };

  return (
    <div className={styles.factorContainer}>
      <Button
        variant="contained"
        color="success"
        disabled={factorList.length >= 10}
        style={{ margin: "20px" }}
        onClick={() => {
          if (factorList.length < 10) addFactor();
        }}
      >
        {factorList.length < 10 ? "Add Factor" : "Max Reached"}
      </Button>
      <Select
        native
        onChange={(e) => handleSelectChange(e.target.value as string)}
        label="test"
        value={factorList[activeFactor || 0]}
      >
        {factorList.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </Select>
      {activeFactor >= 0 ? (
        <div>
          <TextField
            label="Rename Factor"
            onChange={(e) => editFactorName(e.target.value)}
            variant="standard"
            style={{ margin: "20px 20px" }}
            value={factorName}
          ></TextField>
          <Button
            variant="contained"
            color="error"
            style={{ margin: "20px" }}
            onClick={deleteFactor}
          >
            Delete Factor
          </Button>
        </div>
      ) : null}
    </div>
  );
};
