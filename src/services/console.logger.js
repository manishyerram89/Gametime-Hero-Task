import { Logger } from "./logger.interface.js";

export class ConsoleLogger extends Logger {
  log(message) {
    console.log(`[LOG]: ${message}`);
  }
}
