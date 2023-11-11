import "./styles/global.css";
import "./styles/main-area.css";
import { useEffect, useState } from "react";
import axios from "axios";
import MyNavBar from "./components/MyNavBar";
import MyPostCard from "./components/MyPostCard";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [postData, setPostData] = useState([]);
  const getPostData = async (searchText) => {
    console.log("getPostData");
    const response = await axios.get(
      `https://112-1-e-eplus-lecture-server.vercel.app/api/blog-posts`,
      {
        params: { searchText },
      }
    );
    setPostData(response.data);
  };

  useEffect(() => {
    getPostData("");
  }, []);
  return (
    <div>
      <MyNavBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={() => getPostData(searchText)}
      />
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
