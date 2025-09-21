type Skill = {
  title: string,
  icon: string,
  style?: object
};
type Testimonial = {
  quote: string,
  name: string,
  job: string
};


export const skills: Skill[] = [
  {
    title: "Solidity",
    icon: "https://img.icons8.com/color/48/solidity.png",
  },
  {
    title: "Foundry",
    icon: "https://img.icons8.com/fluency/48/foundry.png",
  },
  {
    title: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    title: "Wagmi",
    icon: "",
  },
  {
    title: "OpenZeppelin",
    icon: "https://cdn.brandfetch.io/id6xwfpzuB/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1753541060323",
  },
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  // {
  //   title: "NextJS",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
  //   style: { filter: "invert(1)" },
  // },
  // {
  //   title: "Typescript",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  // },
  // {
  //   title: "NodeJS",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  // },
  // {
  //   title: "Git",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  // },
  // {
  //   title: "Firebase",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  // },
  // {
  //   title: "Figma",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  // },
];

export const testimonials: Testimonial[] = [
  // {
  //   quote:
  //     "The communication throughout the project was spot on and the genre of design was carried out well.",
  //   name: "Wilson Bright",
  //   job: "Co-Founder of BlockSurvey",
  // },
  {
    quote:
      "The code was clean, easy to understand, and exactly what I was looking for.",
    name: "Philip Imperato",
    job: "CEO of VisualBonus",
  },
  // {
  //   quote:
  //     "My vision was executed perfectly. The quality and speed of the work was excellent.",
  //   name: "Zach Green",
  //   job: "Founder of Hangxiety Shrink",
  // },
];
