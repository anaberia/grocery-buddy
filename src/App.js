import React, { useState, useEffect } from "react";
import Alert from "./Alert";
import List from "./List";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>grocery buddy</h3>
        <div className="form-control">
          <input type="text" />
          <button type="submit" className="submit-btn"></button>
        </div>
      </form>
      <div className="grocery-container">
        <List />
        <button className="clear-btn">clear items</button>
      </div>
    </section>
  );
}

export default App;
