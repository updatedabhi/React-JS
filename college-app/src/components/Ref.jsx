import React, { useRef, useState } from 'react';

function Ref() {
  const [showText, setShowText] = useState(false);
  const buttonRef = useRef(null);
  const [condition, setCondition] = useState(true);
  const handleDiv = () => {
    setShowText(true);
    setCondition(false)
  };

  return (
    <div>
      <button onClick={handleDiv} ref={buttonRef}>
        {condition?'show text': buttonRef.current.innerHTML = 'Welcome'}
      </button>
      {showText && <div>Hello</div>}
    </div>
  );
}

export default Ref;
