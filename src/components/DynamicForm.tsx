import React from 'react';
import {
    TextField,
    Button,
    Grid,
    Box
} from "@mui/material";

interface DynamicFormProps {
  forms: string[];
  setForms: React.Dispatch<React.SetStateAction<string[]>>;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ forms, setForms }) => {

  const addForm = () => {
    setForms([...forms, '']);
  };

  const removeForm = (index: number) => {
    const updatedForms = [...forms];
    updatedForms.splice(index, 1);
    setForms(updatedForms);
  };

  const handleFormChange = (index: number, value: string) => {
    const updatedForms = [...forms];
    updatedForms[index] = value;
    setForms(updatedForms);
  };

  return (
    <div>
      {forms.map((form, index) => (
        <Box key={index} mb={2}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={8}>
              <TextField
                fullWidth
                type="text"
                value={form}
                onChange={(e) => handleFormChange(index, e.target.value)}
              />
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="outlined"
                onClick={() => removeForm(index)}
              >
                フォームを削除
              </Button>
            </Grid>
          </Grid>
        </Box>
      ))}
      <Button
        variant="contained"
        color="primary"
        onClick={addForm}
      >
        フォームを追加
      </Button>
    </div>
  );
}

export default DynamicForm;
