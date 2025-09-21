import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "NFT Market Place",
    desc: "A digital platform where users can create, buy, sell, and trade unique blockchain-based assets securely",
    img: "/static/projects/NFT Market Place.png",
    link: "https://nf-tmarketplace-six.vercel.app/",
    github: "https://github.com/mrunal2001-crypto/NFTmarketplace",
    tags: ["React", "Solidity", "Foundry", "CSS", "anvil"],
  },
  {
    id: 1,
    title: "Decentralized Autonomous Organization (DAO)",
    desc: "A Decentralized Autonomous Organization (DAO) is a community-led entity governed by smart contracts and collective decision-making without centralized control.",
    img: "/static/projects/DAO.png",
    link: "https://dao-frontend-omega.vercel.app/",
    github:"https://github.com/mrunal2001-crypto/dao-frontend",
    tags: ["Solidity", "Wagmi", "Rainbow kit", "foundry", "anvil"],
  },
  {
    id: 2,
    title: "AIrDrop Contract",
    desc: "An airdrop smart contract using a Merkle tree stores a compact off-chain list of eligible recipients (the Merkle root on-chain) and lets users claim tokens by submitting a Merkle proof that verifies their eligibility efficiently and securely.",
    img: "/static/projects/airDropContract.png",
    // link: "https://react-emoji-search.braydentw.vercel.app/",
    github: "https://github.com/mrunal2001-crypto/merkel-tree-AirdropContract",
    tags: ["Solidity", "foundry", "anvil"],
  },
  // {
  //   id: 3,
  //   title: "BitcoinTemp",
  //   desc: "A fun way to check the price of bitcoin! Cloudy days, sunny days, and Bitcoin Storms!",
  //   img: "/static/projects/bitcointemp.png",
  //   link: "https://bitcointemp.com",
  //   tags: ["React", "NextJS", "SCSS", "API"],
  // },
  // {
  //   id: 4,
  //   title: "Create HTML Boilerplate",
  //   desc: "Generate a vanilla HTML boilerplate in a flash!",
  //   img: "/static/projects/create-html-boilerplate.png",
  //   github: "https://github.com/BraydenTW/create-html-boilerplate",
  //   tags: ["Node", "Javascript", "NPM", "HTML"],
  // },
  // {
  //   id: 5,
  //   title: "8 Ball in your CLI",
  //   desc: "An 8 ball simulation in your CLI built with Rust!",
  //   img: "/static/projects/8ball-rust.png",
  //   github: "https://github.com/BraydenTW/8ball-rust",
  //   tags: ["Rust", "CLI", "Game"],
  // },
  // {
  //   id: 6,
  //   title: "DontLeaveMe 😭",
  //   desc: "Beg for users to stay on your website.",
  //   img: "/static/projects/dontleaveme.png",
  //   link: "https://github.com/BraydenTW/dontleaveme/",
  //   tags: ["Javascript", "NPM"],
  // },
  // {
  //   id: 7,
  //   title: "Madlibs",
  //   desc: "A simple version of Madlibs built for the web!",
  //   img: "/static/projects/madlibs.png",
  //   link: "https://fillemin.netlify.app/",
  //   github: "https://github.com/braydentw/madlibs",
  //   tags: ["HTML", "CSS", "Javascript"],
  // },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
