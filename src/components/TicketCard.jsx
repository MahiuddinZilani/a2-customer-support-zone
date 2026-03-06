import React from "react";

const TicketCard = ({ ticket, onSelect }) => {
  const priorityColor =
    {
      HIGH: "bg-red-100 text-red-800 border-red-300",
      MEDIUM: "bg-yellow-100 text-yellow-800 border-yellow-300",
      LOW: "bg-green-100 text-green-800 border-green-300",
    }[ticket.priority] || "bg-gray-100";

  const statusColor =
    {
      Open: "bg-green-100 text-green-700",
      "In-Progress": "bg-blue-100 text-blue-700",
    }[ticket.status] || "bg-gray-100";

  return (
    <div
      className={`p-5 rounded-xl border shadow-sm hover:shadow-md transition cursor-pointer ${priorityColor}`}
      onClick={() => onSelect(ticket)}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-lg">{ticket.title}</h3>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}
        >
          {ticket.status}
        </span>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {ticket.description}
      </p>

      <div className="flex justify-between text-sm">
        <div>
          <span className="font-medium">#{ticket.id}</span>
          <span className="ml-3 text-gray-500">{ticket.customer}</span>
        </div>
        <span className="text-gray-500">{ticket.createdAt}</span>
      </div>
    </div>
  );
};

export default TicketCard;
