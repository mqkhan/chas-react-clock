import React, { useState, useEffect } from "react";

export function Clock({ city, timeZone }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  const t = time.toLocaleTimeString("en-US", { timeZone });

  return (
    <div>
      <h2> {city} Time: </h2>
      <p>{t}</p>
    </div>
  );
}
