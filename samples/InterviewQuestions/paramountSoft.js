import React from "react";

import "./style.css";

export default function App() {
  const [time, setTime] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
}
