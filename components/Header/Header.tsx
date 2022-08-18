import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <Image src="/logo.svg" alt="ASAlytics Logo" width={140} height={63} />

      <div className={styles.headerButton}>
        <a href=""> ANALYZE ASAs</a>
      </div>
    </div>
  );
};

export default Header;
