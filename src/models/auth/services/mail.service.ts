import nodemailer from "nodemailer";
import { activationHtml } from "../html/activation-html.js";

export class MailService {
  transporter;

  constructor() {
    const port = Number(process.env.SMTP_PORT?.trim());
    const securePort = !isNaN(port) && port === 465;

    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: port,
      secure: securePort,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }
  sendActivationMail = async (to: string, link: string) => {
    const activationLink = `${process.env.API_URL}/api/auth/activate/${link}`;
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: `Welcome! Activate Your Account`,
      text: `Welcome to our store! To activate your account, please follow this link: ${activationLink}`,
      html: activationHtml(activationLink)
    });
  };
}
