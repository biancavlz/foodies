"use client";

import { useRef } from "react";
import styles from "./ImagePicker.module.css";
import { MealImagePicker } from "@/types/meal";

function ImagePicker({ label, name }: MealImagePicker) {
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  function handleClick() {
    imageInputRef.current?.click();
  }
  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
        />
        <button className={styles.button} type="button" onClick={handleClick}>
          Pick an image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
