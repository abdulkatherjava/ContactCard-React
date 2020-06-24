import React from 'react';
import ContactCard from "./ContactCard"

function App() {
  return (
    <div className="contacts">
      <ContactCard contact= {{name: "Abdul Kather",
            imgUrl: "https://picsum.photos/200",
            mobileno: "994057887",
            address: "no 100, main road, Chennai" }} />
      <hr/>  
      <ContactCard contact= {{name: "Jony",
            imgUrl: "https://picsum.photos/100",
            mobileno: "994057887",
            address: "no 200, south road, Delhi" }} />
      <hr/>
      <ContactCard contact= {{name: "Amigose",
            imgUrl: "https://picsum.photos/400",
            mobileno: "9283749283",
            address: "no 300, west road, Bombay" }} />
      <hr/>
      <ContactCard contact= {{name: "Scrimba",
            imgUrl: "https://picsum.photos/500",
            mobileno: "893434982",
            address: "no 400, East road, Kolkatta" }} />
    </div>
  );
}

export default App;
