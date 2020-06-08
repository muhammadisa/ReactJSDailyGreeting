import React from 'react';
import logo from './logo.svg';
import './App.css';

function between(x, min, max) {
  return x >= min && x <= max
}

function determineCaption(condition) {
  const nightCaption = [
    "Jangan lupa baca doa tidurnya",
    "Mimpi indah yah yulia",
  ]

  const morningCaption = [
    "Jangan lupa bersyukur dan jangan lupa sarapan :D",
    "E-Learning lho jangan lupa, jangan lupa sarapan ocew",
    "Semangat untuk hari ini, jangan lupa sarapan ya",
  ]

  const afternoonCaption = [
    "Kalau pulang ngampus hati hati ya",
    "Selalu hati hati di jalan yahh",
    "Selalu berdoa saat jalan balik ocew"
  ]

  const noonCaption = [
    "Pastinya masih semangat dong :D",
    "Semangat ya, eh ya jangan lupa makan, udah siang nih",
  ]

  switch (condition) {
    case "NIGHT":
      var item = nightCaption[Math.floor(Math.random() * nightCaption.length)];
      return item
    case "MORNING":
      var item = morningCaption[Math.floor(Math.random() * morningCaption.length)];
      return item
    case "NOON":
      var item = noonCaption[Math.floor(Math.random() * noonCaption.length)];
      return item
    case "AFTERNOON":
      var item = afternoonCaption[Math.floor(Math.random() * afternoonCaption.length)];
      return item
    default:
      return ":)"
  }
}

function determineBackgroundColor(condition) {
  switch (condition) {
    case "NIGHT":
      return ["#34495e", "#ffffff"]
    case "MORNING":
      return ["#ecf0f1", "#000000"]
    case "NOON":
      return ["#ecf0f1", "#000000"]
    case "AFTERNOON":
      return ["#ecf0f1", "#000000"]
    default:
      return ["#ecf0f1", "#000000"]
  }
}

function determineGreeting() {
  var today = new Date()
  var curHr = today.getHours()
  var curMt = today.getHours()

  if (between(curHr, 0, 1)) {
    return "NIGHT,Selamat Pagi :)" // Night
  } else if (between(curHr, 1, 2)) {
    return "NIGHT,Selamat Malam :)" // Night
  } else if (between(curHr, 2, 3)) {
    return "NIGHT,Selamat Malam :)" // Night
  } else if (between(curHr, 3, 4)) {
    return "NIGHT,Selamat Malam :)" // Night
  } else if (between(curHr, 4, 5)) {
    return "MORNING,Selamat Pagi :)" // Morning
  } else if (between(curHr, 5, 6)) {
    return "MORNING,Selamat Pagi :)" // Morning
  } else if (between(curHr, 6, 7)) {
    return "MORNING,Selamat Pagi :)" // Morning
  } else if (between(curHr, 7, 8)) {
    return "MORNING,Selamat Pagi :)" // Morning
  } else if (between(curHr, 8, 9)) {
    return "MORNING,Selamat Pagi :)" // Morning
  } else if (between(curHr, 9, 10)) {
    return "MORNING,Selamat Pagi :)" // Morning
  } else if (between(curHr, 10, 11)) {
    return "NOON,Selamat Siang :)" // Noon
  } else if (between(curHr, 11, 12)) {
    return "NOON,Selamat Siang :)" // Noon
  } else if (between(curHr, 12, 13)) {
    return "NOON,Selamat Siang :)" // Noon
  } else if (between(curHr, 13, 14)) {
    return "NOON,Selamat Siang :)" // Noon
  } else if (between(curHr, 14, 15)) {
    return "NOON,Selamat Siang :)" // Noon
  } else if (between(curHr, 15, 16)) {
    return "AFTERNOON,Selamat Sore :)" // Afternoon
  } else if (between(curHr, 16, 17)) {
    return "AFTERNOON,Selamat Sore :)" // Afternoon
  } else if (between(curHr, 17, 18)) {
    return "AFTERNOON,Selamat Sore :)" // Afternoon
  } else if (between(curHr, 18, 19)) {
    return "NIGHT,Selamat Malam :)" // Night
  } else if (between(curHr, 19, 20)) {
    return "NIGHT,Selamat Malam :)" // Night
  } else if (between(curHr, 20, 21)) {
    return "NIGHT,Selamat Malam :)" // Night
  } else if (between(curHr, 21, 22)) {
    return "NIGHT,Selamat Malam :)" // Night
  } else if (between(curHr, 22, 23)) {
    return "NIGHT,Selamat Malam :)" // Night
  } else if (between(curHr, 23, 24)) {
    return "NIGHT,Selamat Malam :)" // Night
  }
}

let color = determineBackgroundColor(determineGreeting().split(",")[0])

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{
        color: color[1],
        backgroundColor: color[0]
      }}>
        <p style={{
          fontSize: "64px"
        }}>
          {determineGreeting().split(",")[1]}
        </p>
        <h6>
          {determineCaption(determineGreeting().split(",")[0])}
        </h6>
      </header>
    </div>
  );
}

export default App;
