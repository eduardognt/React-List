import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programacao",
      description: "Desenvolver projetos em React e depois aprender Typescript",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Ler um livro",
      description: "Desenvolver o habito de ler todas as noites",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Correr",
      description: "Correr uns kmzin na city",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskID) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskID) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onClickRemoveTask(taskID) {
    const newTasks = tasks.filter((task) => task.id !== taskID);
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-800 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTask />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onClickRemoveTask={onClickRemoveTask}
        />
      </div>
    </div>
  );
}

export default App;
