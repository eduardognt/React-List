import { CheckSquare, CheckSquare2, Ellipsis, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onClickRemoveTask }) {
  const navigate = useNavigate();

  function onSeeDetailClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-400 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-500 w-full text-left text-white flex items-center gap-2 p-2 rounded-md ${task.isCompleted && "line-through bg-emerald-600"} `}
          >
            {task.isCompleted && <CheckSquare2 />}
            {task.title}
          </button>
          <button
            onClick={() => onSeeDetailClick(task)}
            className="bg-slate-500 p-2 text-white rounded-md"
          >
            <Ellipsis />
          </button>
          <button
            onClick={() => onClickRemoveTask(task.id)}
            className="bg-red-600 p-2 text-white rounded-md"
          >
            <Trash2Icon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
