import React, { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [text, setText] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      return null;
    }
    router.push(`/search/${text}`);
    setText("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.title}>
          <Link href="/">BB Movies</Link>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            value={text}
            onChange={handleChange}
            className={styles.input}
            type="text"
            placeholder="Search movies..."
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
