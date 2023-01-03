import { defineConfig } from "vite";
import { dedale } from "vite-plugin-dedale";
import { capitalize } from "./ssg/edgeHelpers";
import { routes } from "./ssg/routes";

export default defineConfig({
  plugins: [
    dedale({
      contentDir: "content",
      templateDir: "templates",
      templateEngine: "edge",
      configureTemplateEngine: (env) => {
        env.global("siteTitle", "Daedalus's Blog");
        env.global("capitalize", capitalize);
        return env;
      },
      routes: routes(),
    }),
  ],
});
