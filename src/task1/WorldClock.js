import { useState } from 'react';
import { nanoid } from 'nanoid';
import ClockAddForm from './components/ClockAddForm';
import Clock from './components/Clock';

function WorldClock() {
  const [clocks, setClocks] = useState([]);

  const addClock = (name, timezone) => {
    setClocks((prev) => [...prev, { id: nanoid(), name, timezone }]);
  }

  const deleteClock = (id) => {
    const index = clocks.findIndex((item) => item.id === id);
    setClocks((prev) => {
      const arr = [...prev];
      arr.splice(index, 1);
      return arr;
    });
  }

  return (
    <div className="WorldClock">
      <ClockAddForm onFormSubmit={addClock}/>
      <div className="WorldClock-clocks">  
        {clocks.map(({ id, name, timezone }) =>
          <Clock name={name} timezone={timezone} onButtonClick={() => deleteClock(id)} key={id} />
        )}   
      </div>
    </div>
  );
}

export default WorldClock;