import React from 'react';

export default function Footer() {
  let footerStyle = {
    backgroundColor: 'green',
    borderTop: '1px solid #E7E7E7',
    textAlign: 'center',
    padding: '20px',
    position: 'fixed',
    left: '0',
    bottom: '0',
    height: '60px',
    width: '100%'
  };
  return (
    <footer>
      <div style={footerStyle}>
        <ul style={{ listStyle: 'none' }}>
          <li>Footer</li>
        </ul>
      </div>
    </footer>
  );
}
