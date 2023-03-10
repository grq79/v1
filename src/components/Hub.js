import { CodeIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
require("dotenv").config();

const Hubspot = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const apiKey = process.env.REACT_APP_HUBSPOT_API_KEY;
      const url = `https://api.hubapi.com/contacts/v1/lists/all/contacts/all`;

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      const data = await response.json();

      setContacts(data.contacts);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container px-5 py-10 mx-auto text-center lg:px-40">
      <div className="flex flex-col w-full mb-20">
        <CodeIcon className="mx-auto inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          HubSpot Contacts
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Here is a simple integration with the HubSpot API that fetches contact data.
        </p>
      </div>
      <button onClick={fetchContacts} className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
        Fetch Contacts
      </button>
      <ul>
        {contacts.map(contact => (
          <li key={contact.vid}>{contact.properties.firstname.value} {contact.properties.lastname.value} ({contact.properties.email.value})</li>
        ))}
      </ul>
    </div>
  );
};

export default Hubspot;
