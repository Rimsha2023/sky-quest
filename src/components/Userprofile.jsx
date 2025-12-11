import React from "react";
import BadgeCard from "./BadgeCard.jsx";

function UserProfile() {
  return (
    <section id="profile">
      <h3>User Profile</h3>
      <p>Badges & points earned will appear here.</p>
      <div>
        <BadgeCard name="Welcome Badge" />
        <BadgeCard name="First Flight Badge" />
      </div>
    </section>
  );
}

export default UserProfile;
