import z from 'zod'

const MovieScheme = z.object({
  title: z.string({
    invalid_type_error: "Movie error por que no es string",
    required_error: "Movie title es required",
  }),
  year: z.number().min(1900).max(2024), // AGREGE EL 2024 porque el new Date().getFullYear() no me dejaba actualizar sera error de DATE
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().min(0).max(10).default(5),
  poster: z.string().url({
    message: "Poster error con la URL",
  }),
  genre: z.array(
    z.enum([
      "Fantasy",
      "Adventure",
      "Comedy",
      "Drama",
      "Horror",
      "Action",
      "Crime",
    ]),
    {
      required_error: "Movie genre es required",
    }
  ),
});

export function ValidamosMovie(object) {
  return MovieScheme.safeParse(object);
}

export function ValidatePartialMovie(input) {
  return MovieScheme.partial().safeParse(input); // valores o propiedades optionales que es si estan lo validan si no pasa nada si no esta parcial
}


