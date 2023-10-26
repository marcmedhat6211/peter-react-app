import Post from "./Post";
import styles from "./PostsList.module.css";

const PostsList = (props) => {
  return (
    <div className={styles["posts-list"]}>
      {/* <Post title="post 1" desc="desc 1" />
      <Post title="post 2" desc="desc 2" />
      <Post title="post 3" desc="desc 3" /> */}
      {props.posts.map((post) => (
        <Post key={post.id} title={post.title} desc={post.desc} />
      ))}
    </div>
  );
};

export default PostsList;
