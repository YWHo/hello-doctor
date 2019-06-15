import React from 'react';

export default function HomePage(props) {
  const { schedules = [] } = props
  const nameList = Array.from(schedules).map((item, idx) => {
    return (
      <div key={idx}>
        <div>Name: {item.Name}</div>
        <div>Title: {item.Title}</div>
        <br />
      </div>
    );
  });

  return (
    <div>
      { nameList }
    </div>
  ) 
}