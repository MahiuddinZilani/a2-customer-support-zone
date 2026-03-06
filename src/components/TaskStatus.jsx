import React from "react";

const TaskStatus = ({ tasks, onComplete }) => {
  if (tasks.length === 0) {
    return (
      <div className="bg-white rounded-xl p-6 shadow text-center text-gray-500">
        No resolved tasks yet.
        <br />
        Select tickets from the left to start working.
      </div>
    );
  }
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white p-5 rounded-xl shadow border border-gray-200"
        >
          <h4 className="font-semibold mb-2">
            #{task.id} - {task.title}
          </h4>
          <p className="text-sm text-gray-600 mb-4">{task.customer}</p>

          <button
            onClick={() => onComplete(task.id)}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg font-medium transition"
          >
            Complete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskStatus;
