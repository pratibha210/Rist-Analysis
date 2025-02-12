import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRiskData } from "../redux/riskSlice";
import { TextField, Button, InputAdornment, IconButton, Paper } from "@mui/material";
import { Close as CloseIcon, Search as SearchIcon } from "@mui/icons-material";
import { motion } from "framer-motion";
import RiskDetails from "./RiskDetails";
import RiskList from "./RiskList";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = () => {
    setSearch(true);
    if (searchTerm.trim()) {
      dispatch(fetchRiskData(searchTerm.trim().toLowerCase())); 
    }
  };

  const handleClear = () => {
    setSearch(false);
    setSearchTerm(""); 
    dispatch(resetRiskData()); 
  };

  return (
    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "10px",
          borderRadius: "12px",
          background: "linear-gradient(to right, #1e3c72, #2a5298)",
        }}
      >
        <motion.div style={{ flexGrow: 1 }}>
          <TextField
            label="Search by Source Address"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#bdbdbd" }} />
                </InputAdornment>
              ),
              endAdornment: searchTerm && (
                <InputAdornment position="end">
                  <IconButton onClick={handleClear} edge="end">
                    <CloseIcon sx={{ color: "#bdbdbd" }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              input: { color: "#e0e0e0" },
              label: { color: "#bdbdbd" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#bdbdbd" },
                "&:hover fieldset": { borderColor: "#ff9800" },
                "&.Mui-focused fieldset": { borderColor: "#ff9800" },
              },
            }}
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }}>
          <Button variant="contained" color="secondary" onClick={handleSearch} sx={{ borderRadius: "8px", background: "#ff9800", color: "white" }}>
            Search
          </Button>
        </motion.div>
      </Paper>

      {/* Show RiskList always, and RiskDetails only on search */}
      {!search && <RiskList />}
      {search && <RiskDetails />}
    </motion.div>
  );
};

export default SearchBar;
