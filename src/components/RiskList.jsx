import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { dummyData } from "../redux/riskSlice";

const RiskList = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ marginTop: "20px" }}
    >
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h6"
            align="center"
            sx={{ py: 2, fontWeight: "bold", color: "#ff9800" }}
          >
            🔍 Complete Risk List
          </Typography>
        </motion.div>

        <Table>
          {/* Table Header */}
          <TableHead>
            <TableRow
              sx={{
                background: "linear-gradient(to right,rgb(23, 47, 92), #2a5298)",
              }}
            >
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Source Address</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Risk Score</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Risk Level</TableCell>
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {dummyData.map((item, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  background: "rgba(255, 255, 255, 0.15)",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                }}
                style={{
                  cursor: "pointer",
                  transition: "0.3s ease-in-out",
                }}
              >
                <TableCell>{item.source_address}</TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: item.risk_score.replace("%", "") > 70 ? "red" : "green",
                    }}
                  >
                    {item.risk_score}
                  </Typography>
                </TableCell>
                <TableCell>
                  <motion.span
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      padding: "6px 12px",
                      borderRadius: "8px",
                      backgroundColor: item.risk === "Highly Risky" ? "red" : "green",
                      color: "white",
                      fontWeight: "bold",
                      display: "inline-block",
                    }}
                  >
                    {item.risk}
                  </motion.span>
                </TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </motion.div>
  );
};

export default RiskList;
