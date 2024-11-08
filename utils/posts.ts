import { type PathLike, readFileSync, readdirSync } from "node:fs";
import path from "node:path";

type Metadata = {
  title: string;
  datePublished: string;
  summary: string;
  image?: string;
  imageAlt?: string;
};

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getBlogDirectories(dir: PathLike) {
  return readdirSync(dir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
}

function readPageFile(dirPath: string) {
  const filePath = path.join(dirPath, "page.mdx");
  const rawContent = readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  const blogDirs = getBlogDirectories(dir);
  return blogDirs.map((directory) => {
    const fullDirPath = path.join(dir, directory);
    const { metadata, content } = readPageFile(fullDirPath);
    const slug = directory; // Use directory name as slug

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "app", "blog"));
}
