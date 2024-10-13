import React, { useEffect, useState } from 'react';

const cities = [
  { name: 'NY', timezone: 'America/New_York', icon: '🗽' },
  { name: 'LDN', timezone: 'Europe/London', icon: '🇬🇧' },
  { name: 'TKYO', timezone: 'Asia/Tokyo', icon: '🗼' },
  { name: 'PAR', timezone: 'Europe/Paris', icon: '🇫🇷' }, // Updated from Sydney to Paris
];

const WorldClock = () => {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const updateTime = () => {
      const newTimes = cities.map(city => {
        const date = new Date().toLocaleTimeString('en-US', { timeZone: city.timezone });
        return {
          name: city.name,
          time: date,
          icon: city.icon,
        };
      });
      setTimes(newTimes);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="world-clock">
      {times.map((timeInfo, index) => (
        <div className="clock" key={index}>
          <div className="icon">{timeInfo.icon}</div>
          <h3>{timeInfo.name}</h3>
          <div className='ExactTime'>{timeInfo.time}</div>
        </div>
      ))}
    </div>
  );
};

export default WorldClock;
