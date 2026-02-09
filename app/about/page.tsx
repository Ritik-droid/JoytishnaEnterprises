"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { ConnectUS } from "@/components/section/ConnectUS";

export default function AboutPage() {
  return (
    <>
      <Box>
        {/* Top Section */}
        <Box
          sx={{
            minHeight: "50vh",
            backgroundColor: "#EDE0C2",
            display: "flex",
            justifyContent: "center", // horizontal center
            alignItems: "center", // vertical center
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 1.5,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Teachers",
                fontWeight: 600,
                fontSize: { xs: "28px", md: "34px" },
                lineHeight: "100%",
                color: "#347C5E",
              }}
            >
              About Biotech Solution
            </Typography>

            <Typography
              sx={{
                fontFamily: "Teachers",
                fontWeight: 600,
                fontSize: "15px",
                lineHeight: "100%",
                color: "#333333",
              }}
            >
              Our Commitment to a Greener Planet
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box>
        <Box
          sx={{
            minHeight: "70vh",
            backgroundColor: "#FFFFFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: { xs: 2, md: 4 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              padding: 10,
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 3, md: 1 }, // 👈 less gap on mobile
              maxWidth: "1200px",
              width: "100%",
              alignItems: "center",
            }}
          >
            {/* Left Column */}
            <Box
              sx={{
                flex: 1,
                px: { xs: 0, md: 20 }, // 👈 responsive padding
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Teachers",
                  fontWeight: 600,
                  fontSize: { xs: "26px", md: "30px" },
                  lineHeight: "120%",
                  color: "#347C5E",
                  mb: 2,
                }}
              >
                Pioneering Sustainable Energy Solutions
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Teachers",
                  fontSize: { xs: "12px", md: "12px" },
                  lineHeight: "160%",
                  color: "#333333",
                }}
              >
                Biotech Solution is a leading manufacturer of renewable energy
                solutions, specializing in biomass pellet fire burners, heating
                equipment, and pellets supply for industrial and residential
                use. Established in Akola, Maharashtra, our company values
                customer satisfaction and ethical business practices. We believe
                in harnessing nature&apos;s power to create clean, efficient,
                and cost-effective energy for everyone. Our dedication to
                innovation means constantly improving our products to deliver
                higher heat efficiency and fuel savings, significantly reducing
                reliance on fossil fuels. We are not just a manufacturer; we are
                a partner in building a sustainable future.
              </Typography>
            </Box>

            {/* Right Column (Image) */}
            <Box
              sx={{
                flex: 1,
                width: "100%",
                maxWidth: { xs: "100%", md: 320 }, // limit width on desktop
                borderRadius: "12px",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                src="/biotech.png"
                alt="Biotech sustainable energy"
                width={800} // intrinsic size (important for Next.js)
                height={480}
                sizes="(max-width: 768px) 100vw, 520px"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
                priority
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <Box
          sx={{
            minHeight: "70vh",
            backgroundColor: "#FCF8EC",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: { xs: 2, md: 4 },
          }}
        >
          <Box
            sx={{
              py: { xs: 6, md: 0 },
              px: { xs: 2, md: 28 },
            }}
          >
            <Box
              sx={{
                maxWidth: "1200px",
                mx: "auto",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
              }}
            >
              {/* Our Vision */}
              <Box
                sx={{
                  position: "relative",
                  flex: 1,
                  background:
                    "linear-gradient(102.51deg, #FFFFFF 0%, #E0F2F1 100%)",
                  borderRadius: "16px",
                  p: { xs: 3, md: 4 },
                  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                  overflow: "hidden", // important for clean cut

                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: { xs: 120, md: 160 },
                    height: { xs: 120, md: 160 },
                    borderRadius: "50%",
                    backgroundColor: "#FFD70026",
                    bottom: -40,
                    right: -40,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Teachers",
                    fontWeight: 600,
                    fontSize: "22px",
                    color: "#347C5E",
                    mb: 2,
                  }}
                >
                  Our Vision
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Teachers",
                    fontSize: "14px",
                    lineHeight: "170%",
                    color: "#333333",
                  }}
                >
                  To become a global leader in renewable energy solutions by
                  promoting sustainable, eco-friendly technologies that reduce
                  environmental impact and empower industries and households to
                  transition towards cleaner energy alternatives.
                </Typography>
              </Box>

              {/* Our Mission */}
              <Box
                sx={{
                  position: "relative",
                  flex: 1,
                  background:
                    "linear-gradient(102.51deg, #FFFFFF 0%, #E0F2F1 100%)",
                  borderRadius: "16px",
                  p: { xs: 3, md: 4 },
                  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                  overflow: "hidden", // important for clean cut

                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: { xs: 120, md: 160 },
                    height: { xs: 120, md: 160 },
                    borderRadius: "50%",
                    backgroundColor: "#FFD70026",
                    bottom: -40,
                    right: -40,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Teachers",
                    fontWeight: 600,
                    fontSize: "22px",
                    color: "#347C5E",
                    mb: 2,
                  }}
                >
                  Our Mission
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Teachers",
                    fontSize: "14px",
                    lineHeight: "170%",
                    color: "#333333",
                  }}
                >
                  Our mission is to design and manufacture high-efficiency
                  biomass energy solutions that are cost-effective, reliable,
                  and environmentally responsible. We strive to continuously
                  innovate, exceed customer expectations, and contribute to a
                  greener and more sustainable future.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <Box
          sx={{
            minHeight: "50vh",
            backgroundColor: "#E0F2F1",
            display: "flex",
            flexDirection: "column", // 👈 important
            justifyContent: "center",
            alignItems: "center",
            px: { xs: 2, md: 4 },
            py: { xs: 6, md: 8 },
          }}
        >
          {/* Section Header */}
          <Typography
            sx={{
              fontFamily: "Teachers",
              fontWeight: 700,
              fontSize: { xs: "26px", md: "35px" },
              color: "#333333",
              mb: 5,
              textAlign: "center",
            }}
          >
            Our Core Values
          </Typography>

          {/* Cards Grid */}
          <Box
            sx={{
              maxWidth: "1200px",
              width: "100%",
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 3,
            }}
          >
            {/* Card 1 */}
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                p: 3,
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  mx: "auto",
                  mb: 2,
                  position: "relative",
                }}
              >
                <Image
                  src="/basicInfoSection/firstImg.png"
                  alt="Our Vision"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>

              <Typography variant="h6" fontWeight={700} mb={1} color="#347C5E">
                Clean, Renewable Energy
              </Typography>
              <Typography variant="body2" color="#333333">
                Committed to eco-friendly solutions that replenish naturally,
                ensuring a healthier planet.
              </Typography>
            </Box>

            {/* Card 2 */}
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                p: 3,
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  mx: "auto",
                  mb: 2,
                  position: "relative",
                }}
              >
                <Image
                  src="/aboutUs/cost.png"
                  alt="Our Mission"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>

              <Typography variant="h6" fontWeight={700} mb={1} color="#347C5E">
                Cost-Effective Solutions
              </Typography>
              <Typography variant="body2" color="#333333">
                Providing efficient energy options that deliver significant
                savings without  compromising performance.
              </Typography>
            </Box>

            {/* Card 3 */}
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                p: 3,
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  mx: "auto",
                  mb: 2,
                  position: "relative",
                }}
              >
                <Image
                  src="/aboutUs/hand.png"
                  alt="Our Values"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>

              <Typography variant="h6" fontWeight={700} mb={1} color="#347C5E">
                Customer-Centric Service
              </Typography>
              <Typography variant="body2" color="#333333">
                Building lasting relationships through exceptional support and
                understanding our clients' needs.
              </Typography>
            </Box>
          </Box>
        </Box>

        <ConnectUS />
      </Box>
    </>
  );
}
