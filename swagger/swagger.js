const swaggerJsdoc = require("swagger-jsdoc");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Ticket Booking API",
      version: "1.0.0",
      description: "CRUD API for ticket booking system",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development Server",
      },
    ],
  },
  apis: [path.join(__dirname, "../routes/*.js"), "./routes/*.js"],
};

module.exports = swaggerJsdoc(options);
