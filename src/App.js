import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "../src/Card";
import Header from "../src/Header";

function App() {
  const auth =
    "Bearer BQCMp50ocArujUYvPDeyAe0BFhno99zVpjyuH1sySgkkxqrpfRiVlgL40hnn93QxiSjYBVLdGLZFOMpfqoMUfVlc32NsgOo50xoj-cQaLXdLkQ0cIdXuiYnrO6ueJQOUJ2yd-pNU3J5cQO_dvIzdGoNs5cyyWuPxUP8";

  const [albums, setAlbums] = useState([]);

  useEffect((async) => {
    getData()
      .then((data) =>
        data.albums.items.forEach((item) =>
          setAlbums((added) => [...added, item])
        )
      )
      .catch((error) => console.log(error));
  }, []);

  async function getData() {
    const response = await fetch(
      "https://api.spotify.com/v1/browse/new-releases",
      {
        method: "GET",
        headers: {
          Authorization: auth,
        },
        "Content-Type": "application/json",
      }
    );
    const data = await response.json();
    return data;
  }

  async function getMockData() {
    const response = await fetch("./albums.json", {
      "Content-Type": "application/json",
    });
    const data = await response.json();
    return data;
  }

  return (
    <main>
      <Header />
      <Card albums={albums} />
    </main>
  );
}

export default App;
