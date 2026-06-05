import { useRef } from "react";
import { CalendarIcon } from "../icons/CalendarIcon";
import { useFlatpickr } from "../../hooks/useFlatpickr";

export const DateRangePicker = ({ onDateChange }) => {
  const dateFromRef = useRef(null);
  const dateToRef = useRef(null);

  useFlatpickr(dateFromRef, dateToRef, onDateChange);

  return (
    <div className="profile-controls">
      <span className="control-label">Date</span>
      <div className="inputs-row">
        <div className="date-input-wrap" ref={dateFromRef}>
          <input
            type="text"
            data-input
            placeholder="from"
            className="date-input"
          />
          <button
            className="date-clear-btn"
            data-clear
            aria-label="Clear from date"
          >
            ×
          </button>
          <button
            className="date-cal-btn"
            data-toggle
            aria-label="Open calendar"
          >
            <CalendarIcon />
          </button>
        </div>
        <div className="date-input-wrap" ref={dateToRef}>
          <input
            type="text"
            data-input
            placeholder="to"
            className="date-input"
          />
          <button
            className="date-clear-btn"
            data-clear
            aria-label="Clear to date"
          >
            ×
          </button>
          <button
            className="date-cal-btn"
            data-toggle
            aria-label="Open calendar"
          >
            <CalendarIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
