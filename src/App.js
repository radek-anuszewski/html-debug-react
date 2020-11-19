import React, { useState } from "react";

function App() {
  const [visible, setVisible] = useState(true);
  const [visibleInside, setVisibleInside] = useState(true);
  const [className, setClassName] = useState('class');

  const removeElement = () => setVisible(false);
  const removeElementInside = () => setVisibleInside(false);
  const addRandomClass = () => setClassName(className => `${className} class-${new Date().getTime()}`);
  return (
    <div>
      <div>
        <button onClick={removeElement}>Remove element</button>
        <button onClick={removeElementInside}>Remove element inside</button>
        <button onClick={addRandomClass}>Add random class</button>
      </div>
      {visible && (
        <div className={className}>
          <p>
            Child
          </p>
          {visibleInside && (
            <p>
              Removable
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
