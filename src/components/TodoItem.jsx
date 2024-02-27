import { FaRegTrashAlt } from "react-icons/fa";

export default function TodoItem({ onDelete, onUpdate, item }) {
  const { id, text, completed } = item;
  const handleDelete = () => onDelete(item);
  const handleUpdate = (prev) => { 
    const completed = prev.target.checked ? true : false;
    onUpdate({ ...item, completed});
  }
  return (
    <div className="item">
      <input
        type="checkbox"
        id={id}
        checked={completed === true}
        onChange={handleUpdate}
      />
      <label htmlFor={id}>{text}</label>
      <button className="btn-del" onClick={handleDelete}>
        <FaRegTrashAlt />
      </button>
    </div>
  );
}