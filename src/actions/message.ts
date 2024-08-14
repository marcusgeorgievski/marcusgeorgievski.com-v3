"use server";
import { messageSchema } from "@/components/messages/message-form";
import { z } from "zod";
import sql from "@/lib/db";

export async function getMessages() {
  const results = await sql`SELECT * FROM "Message" ORDER BY "createdAt" ASC`;
  return results;
}

export async function deleteMessage(id: number) {
  const results = await sql`DELETE FROM "Message" WHERE id = ${id}`;
  return results;
}

export async function createMessage(values: z.infer<typeof messageSchema>) {
  // validate message
  //   const validated = messageSchema.safeParse(values);

  //   if (!validated.success) {
  //     return {
  //       error: "Invalid fields!",
  //     };
  //   }

  const { name, contact, message } = values;

  try {
    // insert message into database
    const results =
      await sql`INSERT INTO "Message" (name, contact, body) VALUES (${name}, ${contact}, ${message})`;

    console.log(process.env.TITLE);
    if (name.toLocaleLowerCase() == "em") {
      return {
        title: process.env.TITLE,
        description: process.env.THANK,
      };
    }
  } catch (error: any) {
    return {
      error: "Something went wrong!" + error.message,
    };
  }
}
