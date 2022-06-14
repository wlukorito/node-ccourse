import EventEmitter from "events";
import { nanoid } from "nanoid";

class Logger extends EventEmitter {
  log(msg) {
    // Raise event
    this.emit("message", { id: nanoid(), msg });
  }
}

// export default Logger;

const logger = new Logger();

logger.on("message", (data) => console.log("Called Listener: ", data));

logger.log("Hello");
logger.log("world");
