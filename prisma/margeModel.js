import fs from "fs";

const header = `
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
`;

const files = fs.readdirSync("./prisma/models");

let content = header;

for (const file of files) {
  content += "\n" + fs.readFileSync(`./prisma/models/${file}`, "utf8");
}

fs.writeFileSync("./prisma/schema.prisma", content);

console.log("Schema merged");