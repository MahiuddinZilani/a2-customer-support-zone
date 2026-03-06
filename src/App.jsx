import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedCount, setResolvedCount] = useState(0);

  const inProgressCount = inProgressTasks.length;

  return (
    <>
      <Navbar></Navbar>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Banner
          inProgressCount={inProgressCount}
          resolvedCount={resolvedCount}
        ></Banner>
      </main>
    </>
  );
}

export default App;
