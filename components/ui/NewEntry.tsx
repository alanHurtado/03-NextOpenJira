import { Box, Button, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import DataSaverOnOutlinedIcon from "@mui/icons-material/DataSaverOnOutlined";
import { ChangeEvent, useState, useContext } from "react";
import { EntriesContext } from "../../context/entries/EntriesContext";
import { UIContext } from "../../context/ui/UIContext";

export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);
  const { setIsAddEntry, isAddingEntry } = useContext(UIContext);
  const [inputValue, setInputValue] = useState("");
  const [isTouch, setIsTouch] = useState(false);

  const onChangeTextField = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const saveEntry = () => {
    if (inputValue.length === 0) return;
    addNewEntry(inputValue);
    setInputValue("");
    setIsAddEntry(false);
    setIsTouch(false);
  };

  return (
    <Box sx={{ mb: 2, paddingX: 2 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ mt: 2, mb: 2 }}
            autoFocus
            multiline
            label="Nueva entrada"
            helperText="Ingrese un valor"
            error={isTouch && inputValue.length <= 0}
            onChange={onChangeTextField}
            onBlur={() => setIsTouch(true)}
          />
          <Box display="flex" justifyContent="space-between">
            <Button variant="text" onClick={() => setIsAddEntry(false)}>
              Cancelar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
              onClick={saveEntry}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<DataSaverOnOutlinedIcon />}
          fullWidth
          variant="outlined"
          onClick={() => setIsAddEntry(true)}
        >
          Agregar Tarea
        </Button>
      )}
    </Box>
  );
};
