import React from 'react'

import { FaReact, FaNode } from 'react-icons/fa'
import {
  SiApollographql,
  SiTypescript,
  SiWebauthn,
  SiMaterialUi,
  SiAuth0,
} from 'react-icons/si'

export function getAllProjectIds() {
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return projects.map((project) => ({
    params: {
      id: project.id.toString(),
    },
  }))
}

export const projects = [
  {
    id: 1,
    title: 'Whisker',
    description:
      'Finally a site in which your cats can find love! I created this website to showcase my full-stack abilities while having some fun with a pretty pointless idea.',
    icons: [
      <FaReact key="1" />,
      <FaNode key="2" />,
      <SiApollographql key="3" />,
      <SiTypescript key="4" />,
    ],
    githubUrl: 'https://github.com/StevenMcHenry01/whisker',
    demoUrl: 'https://whisker.live/',
    previewPhotoPath: '/images/whisker/previewWhisker.png',
    sitePhotoPaths: [
      '/images/whisker/workWhisker1.png',
      '/images/whisker/workWhisker2.png',
      '/images/whisker/workWhisker3.png',
    ],
  },
  {
    id: 2,
    title: 'Reddit Royale',
    description:
      'A site where you can have Reddit subreddits compete against one another. This was created to teach myself about authentication from scratch. Influenced by a Tyler McGinnis course!',
    icons: [
      <FaReact key="1" />,
      <FaNode key="2" />,
      <SiWebauthn key="3" />,
      <SiMaterialUi key="4" />,
    ],
    githubUrl: 'https://github.com/StevenMcHenry01/Reddit_Royale_Client',
    demoUrl: 'https://reddit-royale.netlify.app/',
    previewPhotoPath: '/images/reddit/preview.png',
    sitePhotoPaths: [
      '/images/reddit/list.png',
      '/images/reddit/dark.png',
      '/images/reddit/main.png',
    ],
  },
  {
    id: 3,
    title: "Bob's Burgers",
    description:
      'A simple demo showcasing some frontend techniques along with persistant UI accross many nested states. Heavily influenced by a Wesbos course who you should go check out!',
    icons: [<FaReact key="1" />, <FaNode key="2" />, <SiAuth0 key="3" />],
    githubUrl: 'https://github.com/StevenMcHenry01/bobs_burgers',
    demoUrl: 'https://bobsburgers.netlify.app/',
    previewPhotoPath: '/images/bob/bobpreview.png',
    sitePhotoPaths: [
      '/images/bob/fold.png',
      '/images/bob/blank.png',
      '/images/bob/populated.png',
    ],
  },
]
