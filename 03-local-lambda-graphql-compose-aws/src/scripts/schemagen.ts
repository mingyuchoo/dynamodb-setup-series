import fs from 'fs-extra';
import { printSchema } from 'graphql';
import path from 'path';

import schema from '../schema';

async function buildSchema() {
  fs.writeFileSync(path.join(__dirname, '../generated/schema.graphql'), printSchema(schema));
  await fs.ensureFile(path.join(__dirname, '../generated/schema.graphql.txt'));
}

async function run() {
  await buildSchema();
  console.log('Schema build complete!');
}

run().catch((e) => {
  console.log(e);
  process.exit(0);
});
