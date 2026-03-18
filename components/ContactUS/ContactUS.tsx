"use client";
import Link from "next/link";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import { LocationOn, Email, Phone, Factory } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
export default function Products() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToContact = () => {
      if (window.location.hash === "#contact") {
        const element = document.getElementById("contact");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    scrollToContact();

    window.addEventListener("hashchange", scrollToContact);

    return () => {
      window.removeEventListener("hashchange", scrollToContact);
    };
  }, [pathname]);

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
    <Box id="contact" sx={{ py: 16, backgroundColor: "#0F0F0F" }}>
      {/* CONTENT CONTAINER */}
      <Box
        sx={{
          maxWidth: "1000px", // 🔥 single source of truth
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
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
              backgroundColor: "#0F0F0F",
              borderRadius: 3,
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            }}
          >
            <Typography
              variant="h4"
              fontWeight={700}
              mb={3}
              sx={{
                color: "#FFFFFF",
                fontFamily: "var(--font-teachers)",
              }}
            >
              Send Us A Message
            </Typography>

            <Typography
              color="#FFFFFF"
              mb={0.5}
              sx={{
                color: "#FFFFFF",
                fontFamily: "var(--font-jost)",
              }}
            >
              Name
            </Typography>
            <TextField
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              sx={commonTextFieldStyles}
            />

            <Typography
              color="#FFFFFF"
              mb={0.5}
              sx={{
                color: "#FFFFFF",
                fontFamily: "var(--font-jost)",
              }}
            >
              Email
            </Typography>
            <TextField
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              sx={commonTextFieldStyles}
            />

            <Typography
              color="#FFFFFF"
              mb={0.5}
              sx={{
                color: "#FFFFFF",
                fontFamily: "var(--font-jost)",
              }}
            >
              Phone
            </Typography>
            <TextField
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              sx={commonTextFieldStyles}
            />

            <Typography
              color="#FFFFFF"
              mb={0.5}
              sx={{
                color: "#FFFFFF",
                fontFamily: "var(--font-jost)",
              }}
            >
              Message
            </Typography>
            <TextField
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              sx={{
                ...commonTextFieldStyles,
                "& .MuiInputBase-input": {
                  color: "#FFFFFF",
                },
              }}
            />

            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                mt: 1,
                backgroundColor: "#A9FF5C",
                px: 4,
                py: 1.2,
                borderRadius: 4,
                color: "#000000",
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
              backgroundColor: "#0F0F0F",
              borderRadius: 3,
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            }}
          >
            <Typography
              variant="h4"
              fontWeight={700}
              mb={3}
              sx={{
                color: "#FFFFFF",
                fontFamily: "var(--font-teachers)",
              }}
            >
              Prefer a Direct Chat?
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                mb: 3,
                background: "#FFFFFF1A",
                borderRadius: "10px",
                padding: "12px",
              }}
            >
              <Factory sx={{ color: "#FFFFFF" }} />
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "var(--font-teachers)",
                }}
              >
                Gate No. 1430, Chinchecha Mala, Mhatre Industries, Chikhali,
                Pune – 411062
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                mb: 3,
                background: "#FFFFFF1A",
                borderRadius: "10px",
                padding: "22px",
              }}
            >
              <Email sx={{ color: "#FFFFFF" }} />

              <Typography
                component="a"
                href="mailto:sales@jyotishnaenterprises.com"
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "var(--font-teachers)",
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                sales@jyotishnaenterprises.com
              </Typography>
            </Box>
            <Box
              onClick={() => (window.location.href = "tel:+919665316851")}
              sx={{
                display: "flex",
                gap: 1.5,
                mb: 3,
                background: "#FFFFFF1A",
                borderRadius: "10px",
                padding: "22px",
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": {
                  background: "#FFFFFF33",
                },
              }}
            >
              <Phone sx={{ color: "#FFFFFF" }} />
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "var(--font-teachers)",
                }}
              >
                +91-9665316851
              </Typography>
            </Box>

            <Box
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/search/?api=1&query=Mhatre+Industries+Chikhali+Pune+411062",
                  "_blank",
                )
              }
              sx={{
                display: "flex",
                gap: 1.5,
                mb: 4,
                background: "#FFFFFF1A",
                borderRadius: "10px",
                padding: "22px",
                cursor: "pointer",
              }}
            >
              <LocationOn sx={{ color: "#FFFFFF" }} />

              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "var(--font-teachers)",
                }}
              >
                Mhatre Industries, Chikhali Pune – 411062
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: { xs: "300px", md: "400px" },
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://maps.google.com/maps?q=Mhatre%20Industries%20Chikhali%20Pune%20411062&t=k&z=17&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          />
        </Box>
      </Box>
    </Box>
  );
}
