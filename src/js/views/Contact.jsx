// Importar Context
import React, { useContext } from "react";  // 1. Importar el Hook
import { ContactCard } from "../component/ContactCard.jsx";
import { Context } from "../store/appContext.js";  // 2. Contect

export const Contact = () => {
  const { store, actions } = useContext(Context);  // 3. desecturar store, actions del Context
  store.addNewContact= true;

  return (
    <div className="container">
      <h1 className="text-primary">{}</h1>
      {store.users.map((user) => 
        <ContactCard key={user.id} name={user.full_name} email={user.email} phone={user.phone} address={user.address} id={user.id}/>)}
    </div>
  )
};