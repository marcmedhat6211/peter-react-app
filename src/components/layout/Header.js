import styles from "./Header.module.css";
import ButtonStyle1 from "../ui/buttons/ButtonStyle1";

const Header = () => {
  return (
    <header className={styles["page-header"]}>
      <h1>Posts app</h1>
      <ButtonStyle1 />
    </header>
  );
};

export default Header;
