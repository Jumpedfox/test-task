import { useEffect } from "react";
import flatpickr from "flatpickr";

export const useFlatpickr = (dateFromRef, dateToRef, onDateChange) => {
  useEffect(() => {
    const options = {
      dateFormat: "d.m.Y",
      allowInput: false,
      wrap: true,
      minDate: "01.06.2025",
      maxDate: "today",
      disableMobile: true,
    };

    const fpFrom = flatpickr(dateFromRef.current, options);
    fpFrom.config.onChange.push((selectedDates) => {
      onDateChange(selectedDates, "from");
      fpTo.set("minDate", selectedDates[0] || "01.06.2025");
    });

    const fpTo = flatpickr(dateToRef.current, options);
    fpTo.config.onChange.push((selectedDates) => {
      onDateChange(selectedDates, "to");
      fpFrom.set("maxDate", selectedDates[0] || "today");
    });

    return () => {
      fpFrom.destroy();
      fpTo.destroy();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};
