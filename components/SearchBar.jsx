import React from "react";
import styles from "./Searchbar.module.css";
import Icon from "./Icon";

export default function Searchbar(value, onChange, onSubmit) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="searchbar" className={styles.searchbar}>
        Find your Product !
      </label>

      <div className={styles.Button}>
        <input
          id="searchbar"
          className={styles.searchbar}
          placeholder="Product Name"
          value={value}
          onChange={onChange}
        />
        <button
          className={styles.searchButton}
          type="submit"
          aria-label="Search"
        >
          <Icon color="white" size="1.25em" icon="search" />
        </button>
      </div>
    </form>
  );
}
