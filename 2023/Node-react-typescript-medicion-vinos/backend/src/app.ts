import Fastify from "fastify";
import userRoutes from "./modules/user/user.route";
const server = Fastify();

async function main() {
  server.register(userRoutes, { prefix: "api/users" });

  try {
    await server.listen({ port: 3000 });
    console.log("Server ready!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();
