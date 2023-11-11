import "./styles/global.css";
import "./styles/main-area.css";
import postData from "./assets/posts.json";

import MyNavBar from "./components/MyNavBar";
import MyPostCard from "./components/MyPostCard";

const App = () => {
  return (
    <div>
      <MyNavBar />
      <main className="post-card-container">
        {postData.map((post, i) => (
          <MyPostCard
            key={i}
            description={post.content}
            postLink="https://eeplus.ntuee.org/"
            postImg={`https://picsum.photos/1000/300?random=${i}`}
            {...post}
          />
        ))}
      </main>
    </div>
  );
};

export default App;
