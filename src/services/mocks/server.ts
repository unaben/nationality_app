// src/mocks/server.js
import { setupServer } from "msw/node";
import { handlers } from "./handlers";
// import { getCurrencyHandlers } from "./getCurrencyHandlers";

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers);