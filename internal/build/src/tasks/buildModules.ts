import { build } from "vite";
import { buildInfo } from "../../build-info";
import dts from "vite-plugin-dts";
import path from "path";
import { componentPath } from "../../constants";

const root = path.resolve(__dirname, "../../");

export const buildModules = async () => {
  const bundle = await build({
    ...buildInfo,
    plugins: [
      ...(buildInfo.plugins || []),
      dts({
        root: componentPath,
        outputDir: path.join(root, 'dist'),
        tsConfigFilePath: path.join(root, 'tsconfig.json'),
        compilerOptions: {
          emitDeclarationOnly: true,
          preserveSymlinks: true,
          rootDir: componentPath,
          baseUrl: "./",
          resolveJsonModule: true
        },
        skipDiagnostics: true
      }),
    ],
    build: {
      ...buildInfo.build,
      lib: {
        entry: path.join(componentPath, "index.ts"),
        name: "GalaUi",
        fileName: (format, entryName) =>
          `${entryName.replace(/[\/src]/gi, "")}.${format}.js`,
      },
      rollupOptions: {
        input: path.join(componentPath, "index.ts")
      }
    },
  });
};
