import { loadAllMdFilesFrom, Route } from "vite-plugin-dedale";
import { readingTime } from "./readingTime";

const pagesRoutes = loadAllMdFilesFrom<{ title: string }>("content/pages").map(
  (p) => ({
    url: `/${p.frontmatter.title}/`,
    template: "page",
    data: {
      title: p.frontmatter.title,
      content: p.content,
    },
  })
) satisfies Route[];

type ArticleFrontmatter = {
  title: string;
  date: string;
  image: string;
};

const articles = loadAllMdFilesFrom<ArticleFrontmatter>(
  "content/articles"
).sort((a, b) => Number(a.filename) - Number(b.filename));
const articlesRoutes = articles.map((a) => ({
  url: `/blog/${a.filename}/`,
  template: "post",
  data: {
    title: a.frontmatter.title,
    date: a.frontmatter.date,
    image: a.frontmatter.image,
    content: a.content,
    resume: a.raw.slice(0, 100),
    index: a.filename,
    time: readingTime(a.raw),
  },
})) satisfies Route[];
export const routes = (): Route[] => {
  return [
    {
      url: "/",
      template: "home",
      data: {
        title: "home",
      },
    },
    ...pagesRoutes,
    ...articlesRoutes,
  ];
};
