"use client";
import Link from "next/link";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import {
  LocationOn,
  Email,
  Phone,
  QrCode,
  FacebookTwoTone,
  Twitter,
  LinkedIn,
  YouTube,
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
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
      window.open(data.whatsappURL, "_blank");
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <Box sx={{ py: 16, backgroundColor: "#FCF8EC" }}>
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
              fontFamily: "var(--font-teachers)",
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
            <Typography
              variant="h6"
              fontWeight={700}
              mb={3}
              
              sx={{
                color: "#347C5E",
                fontFamily: "var(--font-teachers)",
              }}
            >
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
                fontFamily: "var(--font-jost)",
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
            <Typography
              variant="h5"
              fontWeight={700}
              mb={3}
              sx={{
                color: "#347C5E",
                fontFamily: "var(--font-teachers)",
              }}
            >
              Get In Touch
            </Typography>

            <Box sx={{ display: "flex", gap: 1.5, mb: 3 }}>
              <LocationOn sx={{ color: "#347C5E" }} />
              <Typography
                sx={{
                  color: "#33333",
                  fontFamily: "var(--font-teachers)",
                }}
              >
                Plot No. B-33 Murtizapur Growth Center, MIDC, Sherwadi Road,
                Murtizapur Dist.-Akola, PinCode - 444107
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1.5, mb: 3 }}>
              <Email sx={{ color: "#347C5E" }} />
              <Typography
                sx={{
                  color: "#33333",
                  fontFamily: "var(--font-teachers)",
                }}
              >
                biotechsolution07.22@gmail.com
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1.5, mb: 3 }}>
              <Phone sx={{ color: "#347C5E" }} />
              <Typography
                sx={{
                  color: "#33333",
                  fontFamily: "var(--font-teachers)",
                }}
              >
                +91 8668375337
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1.5, mb: 4 }}>
              <QrCode sx={{ color: "#347C5E" }} />
              <Typography
                sx={{
                  color: "#33333",
                  fontFamily: "var(--font-teachers)",
                }}
              >
                GSTIN: 27ANWPR0738F1ZI
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 0 }}>
              <IconButton
                component="a"
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookTwoTone sx={{ color: "#347C5E" }} />
              </IconButton>{" "}
              <IconButton
                component="a"
                href="https://www.instagram.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram sx={{ color: "#347C5E" }} />
              </IconButton>{" "}
              <IconButton
                component="a"
                href="https://youtube.com/@biotechsolution-f4g?si=DB_35x0g4tv14qbZ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTube sx={{ color: "#347C5E" }} />
              </IconButton>
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
              src="https://www.google.com/maps?q=Plot%20No.%20B-33,%20Murtizapur%20Growth%20Center,%20MIDC,%20Sherwadi%20Road,%20Murtizapur%20Dist.-Akola,%20PinCode-444107&t=k&output=embed"
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
