import "./App.css";
import Card from "./components/Card";
import { useState, useRef, useEffect } from "react";

function App() {
  const [cardsdata, setCardsdata] = useState([
    { title: "la carte 1", content: "le contenu 1", id: "1" },
    { title: "la carte 2", content: "le contenu 2", id: "2" },
    { title: "la carte 3", content: "le contenu 3", id: "3" },
    { title: "la carte 4", content: "le contenu 4", id: "4" },
  ]);

  const btnRef = useRef<HTMLButtonElement>(null);

  console.log(btnRef);

  useEffect(() => {
    const handleResize = (e: Event) => {
      console.log("Window resized", e);
    };
    console.log(btnRef);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="App">
      {cardsdata.map((card) => (
        <Card key={card.id} title={card.title} content={card.content} />
      ))}
      <button ref={btnRef}>Submit</button>
    </div>
  );
}

export default App;
