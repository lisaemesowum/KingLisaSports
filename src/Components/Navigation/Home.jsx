import { useEffect, useState } from "react";
import { getupcomingMatches } from "../services/matchService";
import AOS from "aos";
import "aos/dist/aos.css";
// import upcomingMatches from '../services/upcomingMatches';
import "../styling/Home.css";
const Home = () => {
  const [matches, setMatches] = useState([]);
  // const [team, setTeam] = useState("");
  // const [league, setLeague] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getupcomingMatches()
      .then((response) => {
        setMatches(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching matches:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once while scrolling down
    });
  }, []);

  if (loading) return <p>Loading matches...</p>;

  return (
    <div>
      <div className="home-title" data-aos="fade-up">
        {" "}
        <h2>Upcoming Matches</h2>
      </div>
      {matches.length === 0 ? (
        <p>No matches found.</p>
      ) : (
        matches.map((match) => (
          <div
            data-aos="zoom-in"
            key={match.id}
            style={{
              marginBottom: "20px",
              border: "1px solid #020024",
              padding: "10px",
              // borderRadius: "8px",
              backgroundImage: `url(${match.matchThumbnail})`,
              backgroundSize: "100% 140%",
              backgroundPosition: "center",
              position: "relative",
              width: "98%",
              margin: "auto",
              height: "530px",
              color: "white",
              textShadow: "2px 2px 4px #000000",
            }}
            className="Home-upcomingMatches"
          >
            <div className="HOME-UPcoming">
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                {/* <img
                src={match.homeLogo}
                alt={match.homeTeam}
                width={50}
                height={50}
                style={{ border: "1px solid red", objectFit: "contain" }}
              />{" "}
              <strong>{match.homeTeam}</strong>
              <span>vs</span>
              <strong>{match.awayTeam}</strong>
              <img src={match.awayLogo} alt={match.awayTeam} width={50} /> */}
              </div>
              <div className="home-secondary-info">
                <div>Date: {new Date(match.matchDate).toLocaleString()}</div>
                {/* <div>League: {match.league}</div> */}
                {/* <div>Stadium: {match.stadium}</div> */}
              </div>
              {/* <div>Status: {match.status}</div> */}
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export default Home;
