import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [notedes, setNoteDes] = useState("");

  function titleValue(event) {
    const newValue = event.target.value;
    setTitle(newValue);
    console.log(title);
  }

  function noteValue(event) {
    const newValue = event.target.value;
    setNoteDes(newValue);
    console.log(notedes);
  }

  return (
    <div>
      <form>
        <input
          onChange={titleValue}
          name="title"
          placeholder="Title"
          value={title}
        />
        <textarea
          onChange={noteValue}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={notedes}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
