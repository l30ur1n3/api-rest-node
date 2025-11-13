import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API RESTful Node.js + Express + MongoDB",
      version: "1.0.0",
      description: "Documentação da API com autenticação JWT"
    },
    servers: [{ url: "http://localhost:3000" }]
  },
  apis: ["./src/routes/*.js"]
};

const swaggerSpec = swaggerJSDoc(options);

export const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("📄 Documentação disponível em http://localhost:3000/api-docs");
};
