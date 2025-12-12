import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ARScanner from "./components/ARScanner.jsx";
import UserProfile from "./components/UserProfile.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to Airblue SkyQuest!</h1>
        <p>Gamified AR experience & badges coming soon.</p>
        <ARScanner />
        <UserProfile />
      </main>
      <Footer />
    </div>
  );
}

export default App;
