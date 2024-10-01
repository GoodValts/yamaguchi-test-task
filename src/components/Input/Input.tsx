import { useDispatch } from "react-redux";
import styles from "./Input.module.scss";
import { setSearchString } from "@/store/reducers/searchSlice";
import { useState } from "react";

export default function Input() {
  const dispatch = useDispatch();

  const [isShort, setIsShort] = useState(false);

  const validateInput = (string: string) => {
    if (string.length > 0 && string.length < 4) {
      setIsShort(true);
    } else {
      setIsShort(false);
    }

    dispatch(setSearchString(string));
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder="Search jokes..."
        onChange={(event) => validateInput(event.target.value)}
      />
      <p className={styles.error}>
        {isShort ? "Search string should contain at least 4 letters" : ""}
      </p>
    </div>
  );
}
