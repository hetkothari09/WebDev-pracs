import React, { useState } from 'react';
import './TooltipButton.css';

const TooltipButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="tooltip-container">
      <button
        className="tooltip-button"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        Hover over me
      </button>
      {showTooltip && <div className="tooltip">This is a tooltip</div>}
    </div>
  );
};

export default TooltipButton;
