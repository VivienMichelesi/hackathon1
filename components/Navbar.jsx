import Link from "next/link";
import styles from "./Navbar.module.css";

const links = [
  {
    title: "Home",
    description: "welcome to the truth",
    url: "/",
  },

  {
    title: "Market",
    description: "Essential of the believer",
    url: "/Market",
  },

  {
    title: "Enlightenment by the truth",
    description: "Achieve enlightenment",
    url: "/the_truth",
  },

  {
    title: "Join Us !",
    description: "Praise the windows",
    url: "/Join_us",
  },
];

export default function Navbar({ title, description, url }) {
  return (
    <ul id="list" className={styles.list}>
      {links.map((link) => (
        <li key={link.title}>
          <Link href={link.url}>
            <a className={styles.link} title={link.title}>
              {link.description}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
