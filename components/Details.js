import React from "react";

export default function Details({ details }) {
  return (
    <div>
      <h1>Details</h1>
      <h2>{details.name}</h2>
      <p>{details.username}</p>
      <p>{details.email}</p>
      <p>{details.address.street}</p>
      <p>{details.address.suite}</p>
      <p>{details.address.city}</p>
      <p>{details.address.state}</p>
      <p>{details.address.zipcode}</p>
      <p>{details.phone}</p>
      <p>{details.website}</p>
    </div>
  );
}
