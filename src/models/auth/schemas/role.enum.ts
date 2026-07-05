import z from "zod";

export const roleEnum = z.enum(["ADMIN", "USER"], { message: "Role must be ADMIN or USER" });
