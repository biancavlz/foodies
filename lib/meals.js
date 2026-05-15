import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  // For testing
  // await new Promise((res) => setTimeout(res, 5000));
  return db.prepare("SELECT * FROM meals").all();
}

export async function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  // Creates slug format
  meal.slug = slugify(meal.title, { lower: true });
  //sanitize user input
  meal.instructions = xss(meal.instructions);

  // Store image in the public/assets folder
  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/assets/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(
    Buffer.from(bufferedImage, (error) => {
      if (error) {
        throw new Error("Saving image failed!");
      }
    }),
  );

  meal.image = `/assets/${fileName}`;

  //save data in DB
  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `,
  ).run(meal);
}
