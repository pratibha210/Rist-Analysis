import { Card, CardContent, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import RiskMeter from "./RiskMeter";
import RiskChart from "./RiskChart";

const RiskDetails = () => {
  const riskData = useSelector((state) => state.risk.data);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(riskData);
  }, [riskData]);


  console.log(riskData,"riskData");
  

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <Container
        maxWidth="md"
        sx={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          padding: "30px",
          marginTop: "20px",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
          color: "white",
        }}
      >
        {/* Animated Risk Meter & Chart */}
        {riskData && (
          <motion.div 
            initial={{ scale: 0.9 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <RiskMeter />
            <RiskChart />
          </motion.div>
        )}

        {/* Animated Risk Details */}
        {data?.map((item, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card
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
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Risk Score: {item.risk_score}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                  Risk Level: {item.risk}
                </Typography>

                {/* Risk Level Animation */}
                {item?.level_vise_risk_analysis.map((level, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    style={{ marginTop: "10px", padding: "10px", borderRadius: "8px", background: "rgba(255, 255, 255, 0.1)" }}
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#ffcc80" }}>
                      Level {level.level}
                    </Typography>
                    <Typography>Risk: {level.risk_percentage}</Typography>

                    {/* Beneficiaries & Payers Section */}
                    <Typography variant="body2" sx={{ fontWeight: "bold", marginTop: "5px" }}>Beneficiaries:</Typography>
                    {level.beneficiary_details.map((b, j) => (
                      <Typography key={j} sx={{ marginLeft: "10px", fontSize: "14px", opacity: 0.8 }}>
                        - {b.entity_name} ({b.transaction_type})
                      </Typography>
                    ))}

                    <Typography variant="body2" sx={{ fontWeight: "bold", marginTop: "5px" }}>Payers:</Typography>
                    {level.payer_details.map((p, j) => (
                      <Typography key={j} sx={{ marginLeft: "10px", fontSize: "14px", opacity: 0.8 }}>
                        - {p.entity_name} ({p.transaction_type})
                      </Typography>
                    ))}
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Container>
    </motion.div>
  );
};

export default RiskDetails;
