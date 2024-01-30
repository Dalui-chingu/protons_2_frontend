import React, { useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import moment from 'moment';
import './Timeslot.css';

const Timeslot = ({onTimeslotSelect,timeData}) => {
  const intime = "12:00 AM";
  const outtime = "11:00 PM";
  const [selectedSlot, setSelectedSlot] = useState('');

  const intervals = (startString, endString) => {
    const start = moment(startString, 'hh:mm A');
    const end = moment(endString, 'hh:mm A');

    const current = moment(start);
    const slots = [];

    while (current <= end) {
      slots.push({
        start: current.format('hh:mm A'),
        end: current.add(1, 'hour').format('hh:mm A'),
      });
    }

    return slots;
  };

  const result = intervals(intime, outtime);

  const handleSelectSlot = (event) => {
    const selectedTimeslot = event.target.value;
    setSelectedSlot(selectedTimeslot);
    onTimeslotSelect(selectedTimeslot); // Notify the parent component about the selected timeslot
  };

  return (
    <div className='timeslot-container'>
      <FormControl fullWidth>
        
      <Select
  labelId="timeslot-label"
  value={selectedSlot}
  onChange={handleSelectSlot}
  className="timeslot-select"
  displayEmpty
  renderValue={(value) => value || <em className="timeslot-placeholder">Select a timeslot</em>}
>
          <MenuItem value="">
            <em>Select a timeslot</em>
          </MenuItem>
          {result.map((slot, index) => (
            <MenuItem key={index} value={`${slot.start} - ${slot.end}`}>
              {timeData.includes(`${slot.start} - ${slot.end}`)?<p style={{background:"#FFCCCB"}}>{slot.start} - {slot.end} ❌ Unavailabe</p>:<p style={{background:"#90EE90"}}>{slot.start} - {slot.end}</p>}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Timeslot;