// SupportIcon.js

import React, { useState } from 'react';

function SupportIcon() {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const openContact=()=>{
    console.log("")
  }
  const openWhatsApp=()=>{
    console.log("")
  }
const openEmail=()=>{
    console.log("")
}
  return (
    <div className="support-icon-container" style={{ display:"flex"}}>
      <div
        className="support-main-icon"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span role="img" aria-label="Support" style={{ fontSize: '30px',backgroundColor:"green",borderRadius:"16px" }}>
        🤝
        </span>
      </div>
      <div>
      {isHovered && (
        <div className="support-icons" >
          <div className="support-icon" onClick={openWhatsApp}>
            <span role="img" aria-label="WhatsApp">
              📱
            </span>
          </div>
          <div className="support-icon" onClick={openEmail}>
            <span role="img" aria-label="Email">
              ✉️
            </span>
          </div>
          <div className="support-icon" onClick={openContact}>
            <span role="img" aria-label="Contact">
              📞
            </span>
          </div>
        </div>
      )}

      </div>

      
    </div>
  );
}

export default SupportIcon;
