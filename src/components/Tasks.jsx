import { Ellipsis, Trash2Icon } from "lucide-react";

function Tasks({ tasks, onTaskClick, onClickRemoveTask }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-400 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-500 w-full text-left text-white p-2 rounded-md ${task.isCompleted && "line-through bg-slate-800"} `}
          >
            {task.title}
          </button>
          <button className="bg-slate-500 p-2 text-white rounded-md">
            <Ellipsis />
          </button>
          <button
            onClick={() => onClickRemoveTask(task.id)}
            className="bg-slate-500 p-2 text-white rounded-md"
          >
            <Trash2Icon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
