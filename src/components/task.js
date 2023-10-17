import edit from "../icons/edit.png";
import deleteIcon from "../icons/delete.png";
import "../styles.css";

export default function Task(props) {
  const song = props.song;

  function handleDelete(e) {
    props.remove(song);
  }

  function handleStatusChange() {
    props.togglePlayed(song);
  }

  return (
    <li className="song">
      <div className="song-details">
        <img src={edit} alt="" />
      </div>
      <p>
        <span>
          {song.played === true ? <del>{song.title}</del> : song.title}
          <input
            type="checkbox"
            onChange={handleStatusChange}
            value={song.played}
          />
        </span>
        <span>{song.artist}</span>
      </p>
      <div onClick={handleDelete}>
        <img src={deleteIcon} alt="delete" />
      </div>
    </li>
  );
}
