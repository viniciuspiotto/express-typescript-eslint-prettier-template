import app from "#app.js";

const port = process.env.PORT ?? "9001";

app.listen(port, () => {
  console.log(`Exemplo de app escutando na porta ${port}`);
});
