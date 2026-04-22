import { useState } from "react";

function MoodTracker() {
  const [mood, setMood] = useState("");

  const moods = ["😊 Happy", "😐 Okay", "😔 Sad", "😣 Stressed"];

  return (
    <div>
      <h2>How are you feeling today?</h2>

      {moods.map((m, index) => (
        <button key={index} onClick={() => setMood(m)}>
          {m}
        </button>
      ))}

      {mood && <p>You selected: <strong>{mood}</strong></p>}
    </div>
  );
}

export default MoodTracker;