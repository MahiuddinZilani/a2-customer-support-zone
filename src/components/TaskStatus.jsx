import React from "react";
import { Clock, CheckCircle } from "lucide-react";

const TaskStatus = ({ inProgressTasks, resolvedTasks, onComplete }) => {
  return (
    <div className="space-y-8">
      {/* In-Progress Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-indigo-700 flex items-center gap-2">
          Task Status
        </h3>

        {inProgressTasks.length === 0 ? (
          <div className="bg-white/60 rounded-xl p-6 text-center text-gray-500 border border-dashed">
            Select tickets from the left to start working...
          </div>
        ) : (
          <div className="space-y-4">
            {inProgressTasks.map((task) => (
              <div
                key={task.id}
                className="bg-white p-5 rounded-xl shadow border border-gray-200 hover:border-indigo-300 transition"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold">
                      #{task.id} – {task.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {task.customer}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                    In Progress
                  </span>
                </div>

                <button
                  onClick={() => onComplete(task.id)}
                  className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg font-medium transition flex items-center justify-center gap-2"
                >
                  <CheckCircle size={18} /> Complete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Resolved Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          Resolved Task ({resolvedTasks.length})
        </h3>

        {resolvedTasks.length === 0 ? (
          <div className="bg-white/60 rounded-xl p-6 text-center text-gray-500 border border-dashed">
            No resolved tasks yet.
          </div>
        ) : (
          <div className="space-y-4">
            {resolvedTasks.map((task) => (
              <div
                key={task.id}
                className="bg-sky-50/60 p-5 rounded-xl border border-sky-200 opacity-90"
              >
                <h4 className="font-semibold text-sky-800">{task.title}</h4>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default TaskStatus;
