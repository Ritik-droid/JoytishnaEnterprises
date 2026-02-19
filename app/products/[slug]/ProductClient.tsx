"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function ProductClient({ product }: any) {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const tabData = [
    {
      label: "Technical Specs",
      data: [
        { label: "Fuel Type", value: "Biomass Pellets" },
        { label: "Efficiency", value: "92%+" },
        { label: "Control System", value: "PLC Automated" },
        { label: "Ignition", value: "Auto Ignition" },
        { label: "Burner Type", value: "High Pressure Rotary" },
        { label: "Emission Level", value: "Low NOx Compliant" },
        { label: "Heat Output Stability", value: "±2%" },
        { label: "Combustion Technology", value: "Advanced Air Mixing" },
      ],
    },
    {
      label: "Dimensions & Weight",
      data: [
        { label: "Length", value: "4.5 m" },
        { label: "Width", value: "2.2 m" },
        { label: "Height", value: "3.1 m" },
        { label: "Net Weight", value: "5,800 kg" },
        { label: "Shipping Weight", value: "6,200 kg" },
        { label: "Base Frame", value: "Heavy-Duty Steel" },
        { label: "Mounting Type", value: "Floor Mounted" },
        { label: "Access Clearance", value: "1.2 m" },
      ],
    },
    {
      label: "Operating Parameters",
      data: [
        { label: "Capacity Range", value: "1,00,000 - 70,00,000 Kcal/hr" },
        { label: "Working Pressure", value: "10 - 25 bar" },
        { label: "Temperature Range", value: "120°C - 320°C" },
        { label: "Power Consumption", value: "15 kW" },
        { label: "Fuel Consumption", value: "15-120 kg/hr" },
        { label: "Startup Time", value: "5-8 Minutes" },
        { label: "Voltage Requirement", value: "415V, 3 Phase" },
        { label: "Frequency", value: "50 Hz" },
      ],
    },
    {
      label: "Safety Features",
      data: [
        { label: "Pressure Relief Valve", value: "Included" },
        { label: "Auto Shutdown", value: "Yes" },
        { label: "Overheat Protection", value: "Enabled" },
        { label: "Flame Monitoring", value: "Advanced Sensor Based" },
        { label: "Emergency Stop", value: "Integrated Button" },
        { label: "Overpressure Alarm", value: "Automatic Trigger" },
        { label: "Thermal Cutoff", value: "Built-In" },
        { label: "Safety Certification", value: "ISO Compliant" },
      ],
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: "100vw",
        backgroundColor: "#FFFFFF",
        px: { xs: 1, md: 10 },
        py: 8,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "24px", md: "32px" },
          fontWeight: 700,
          color: "#347C5E",
          mb: 4,
          textAlign: "center",
        }}
      >
        Complete Specifications
      </Typography>

      <Tabs
        value={tabValue}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        TabIndicatorProps={{
          style: {
            backgroundColor: "#F4C430",
            height: 3,
          },
        }}
        sx={{
          mb: 4,
          "& .MuiTabs-flexContainer": {
            justifyContent: { xs: "flex-start", md: "center" },
          },
          "& .MuiTab-root": {
            textTransform: "none",
            fontWeight: 600,
            color: "#555555",
            minWidth: { xs: 160, md: 180 }, // makes tabs readable
            fontSize: { xs: "13px", md: "15px" },
          },
          "& .Mui-selected": {
            color: "#347C5E",
          },
        }}
      >
        {tabData.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>

      <Box
        sx={{
          width: "80%",
          mx: "auto",
        
          overflowX: { xs: "auto", md: "visible" }, // scroll only on mobile
        }}
      >
        <Table
          sx={{
            width: "100%",
            minWidth: { xs: "550px", md: "120%" }, // smaller min width for mobile
          }}
        >
          <TableBody>
            {tabData[tabValue].data.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  backgroundColor: index % 2 === 0 ? "transparent" : "#F7F3E8",
                }}
              >
                <TableCell
                  sx={{
                    fontWeight: 600,
                    color: "#347C5E",
                    width: "50%",
                    border: "none",
                    py: 3,
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <CheckCircleOutlineIcon
                      sx={{ fontSize: 18, color: "#347C5E" }}
                    />
                    {row.label}
                  </Box>
                </TableCell>

                <TableCell
                  sx={{
                    color: "#555555",
                    border: "none",
                    py: 3,
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                >
                  {row.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}
