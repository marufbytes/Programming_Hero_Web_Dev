import { Suspense } from 'react';
import './App.css'
import Banner from './components/homepage/banner/banner';
import Player from './components/homepage/players/player';
import Navbar from './components/navbar/navbar';

const fetchPlayer = async () => {
  const res = await fetch("/data.json");

  if (!res.ok) {
    throw new Error("Failed to load players");
  }

  // FIX: Parse the response into JSON so `data` becomes an array
  return res.json();
}

const playerPromise = fetchPlayer();

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Player playerPromise={playerPromise} />
      </Suspense>
    </>
  )
}

export default App