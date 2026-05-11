import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  // For testing
  // await new Promise((res) => setTimeout(res, 5000));
  return db.prepare("SELECT * FROM meals").all();
}
