import { Container, CssBaseline } from "@mui/material";
import { motion } from "framer-motion";
import SearchBar from "./components/SearchBar";


const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, rgb(180 202 236), rgb(75 130 229))",
        padding: "20px",
        color: "white",
      }}
    >
      <CssBaseline />
      {/* <Container
        maxWidth="md"
        sx={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      > */}

        <SearchBar />
      {/* </Container> */}
    </motion.div>
  );
};

export default App;
