import React, { useEffect, useState } from "react";

function App() {
  const [location, setLocation] = useState("");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          )
            .then((response) => response.json())
            .then((data) => setLocation(data.city));
        },
        () => setLocation("Unavailable")
      );
    }
  }, []);

  return <div>Listening in {location || "Unknown Location"}</div>;
}
export default App;
