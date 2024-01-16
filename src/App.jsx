import "./App.css";
import React from "react";
import { Clock } from "./Clock";

export default function App() {
  return (
    <div>
      <h1>World Clock App</h1>
      <Clock city="New York" timeZone="America/New_York" />
      <Clock city="Stockholm" timeZone="Europe/Stockholm" />
      <Clock city="Islamabad" timeZone="Asia/Karachi" />
    </div>
  );
}
