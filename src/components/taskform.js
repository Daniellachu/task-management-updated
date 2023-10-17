import { useState } from "react";
import { nanoid } from "nanoid";
import "../styles.css";

export default function Form(props) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
    console.log(title);
  }

  function handleSubmit(e) {
    //add song to playlist
    e.preventDefault();
    const newSong = {
      title: title,
      artist: artist,
      played: false,
      id: nanoid()
    };
    props.addSong(newSong);
    //resetting input to blank
    setTitle("");
    setArtist("");
  }
  return (
    <div className="edit">
      <h3>Add a task</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Task:
          <input type="text" onChange={handleTitleChange} value={title} />
        </label>
        <button className="addButton" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
