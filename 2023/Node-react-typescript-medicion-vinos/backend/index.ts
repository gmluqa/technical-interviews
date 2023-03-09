import fastify from "fastify";

const server = fastify();

server.get("/ping", async (request, reply) => {
  return "pong\n";
});

interface User {
  username: string;
  password: string;
}

server.post<{ Body: User }>("/register", async (request, reply) => {
  const { username, password } = request.body;

  // do something with the user data, e.g. store it in a database

  return { success: true };
});

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
