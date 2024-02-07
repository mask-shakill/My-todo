import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const AllTasks = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const retrieveDataFromLocalStorage = () => {
    const storedData = localStorage.getItem("taskData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);

      const sortedTasks = parsedData.sort((a, b) => {
        const priorityOrder = { High: 3, Medium: 2, Low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      });

      setTasks(sortedTasks);
      console.log(sortedTasks);
    }
  };

  useEffect(() => {
    retrieveDataFromLocalStorage();
    console.log(tasks);
  }, []);

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    localStorage.setItem("taskData", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  const handleEdit = (task) => {
    navigate(`/edit-task/${task.id}`, { state: { task } });
  };

  const handleUpdateStatus = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: "Complete" } : task
    );
    localStorage.setItem("taskData", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  const Priority = {
    High: "bg-[#186F65]",
    Low: "bg-[#5D3587]",
    Medium: "bg-[#232D3F]",
  };
  return (
    <div className="mt-5 lg:mt-10">
      <h1 className="text-3xl font-semibold text-blue-900 mb-2">All Tasks</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-4  sm:grid-cols-2 lg:gird-cols-4">
        {tasks?.map((task) => (
          <div
            key={task.id}
            className={`text-white ${
              Priority[task.priority]
            } p-4 rounded-lg relative h-48 shadow-lg shadow-slate-700`}
          >
            <p className="bg-gray-300 s  text-black w-[35%] text-center absolute top-0 border border-black right-0 ">
              {task?.status}
            </p>
            <p className="rounded shadow-lg  border border-white text-white w-[30%] text-center absolute top-0 left-0 ">
              {task?.priority}
            </p>
            <div className="flex flex-col gap-y-1 mt-7">
              <p className="font-bold">{task?.title}</p>

              <p>{task?.description}</p>
              <p>Deadline:{task?.deadline}</p>
            </div>
            <div className="flex items-center gap-x-2 absolute bottom-3 right-3">
              {task.status === "Incomplete" && (
                <button
                  onClick={() => handleUpdateStatus(task.id)}
                  className="bg-blue-700 px-3 py-1 rounded-2xl"
                >
                  Complete
                </button>
              )}
              <button
                onClick={() => handleDelete(task.id)}
                className="bg-red-700 px-3 py-1 rounded-2xl"
              >
                Delete
              </button>
              {task.status === "Incomplete" && (
                <button
                  onClick={() => handleEdit(task)}
                  className="bg-yellow-700 px-3 py-1 rounded-2xl"
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
