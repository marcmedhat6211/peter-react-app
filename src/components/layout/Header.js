import styles from "./Header.module.scss";
import ButtonStyle1 from "../ui/buttons/ButtonStyle1";

const Header = ({ setShowModal }) => {
  return (
    <header className={styles["page-header"]}>
      <h1>Posts app</h1>
      <ButtonStyle1 text="Add Post" onClick={() => setShowModal(true)} />
    </header>
  );
};

export default Header;
