require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger/swagger");
const routes = require("./routes");
const sequelize = require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

if (routes && typeof routes === "object") {
  Object.keys(routes).forEach((key) => {
    app.use("/api", routes[key]);
  });
}

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <div style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
      <a href="/api-docs" style="font-size: 18px; color: #007bff; text-decoration: none; font-weight: bold;">
        👉 http://localhost:${PORT}/api-docs
      </a>
    </div>
  `);
});

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL bazasiga muvaffaqiyatli ulandi! ");
    await sequelize.sync();
    console.log("Barcha jadvallar bazaga sinxronlashtirildi. ");
  } catch (error) {
    console.error("❌ Baza bilan bog'lanishda xatolik:", error.message);
    console.error("Iltimos, .env faylidagi DB_PASSWORD, DB_NAME va DB_USER sozlamalarini tekshiring.");
  }

  app.listen(PORT, () => {
    console.log(`Swagger docs: http://localhost:${PORT}/api-docs `);
  });
};

startServer();
