import { createSlice } from "@reduxjs/toolkit";

export const dummyData = [
  {
    source_address: "1HQ3Go3ggs8pFnXuHVHRytPCq5fGG8Hbhx",
    risk_score: "89%",
    risk: "Highly Risky",
    level_vise_risk_analysis: [
      {
        level: 1,
        risk_percentage: "85%",
        risky_entities_count: 3,
        beneficiary_details: [
          {
            beneficiary_address: "3Cbq7aT1tY8kMxWLbitaG7yT6bPbKChq64",
            entity_name: "Darknet Market",
            transaction_type: "Transfer",
          },
        ],
        payer_details: [
          {
            payer_address: "1PnMfRF2enSZnR6JSexxBHuQnxG8Vo5FVK",
            entity_name: "Mixing Service",
            transaction_type: "Deposit",
          },
        ],
      },
      {
        level: 2,
        risk_percentage: "72%",
        risky_entities_count: 2,
        beneficiary_details: [
          {
            beneficiary_address: "3Ai2JjijKtBGLzXtHX9kAA5Vmfz3g9dM6T",
            entity_name: "Fraudulent Exchange",
            transaction_type: "Withdrawal",
          },
        ],
        payer_details: [
          {
            payer_address: "1QLbz7JHiBTspS962RLKV8GndWFwi5j6Qr",
            entity_name: "Flagged Wallet",
            transaction_type: "Payment",
          },
        ],
      },
    ],
  },
  {
    source_address: "Go3ggs8pFnXuHVHRytPCq5fGG8Hbhx",
    risk_score: "18%",
    risk: "Low Risky",
    level_vise_risk_analysis: [
      {
        level: 1,
        risk_percentage: "15%",
        risky_entities_count: 3,
        beneficiary_details: [
          {
            beneficiary_address: "3Cbq7aT1tY8kMxWLbitaG7yT6bPbKChq64",
            entity_name: "Darknet Market",
            transaction_type: "Transfer",
          },
        ],
        payer_details: [
          {
            payer_address: "1PnMfRF2enSZnR6JSexxBHuQnxG8Vo5FVK",
            entity_name: "Mixing Service",
            transaction_type: "Deposit",
          },
        ],
      },
      {
        level: 2,
        risk_percentage: "20%",
        risky_entities_count: 2,
        beneficiary_details: [
          {
            beneficiary_address: "3Ai2JjijKtBGLzXtHX9kAA5Vmfz3g9dM6T",
            entity_name: "Fraudulent Exchange",
            transaction_type: "Withdrawal",
          },
        ],
        payer_details: [
          {
            payer_address: "1QLbz7JHiBTspS962RLKV8GndWFwi5j6Qr",
            entity_name: "Flagged Wallet",
            transaction_type: "Payment",
          },
        ],
      },
    ],
  },
];
const riskSlice = createSlice({
  name: "risk",
  initialState: { data: dummyData },
  reducers: {
    fetchRiskData: (state, action) => {
      const searchTerm = action.payload?.toLowerCase();
      if (!searchTerm) {
        state.data = dummyData; 
      } else {
        const foundData = dummyData.find((item) =>
          item.source_address.toLowerCase() === searchTerm
        );
        state.data = foundData ? [foundData] : []; 
      }
    },
    resetRiskData: (state) => {
      state.data = dummyData; 
    },
  },
});

export const { fetchRiskData, resetRiskData } = riskSlice.actions;
export default riskSlice.reducer;