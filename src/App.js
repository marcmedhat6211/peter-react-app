import PostsList from "./components/PostsList";
import Header from "./components/layout/Header";

const posts = [
  { id: Math.random(), title: "title 1", desc: "desc 1" },
  { id: Math.random(), title: "title 2", desc: "desc 2" },
  { id: Math.random(), title: "title 3", desc: "desc 3" },
];

function App() {
  return (
    <div>
      <Header />
      <PostsList posts={posts} />
    </div>
  );
}

export default App;
