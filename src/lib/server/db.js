import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { DB_URL } from "$env/static/private";

const database = neon(DB_URLURL);
export const db = drizzle(database);
