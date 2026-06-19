import { MoveLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-slate-800 p-6 flex justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 bottom-0 text-yellow-400"
          >
            <MoveLeft />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da tarefa
          </h1>
        </div>
        <div className="bg-slate-300 rounded-md text-center p-6">
          <h2 className="text-xl font-bold text-slate-800">{title}</h2>
          <p className="text-slate-700">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
