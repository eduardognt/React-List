function AddTask() {
  return (
    <div className="space-y-4 p-6 bg-slate-400 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite sua tarefa..."
        className="border border-slate-300 outline-slate-400 p-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Descricao da tarefa..."
        className="border border-slate-300 outline-slate-400 p-2 rounded-md"
      />
      <button className="bg-slate-600 p-2 text-white font-bold rounded-md">
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
