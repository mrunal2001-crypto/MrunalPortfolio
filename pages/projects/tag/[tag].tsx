import Page from "components/utility/Page";
import { GetStaticProps, GetStaticPaths } from "next";
import { allKebabTags, allTags as allTagsData } from "@/data/content/projects";

import projects from "@/data/content/projects";

import { kebabCase, kebabArray } from "@/utils/utils";
import Projects from "components/projects/Projects";
import Heading from "components/projects/Heading";
import Link from "next/link";

export const getStaticPaths: GetStaticPaths = async () => {
  // Explicitly type allTags as string[]
  const allTags: string[] = [];
  projects.forEach((project) =>
    project.tags.forEach((tag) => {
      allTags.push(tag);
    })
  );

  const uniqueAllTags = [...new Set(allTags)];
  const allTagsPaths = uniqueAllTags.map((path) => ({
    params: { tag: `${kebabCase(path)}` },
  }));

  return {
    paths: allTagsPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tag = params?.tag as string;
  const filteredProjects = projects.filter((project) =>
    [...kebabArray(project.tags)].includes(tag)
  );

  return {
    props: {
      filteredProjects,
      tag,
    },
  };
};

type PostPageProps = {
  filteredProjects: typeof projects;
  tag: string;
};

function PostPage({ filteredProjects, tag }: PostPageProps) {
  // Use imported allTags to get the capitalized version
  const capsTag = allTagsData[allKebabTags.indexOf(tag)] || tag;

  return (
    <Page
      currentPage="Projects"
      meta={{
        title: `${capsTag} Projects`,
        desc: `A showcase for all of my ${capsTag} projects.`,
      }}
    >
      <Heading tag={capsTag} />
      <Projects overwriteProjects={filteredProjects} />

      <Link href="/projects">
        <div className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
          View All
        </div>
      </Link>
    </Page>
  );
}

export default PostPage;
 