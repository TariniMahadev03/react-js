import "./App.css";
import Hero from "./Hero.jsx";
import MatchCard from "./MatchCard.jsx";
import Navbar from "./Navbar.jsx";

const matches = [
  {
    id: 1,
    homeTeam: "Chennai Super Kings",
    awayTeam: "Mumbai Indians",
    date: "28 March 2026",
    time: "7:30 PM",
    venue: "M. A. Chidambaram Stadium, Chennai",
  },
  {
    id: 2,
    homeTeam: "Royal Challengers Bengaluru",
    awayTeam: "Kolkata Knight Riders",
    date: "29 March 2026",
    time: "3:30 PM",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
  },
  {
    id: 3,
    homeTeam: "Sunrisers Hyderabad",
    awayTeam: "Rajasthan Royals",
    date: "29 March 2026",
    time: "7:30 PM",
    venue: "Rajiv Gandhi International Cricket Stadium, Hyderabad",
  },
];

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="matches" aria-labelledby="matches-heading">
          <h2 id="matches-heading">Upcoming matches</h2>
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;