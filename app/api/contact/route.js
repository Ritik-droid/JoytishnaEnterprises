import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // EMAIL
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      html: `
        <h3>Received Message from Website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // WHATSAPP LINK
    const whatsappNumber = process.env.WHATSAPP_NUMBER; // change this

    const text = `
        Message through Website:-
        Message: ${message}
            `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    return Response.json({
      success: true,
      whatsappURL,
    });

  } catch (error) {
    console.error(error);
    return Response.json(
      { success: false, message: "Failed to process request" },
      { status: 500 }
    );
  }
}