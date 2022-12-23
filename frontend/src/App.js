import Campaign_container from "./Components/Campaign-container/Campaign_container";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Using fetch to fetch the api from 
    // flask server it will be redirected to proxy
    fetch("/data").then((res) =>
        res.json().then((data) => {
            // Setting a data from api
            console.log(data)
        })
    );
}, []);
  return (
    <div className="App">
      <Campaign_container />
    </div>
  );
}

export default App;
