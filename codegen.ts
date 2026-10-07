import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:1337/graphql",
  documents: "graphql/**/*.graphql",
  ignoreNoDocuments: true,
  generates: {
    "generates.ts": {
      plugins: [
        {
          add: {
            content: `
            import { RequestInit } from "@/lib/client"           
            interface Format {
            ext: string;
            url: string;
            hash: string;
            mime: string;
            name: string;
            path: string | null;
            size: number;
            width: number;
            height: number;
            sizeInBytes: number;
            }
            export type Quality = "large" | "medium" | "small" | "thumbnail";
            export type Formats = Record<Quality, Format>;
            `,
          },
        },
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        fetcher: {
          func: "@/lib/client#fetcher",
        },
        reactQueryVersion: 5,
        exposeQueryKeys: true,
        addInfiniteQuery: true,
        exposeFetcher: true,
        scalars: {
          DateTime: "string",
          JSON: "Formats",
          Upload: "Promise<GraphQLFileUpload>",
          I18NLocaleCode: "string",
        },
      },
    },
  },
  hooks: {
    afterOneFileWrite: ["prettier --write"],
  },
};
export default config;
