"use client";

import { Box, Typography, TextField, Button } from "@mui/material";
import {
  LocationOn,
  Email,
  Phone,
  QrCode,
  FacebookTwoTone,
  Twitter,
  LinkedIn,
  Instagram,
} from "@mui/icons-material";
import { useState } from "react";

export const ConnectUS = () => {
  const commonTextFieldStyles = {
    mb: 2,
    "& .MuiOutlinedInput-root": {
      borderRadius: 3,
      "& fieldset": { borderColor: "#E0E0E0" },
      "&:hover fieldset": { borderColor: "#E0E0E0" },
      "&.Mui-focused fieldset": { borderColor: "#E0E0E0" },
      "& input": { padding: "10px 14px" },
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <Box sx={{ py: 6, backgroundColor: "#FCF8EC" }}>
      {/* CONTENT CONTAINER */}
      <Box
        sx={{
          maxWidth: "1000px", // 🔥 single source of truth
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <Typography
            sx={{
              fontSize: "1.6rem",
              fontWeight: 500,
              color: "#333333",
            }}
          >
            Connect With Us
          </Typography>
        </Box>

        {/* TOP ROW */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            alignItems: "stretch",
            mb: 4,
          }}
        >
          {/* LEFT – FORM */}
          <Box
            sx={{
              flex: 2, // 🔥 instead of percentages
              p: 3,
              backgroundColor: "#FFFFFF",
              borderRadius: 3,
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            }}
          >
            <Typography variant="h6" fontWeight={700} mb={3} color="#347C5E">
              Send Us A Message
            </Typography>

            <Typography mb={0.5}>Name</Typography>
            <TextField
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              sx={commonTextFieldStyles}
            />

            <Typography mb={0.5}>Email</Typography>
            <TextField
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              sx={commonTextFieldStyles}
            />

            <Typography mb={0.5}>Phone</Typography>
            <TextField
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              sx={commonTextFieldStyles}
            />

            <Typography mb={0.5}>Message</Typography>
            <TextField
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              sx={commonTextFieldStyles}
            />

            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                mt: 1,
                backgroundColor: "#347C5E",
                px: 4,
                py: 1.2,
                borderRadius: 4,
                textTransform: "none",
              }}
            >
              Send Message
            </Button>
          </Box>

          {/* RIGHT – CONTACT */}
          <Box
            sx={{
              flex: 1,
              p: 3,
              backgroundColor: "#FFFFFF",
              borderRadius: 3,
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            }}
          >
            <Typography variant="h5" fontWeight={700} mb={3} color="#347C5E">
              Get In Touch
            </Typography>

            <Box sx={{ display: "flex", gap: 1.5, mb: 3 }}>
              <LocationOn sx={{ color: "#347C5E" }} />
              <Typography>
                Plot No. C-38, New MIDC, Karanja Road, Murtizapur, Dist. Akola –
                444107
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1.5, mb: 3 }}>
              <Email sx={{ color: "#347C5E" }} />
              <Typography>biotechsolution07.22@gmail.com</Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1.5, mb: 3 }}>
              <Phone sx={{ color: "#347C5E" }} />
              <Typography>+91 98765 43210</Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1.5, mb: 4 }}>
              <QrCode sx={{ color: "#347C5E" }} />
              <Typography>GSTIN: 27ANWPR0738F1ZI</Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <FacebookTwoTone sx={{ color: "#347C5E" }} />
              <Twitter sx={{ color: "#347C5E" }} />
              <LinkedIn sx={{ color: "#347C5E" }} />
              <Instagram sx={{ color: "#347C5E" }} />
            </Box>
          </Box>
        </Box>

        {/* BOTTOM BOX – PERFECTLY ALIGNED */}
        <Box
          sx={{
            p: 0,
            backgroundColor: "#FFFFFF",
            borderRadius: 3,
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            overflow: "hidden", // important for rounded corners
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: 300,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <iframe
              title="Company Location"
              src="https://www.google.com/maps?q=Plot%20No.%20C-38,%20New%20MIDC,%20Karanja%20Road,%20Murtizapur,%20Akola%20444107&t=k&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
