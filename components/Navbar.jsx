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

  {
    title: "Nous contacter !",
    description: "Praise the windows",
    url: "/contacts",
  },

  {
    title: "A propos !",
    description: "Praise the windows",
    url: "/about",
  },
];

export default function Navbar() {
  return (
    <ul id="list" className={styles.list}>
      {links.map((link) => (
        <li key={link.title}>
          <Link href={link.url}>
            <a className={styles.link}>{link.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
