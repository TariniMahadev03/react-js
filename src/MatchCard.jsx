import { useState } from "react";

function MatchCard({ match }) {
  const [isBooked, setIsBooked] = useState(false);

  return (
    <article>
      <h3>{match.homeTeam} vs {match.awayTeam}</h3>
      <p>{match.date} at {match.time}</p>
      <p>{match.venue}</p>
      <button
        type="button"
        aria-pressed={isBooked}
        onClick={() => setIsBooked(!isBooked)}
      >
        {isBooked ? "Tickets selected" : "Book tickets"}
      </button>
    </article>
  );
}

export default MatchCard;