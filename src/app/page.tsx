import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "./component/Sidebar/Sidebar";

export default function Home() {
  return (
    // <div className={styles.page}>
      <Sidebar>
        <h1>Main Content</h1>
        <p>This is the main content area inside the sidebar wrapper.</p>
      </Sidebar>
    // </div>
  );
}
