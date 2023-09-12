import { useEffect } from "react";
import "./App.css";
const key = "	41fb067e74ee14abc95ad4a3cbc67bda";

function App() {
  useEffect(() => {
    const url = `https://api.musixmatch.com/ws/1.1/track.get?apikey=${key}`;

    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        console.log(result);
      });
  });

  return <></>;
}

export default App;
