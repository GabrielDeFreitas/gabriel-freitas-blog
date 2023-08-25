
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api-sa-east-1.hygraph.com/v2/cllpa8q9b1cly01uo0ejughhv/master",
  documents: "src/graphql/queries.ts",
  generates: {
    "src/graphql/generated/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
