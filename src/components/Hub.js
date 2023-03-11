import { CodeIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
require("dotenv").config();

const Hubspot = () => {
  const [contactsHtml, setContactsHtml] = useState("");

  const fetchContacts = async () => {
    try {
      const response = await fetch("/.netlify/functions/hubspot");
      const data = await response.json();

      // Render contact data as HTML
      const contacts = data.contacts.map((contact) => {
        return `
          <div>
            <strong>Name:</strong> ${contact.properties.firstname.value} ${contact.properties.lastname.value}<br />
            <strong>Email:</strong> ${contact.properties.email.value}<br />
            <strong>Phone:</strong> ${contact.properties.phone.value}<br />
          </div>
        `;
      });
      setContactsHtml(contacts.join(""));
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
      <iframe
        title="HubSpot Contacts"
        srcDoc={contactsHtml}
        className="mt-4 w-full h-96 border-2 border-gray-300"
      ></iframe>
    </div>
  );
};

export default Hubspot;
