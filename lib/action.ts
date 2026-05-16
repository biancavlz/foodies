"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

interface Meal {
  title: string;
  summary: string;
  instructions: string;
  image: File;
  creator: string;
  creator_email: string;
}

export interface ShareMealState {
  message: string | null;
}

function isInvalidText(text: string): boolean {
  return !text || text.trim() === "";
}

export async function shareMeal(
  _prevState: ShareMealState,
  formData: FormData,
): Promise<ShareMealState> {
  const meal: Meal = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as File,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input",
    };
  }

  await saveMeal(meal);
  redirect("/meals");
}
