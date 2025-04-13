import { RsvpStatus } from "../types/rsvp.types.js";

export class RsvpService {
  constructor(logger) {
    this.logger = logger;
    this.rsvpMap = new Map();
  }

  addOrUpdateRsvp(player, status) {
    this.rsvpMap.set(player.id, { player, status });
    this.logger.log(`RSVP updated for ${player.name} to '${status}'`);
  }

  getConfirmedAttendees() {
    return Array.from(this.rsvpMap.values())
      .filter(entry => entry.status === RsvpStatus.YES)
      .map(entry => entry.player);
  }

  getAllEntries() {
    return Array.from(this.rsvpMap.values());
  }

  countRsvpStatuses() {
    let confirmed = 0, declined = 0, maybe = 0;

    for (const entry of this.rsvpMap.values()) {
      if (entry.status === RsvpStatus.YES) confirmed++;
      else if (entry.status === RsvpStatus.NO) declined++;
      else if (entry.status === RsvpStatus.MAYBE) maybe++;
    }

    return {
      total: this.rsvpMap.size,
      confirmed,
      declined,
      maybe
    };
  }
}
