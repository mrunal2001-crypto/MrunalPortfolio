import { kebabCase } from "@/utils/utils";
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
    github: "https://github.com/mrunal2001-crypto/merkel-tree-AirdropContract",
    tags: ["Solidity", "foundry", "anvil"],
  },
];

export const allTags: string[] = []; // <-- explicitly type as string[]

projects.forEach((project) => {
  project.tags.forEach((tag) => {
    if (!allTags.includes(tag)) {
      allTags.push(tag);
    }
  });
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
