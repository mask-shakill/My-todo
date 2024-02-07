import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const EditTask = () => {
  const location = useLocation();
  const task = location.state.task;
  const taskId = location.state.task.id;
  const [tasks, setTasks] = useState([]);

  const retrieveDataFromLocalStorage = () => {
    const storedData = localStorage.getItem("taskData");
    if (storedData) {
      setTasks(JSON.parse(storedData));
      console.log(storedData);
    }
  };

  useEffect(() => {
    retrieveDataFromLocalStorage();
    console.log(tasks);
  }, []);

  const [formData, setFormData] = useState({
    id: task?.id,
    title: task?.title,
    description: task?.description,
    priority: task?.priority,
    status: task?.status,
    deadline: task?.deadline,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, ...formData } : task
    );

    localStorage.setItem("taskData", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
    navigate("/");
  };

  return (
    <div className="mt-10">
      <Link
        to={"/"}
        className="text-2xl bg-slate-600 px-5 py-1 rounded text-white"
      >
        Back
      </Link>
      <section className="flex flex-col  items-center md:flex-col md:items-center">
        <h1 className="text-3xl font-semibold mt-10 mb-3">Update task</h1>
        <form className="flex flex-col gap-y-3 bg-gray-300 w-[100%] md:w-[60%] items-center py-10 rounded-lg">
          <input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-1/2 h-14 rounded-md p-2 text-lg"
            placeholder="Enter Title"
            type="text"
          />
          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-1/2 h-14 rounded-md p-2 text-lg"
            placeholder="Enter description"
            type="text"
          />
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-1/2 h-14 rounded-md p-2"
          >
            <option value="" disabled defaultValue>
              Select Priority
            </option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <input
            className="w-1/2 h-14 p-2"
            type="date"
            name="deadline"
            onChange={handleChange}
            value={formData.deadline}
            id=""
          />
          <button
            onClick={handleSubmit}
            className="w-1/2 h-14 rounded-md bg-blue-500 hover:bg-blue-700 text-white font-semibold"
          >
            Update
          </button>
        </form>
      </section>
    </div>
  );
};

export default EditTask;
