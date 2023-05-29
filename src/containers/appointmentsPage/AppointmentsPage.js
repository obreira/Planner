import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({contacts, setContacts}) => {

  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [appointments, setAppointments] = useState([]);

 

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(title, contact, date, time);
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

  const addAppointment = (title, contact, date, time) => {
    setAppointments([
      ...appointments,
      {
        title,
        contact,
        date,
        time,
      },
    ]);
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={appointments} />
      </section>
    </div>
  );
};
