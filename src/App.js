import React, { useState } from "react";
import { RsvpService } from "./services/rsvp.service.js";
import { ConsoleLogger } from "./services/console.logger.js";
import { RsvpStatus } from "./types/rsvp.types.js";

const logger = new ConsoleLogger();
const rsvpService = new RsvpService(logger);

function App() {
  const [playerName, setPlayerName] = useState("");
  const [rsvpStatus, setRsvpStatus] = useState(RsvpStatus.YES);
  const [entries, setEntries] = useState(rsvpService.getAllEntries());

  const handleAddRsvp = () => {
    if (!playerName.trim()) return;

    const newPlayer = {
      id: Date.now().toString(),
      name: playerName.trim()
    };

    rsvpService.addOrUpdateRsvp(newPlayer, rsvpStatus);
    setEntries(rsvpService.getAllEntries());
    setPlayerName("");
  };

  const stats = rsvpService.countRsvpStatuses();

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h1 className="fw-bold">Team RSVP</h1>
        <p className="text-muted">Manage attendees and track responses efficiently</p>
      </div>

      <div className="row g-3 mb-4 justify-content-center">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Player name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={rsvpStatus}
            onChange={(e) => setRsvpStatus(e.target.value)}
          >
            <option value={RsvpStatus.YES}>Yes</option>
            <option value={RsvpStatus.NO}>No</option>
            <option value={RsvpStatus.MAYBE}>Maybe</option>
          </select>
        </div>

        <div className="col-md-2 d-grid">
          <button className="btn btn-primary" onClick={handleAddRsvp}>
            Add / Update
          </button>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">RSVP Stats</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Total: {stats.total}</li>
                <li className="list-group-item text-success">Confirmed: {stats.confirmed}</li>
                <li className="list-group-item text-danger">Declined: {stats.declined}</li>
                <li className="list-group-item text-warning">Maybe: {stats.maybe}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">RSVP List</h5>
              <ul className="list-group list-group-flush">
                {entries.length === 0 ? (
                  <li className="list-group-item text-muted">No RSVPs yet.</li>
                ) : (
                  entries.map((entry) => (
                    <li
                      key={entry.player.id}
                      className="list-group-item d-flex justify-content-between"
                    >
                      <span>{entry.player.name}</span>
                      <span
                        className={`badge ${
                          entry.status === RsvpStatus.YES
                            ? "bg-success"
                            : entry.status === RsvpStatus.NO
                            ? "bg-danger"
                            : "bg-warning text-dark"
                        }`}
                      >
                        {entry.status}
                      </span>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
