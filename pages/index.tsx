import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";

// Dynamic imports for client-only or interactive components
const CTA = dynamic(() => import("@/components/home/CTA"), { ssr: false });
const Projects = dynamic(() => import("@/components/home/Projects"), { ssr: false });
const Skills = dynamic(() => import("@/components/home/Skills"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/home/Testimonials"), { ssr: false });
// const Posts = dynamic(() => import("@/components/home/Posts"), { ssr: false });

// If you were using contentlayer:
// import { allPosts } from "contentlayer/generated";
// import { GetStaticProps } from "next";

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//       allPosts: allPosts.sort(
//         ({ date: dateA }: any, { date: dateB }: any) => dateB - dateA
//       ),
//     },
//   };
// };

export default function Home() {
  return (
    <Page
      currentPage="Home"
      meta={{
        desc: "I'm a passionate web developer and designer coding beautiful websites and apps.",
      }}
    >
      <Hero />
      <div className="mt-20 space-y-32">
        <Projects />
        <Skills />
        <Testimonials />
        {/* <Posts allPosts={allPosts} /> */}
      </div>
      <CTA />
    </Page>
  );
}
