import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import { initialTickets } from "./data/tickets";
import { toast } from "react-toastify";
import TicketCard from "./components/TicketCard";

function App() {
  const [tickets, setTickets] = useState(initialTickets);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedCount, setResolvedCount] = useState(0);

  const inProgressCount = inProgressTasks.length;

  const handleSelectTicket = (ticket) => {
    if (inProgressTasks.some((t) => t.id === ticket.id)) {
      toast.info("This ticket is already in progress!");
      return;
    }

    setInProgressTasks((prev) => [...prev, ticket]);
    toast.success(`Ticket #${ticket.id} added to In-Progress`);
  };

  // console.log(tickets);

  return (
    <>
      <Navbar></Navbar>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Banner
          inProgressCount={inProgressCount}
          resolvedCount={resolvedCount}
        ></Banner>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Customer Tickets */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Customer Tickets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tickets.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  onSelect={handleSelectTicket}
                ></TicketCard>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
