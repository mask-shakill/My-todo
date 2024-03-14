import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllTasks from "./components/All-Tasks/AllTasks";
import CreateTask from "./components/Create-Single-Task/CreateTask";
import EditTask from "./components/Edit-Single-Task/EditTask";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <main className="mx-10 lg:mx-28 ">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<AllTasks />}></Route>
          <Route path="/task-create" element={<CreateTask />}></Route>
          <Route path="/edit-task" element={<EditTask />}></Route>
          <Route path="/edit-task/:taskID" element={<EditTask />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </main>
  );
};

export default App;
