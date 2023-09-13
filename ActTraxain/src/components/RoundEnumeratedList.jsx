import React from 'react';

const RoundEnumeratedList = ({ items }) => {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {items.map((item, index) => (
        <li key={index} style={{ marginBottom: '10px' }}>
          <span
            style={{
              display: 'inline-block',
              width: '1em',
              textAlign: 'right',
              marginRight: '5px',
              fontSize: '18px',
              color: '#ff0000', // Customize the color
            }}
          >
            &bull; {/* Use the HTML entity for a bullet (•) */}
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default RoundEnumeratedList;