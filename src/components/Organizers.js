import React from "react";

const organizers = [
  { name: "Vakeel Raghuvamshi", role: "Coordinator", phonenumber: "+91 9876543210"},
  { name: "Sanskar Gupta", role: "Finance", phonenumber: "+91 9876543210" },
  { name: "Ganeesan", role: "Sports", phonenumber: "+91 9876543210"} ,
  { name: "Divya Bharathi", role: "Cultural", phonenumber: "+91 9876543210"},
];

const Organizers = () => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Event Organizers</h2>
      <ul className="text-center">
        {organizers.map((org, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow-md inline-block m-2">
            <span className="font-bold">{org.role}</span> 
            <br></br>
            {org.name}
            <br></br>  
            {org.phonenumber}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Organizers;
