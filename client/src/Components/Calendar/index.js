import React from 'react';
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import myEventsList from "./events.js";
// import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
// import 'react-big-calendar/lib/addons/dragAndDrop/styles';
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// const DnDCalendar = withDragAndDrop(Calendar);
// onEventResize = (data) => {
//   const { start, end } = data;

//   this.setState((state) => {
//     state.events[0].start = start;
//     state.events[0].end = end;
//     return { events: state.events };
//   });
// };

// onEventDrop = (data) => {
//   console.log(data);
// };

const MyCalendar = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);

export default MyCalendar;