import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-400 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite sua tarefa..."
        className="border border-slate-300 outline-slate-400 p-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Descricao da tarefa..."
        className="border border-slate-300 outline-slate-400 p-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha todos os dados!");
          }

          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-600 p-2 text-white font-bold rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
