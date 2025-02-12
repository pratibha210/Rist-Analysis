import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";
import { Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

const RiskChart = () => {
  const riskData = useSelector((state) => state.risk.data);

  if (!riskData) return <Typography>No data available</Typography>;

  const chartData = riskData?.flatMap((item) =>
    item.level_vise_risk_analysis.map((level) => ({
      level: `Level ${level.level}`,
      risk:
        typeof level.risk_percentage === "string"
          ? parseFloat(level.risk_percentage.replace("%", "")) || 0
          : level.risk_percentage || 0,
    }))
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Paper
        elevation={6}
        sx={{
          background: "linear-gradient(135deg, #1e3c72, #2a5298)",
          color: "white",
          borderRadius: "12px",
          marginBottom: "20px",
          marginTop: "20px",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: "0px 4px 20px rgba(255, 165, 0, 0.5)",
          },
        }}
      >
        <Typography variant="h6" align="center" sx={{ marginBottom: "10px", fontWeight: "bold" }}>
          Risk Level Analysis
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.3)" />
            <XAxis dataKey="level" stroke="#ffffff" />
            <YAxis domain={[0, 100]} unit="%" stroke="#ffffff" />
            <Tooltip
              formatter={(value) => `${value}%`}
              contentStyle={{ background: "#333", color: "#fff", borderRadius: "8px" }}
            />
            <Line type="monotone" dataKey="risk" stroke="#ffcc00" strokeWidth={3} dot={{ fill: "#ffcc00", r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </motion.div>
  );
};

export default RiskChart;
