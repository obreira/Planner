import React from "react";

export const ContactPicker = (
  { contacts, setContact }
) => {

  const handleChange = (e) => {
    setContact(e.target.value);
  };


  return (
    <>
      <select onChange={handleChange}>
        <option value="">No Contact Selected</option>
        {contacts.map((contact) => {
          return (
            <option key={contact.name} value={contact.name}>
              {contact.name}
            </option>
          );
        })}
      </select>
    </>
  );
};
