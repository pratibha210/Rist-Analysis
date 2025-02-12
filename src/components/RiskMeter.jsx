import { CircularProgress, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const RiskMeter = () => {
  const riskData = useSelector((state) => state.risk.data);

  if (!riskData) return null;

  const riskScore = parseFloat(riskData[0].risk_score.replace("%", "")) || 0; // Extract number

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ textAlign: "center", marginTop: "20px" }}
    >
      <Paper
        elevation={6}
        sx={{
          background: "linear-gradient(135deg, #ff6f61, #ffcc00)",
          color: "white",
          display: "inline-block",
          borderRadius: "50%",
          marginBottom: "20px",
          padding: "20px",
          transition: "transform 0.3s ease-in-out",
          position: "relative",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: "0px 4px 20px rgba(255, 165, 0, 0.5)",
          },
        }}
      >
        <CircularProgress
          variant="determinate"
          value={riskScore}
          size={140}
          thickness={5}
          sx={{ color: "white" }}
        />
        <Typography
          variant="h6"
          sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontWeight: "bold" }}
        >
          {riskScore}%
        </Typography>
      </Paper>
      <Typography variant="h6" sx={{ marginTop: "10px", fontWeight: "bold" }}>
        Risk Score
      </Typography>
    </motion.div>
  );
};

export default RiskMeter;
