import express, { json } from "express"; // require -> commonJS
import { corsMiddleware } from "./middlewares/cors.js";
import { createMovieRoute } from "./routes/movie.js";

// import movies from './movies.json'
export const createServerApp = ({ movieModel }) => {
  const app = express();
  app.use(json());
  // cors
  app.use(corsMiddleware());
  app.disable("x-powered-by"); // deshabilitar el header X-Powered-By: Express

  // métodos normales: GET/HEAD/POST
  // métodos complejos: PUT/PATCH/DELETE

  // CORS PRE-Flight
  // OPTIONS

  // Todos los recursos que sean MOVIES se identifica con /movies
  app.use("/movies", createMovieRoute({ movieModel }));

  const PORT = process.env.PORT ?? 1234;

  app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`);
  });
};
