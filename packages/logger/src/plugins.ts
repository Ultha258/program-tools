import { IncomingMessage, ServerResponse } from "http";
import winston from "winston";
import { LogLevel } from "./config";
import { LOG_TYPE_MARKER } from "./logger";

export type HttpLogMiddlewareOptions = {
  nonErrorLogLevel?: LogLevel;
};

/**
 * A simple Express.js middleware which logs the URL, method, response code,
 * and response time of all HTTP requests.
 *
 * @param {winston.Logger} logger - The logger to use
 */
export function httpLogMiddleware(
  logger: winston.Logger,
  opts?: HttpLogMiddlewareOptions,
) {
  return (
    req: IncomingMessage,
    res: ServerResponse & { locals?: Record<string, any> },
    next: () => void,
  ) => {
    const startTimeNs = process.hrtime.bigint();

    res.on("finish", () => {
      const endTimeNs = process.hrtime.bigint();
      const time = (endTimeNs - startTimeNs) / BigInt(1000);
      const { method, url } = req;
      const status = res.statusCode;
      const requestId = res.locals?.requestId;

      const level =
        res.statusCode >= 500
          ? "error"
          : res.statusCode >= 400
          ? "warn"
          : ["/healthz", "/livez", "/readyz"].includes(req.url ?? "")
          ? "debug"
          : opts?.nonErrorLogLevel ?? "info";

      const message = { method, status, time, url, requestId };

      logger.log(level, {
        [LOG_TYPE_MARKER]: "HTTP",
        message,
      });
    });

    next();
  };
}
