import React, { useState } from 'react';
import './TrainerForm.css'; // Import CSS for styling
import { generateTimeSlots } from '../../Api/utils/timeSlot';

const TrainerDetails = () => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [slots, setSlots] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const generatedSlots = generateTimeSlots(start, end);
    setSlots(generatedSlots);
    console.log(slots)

    // const response = await fetch('http://localhost:5000/trainers', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ start, end, slots: generatedSlots })
    // });

    // if (response.ok) {
    //   alert('Trainer time slots saved successfully');
    // } else {
    //   alert('Failed to save trainer time slots');
    // }


  };

  const hadleSlot =(slot) => {
    console.log(slot)
  }

  return (
    <div className="trainer-form">
      <h2>Create Trainer Time Slots</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Start Time:
          <input
            type="time"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            required
          />
        </label>
        <label>
          End Time:
          <input
            type="time"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            required
          />
        </label>
        <button type="submit">Generate and Post Time Slots</button>
      </form>
      {slots.length > 0 && (
        <div className="available-slots">
          <h3>Generated Slots:</h3>
          <div className="slots-grid">
            {slots.map((slot, index) => (
              <div key={index} className="slot" onClick={() => hadleSlot(slot)}>
                {slot}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainerDetails;
