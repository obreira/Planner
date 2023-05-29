import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";



export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  useEffect(() => {
    const nameIsDuplicate = () => {
      const found = contacts.find((contact) => contact.name === name);
      if (found) {
        return true;
      } else {
        return false;
      }
    };
    if (nameIsDuplicate()) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [name, contacts]);


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicate) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }

  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */



  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          duplicate={duplicate}
        />

      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} />

      </section>
    </div>
  );
};

