import React, { useState } from 'react';

const SalesProgress = () => {
  const [callsMade, setCallsMade] = useState(30);
  const [interested, setInterested] = useState(3);
  const [notInterested, setNotInterested] = useState(5);
  const [escalated, setEscalated] = useState(7);

  return (
    <div>
      <h1>Sales Progress</h1>
      <div className="sales-data">
        <div>Calls Made: {callsMade}</div>
        <div>Interested: {interested}</div>
        <div>Not Interested: {notInterested}</div>
        <div>Escalated: {escalated}</div>
      </div>
    </div>
  );
}

export default SalesProgress;
