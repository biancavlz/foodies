"use server";

import { saveMeal } from "./meals";

interface Meal {
  title: FormDataEntryValue | null;
  summary: FormDataEntryValue | null;
  instructions: FormDataEntryValue | null;
  image: FormDataEntryValue | null;
  creator: FormDataEntryValue | null;
  creator_email: FormDataEntryValue | null;
}

export async function shareMeal(formData: FormData): Promise<void> {
  const meal: Meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  await saveMeal(meal);
}
