import styles from "./Post.module.css";

const Post = ({ title, desc }) => {
  return (
    <div className={styles.post}>
      <h2 className={styles["post-title"]}>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Post;
