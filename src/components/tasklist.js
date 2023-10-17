import { useState } from "react";
import Task from "./task";
import Form from "./taskform";
import "../styles.css";

export default function Playlist() {
  const [songs, setSongs] = useState([]);

  function addSong(song) {
    const updatedSongs = [...songs, song];
    setSongs(updatedSongs);
  }

  function removeSong(track) {
    const updatedSongs = songs.filter(function (song) {
      return song.id !== track.id;
    });
    setSongs(updatedSongs);
  }

  function togglePlayed(track) {
    const updatedSongs = songs.map(function (song) {
      if (song.id === track.id) {
        song.played = !song.played;

        //strikethrough if the song has played
        if (song.played === true) {
          songs.title = <del>{song.title}</del>;
        } else {
        }
        return song;
      } else {
        return song;
      }
    });
    setSongs(updatedSongs);
  }
  return (
    <div>
      <ul>
        {songs.map((song) => (
          <Task
            key={song.id}
            song={song}
            remove={removeSong}
            togglePlayed={togglePlayed}
          />
        ))}
      </ul>
      <Form addSong={addSong} />
    </div>
  );
}
