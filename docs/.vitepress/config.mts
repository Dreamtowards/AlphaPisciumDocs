import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "α Piscium",
  titleTemplate: ':title', 
  description: "α Alpha Piscium",
  lang: 'en-US',
  head: [
    ['link', { rel: 'icon', href: '/assets/favicon-dark.png' }],
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-CSR36R1EGY' }],
    ['script', {},
    `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-CSR36R1EGY');`],
    ['script', {}, "console.log('Test Web Init')"],
    // ['script', { async: '', src: '//clustrmaps.com/map_v2.js?d=CjkjO_lbXjEDHs5kmXfnU4xsNf-CgStYgdHc7uoUTcg&cl=ffffff&w=a' }]

    
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/img-comparison-slider@8/dist/styles.css' }],
    ['script', { defer: '', src: 'https://cdn.jsdelivr.net/npm/img-comparison-slider@8/dist/index.js' }],
  ],
  cleanUrls: true,  // no .html suffix
  metaChunk: true,  // more Cache?
  themeConfig: {
    logo: { 
        light: "/assets/favicon-light.png",
        dark: "/assets/favicon-dark.png",
        alt: ""
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // {
      //   text: 'About',
      //   items: [
      //     { text: "me Dreamtowrds", link: 'misc/about' },
      //     { text: "Time Management", link: 'misc/about/time-management' },
      //     { text: "Autonomous Learning", link: 'misc/about/autonomous-learning' },
      //   ]
      // },
    ],

    sidebar: [
      {
        text: 'Showcase',
        link: 'showcase',
      },
      {
        text: 'Versions',
        link: 'versions',
      },
      {
        text: 'Implementation',
        link: 'impl',
      },
      {
        text: 'About',
        link: 'about',
      },
    ],

    aside: true,
    outline: {
      level: [2, 3],
      label: "On this page"
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Luna5ama/Alpha-Piscium' },
      
      { icon: {
        svg: '<svg height="2500" viewBox="164.3 112 694.5 806.7" width="1908" xmlns="http://www.w3.org/2000/svg"><path d="m824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3 4.4-185.7-72.8-335.9-250.6-335.9-179.8 0-255.3 153.2-250.5 335.9-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z"/></svg>'
      }, link: 'https://qm.qq.com/q/Dry4cBJk9q', ariaLabel: 'QQ' },
      
      { icon: {
        svg: '<svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M18.223 3.086a1.25 1.25 0 0 1 0 1.768L17.08 5.996h1.17A3.75 3.75 0 0 1 22 9.747v7.5a3.75 3.75 0 0 1-3.75 3.75H5.75A3.75 3.75 0 0 1 2 17.247v-7.5a3.75 3.75 0 0 1 3.75-3.75h1.166L5.775 4.855a1.25 1.25 0 1 1 1.767-1.768l2.652 2.652c.079.079.145.165.198.257h3.213c.053-.092.12-.18.199-.258l2.651-2.652a1.25 1.25 0 0 1 1.768 0zm.027 5.42H5.75a1.25 1.25 0 0 0-1.247 1.157l-.003.094v7.5c0 .659.51 1.199 1.157 1.246l.093.004h12.5a1.25 1.25 0 0 0 1.247-1.157l.003-.093v-7.5c0-.69-.56-1.25-1.25-1.25zm-10 2.5c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25zm7.5 0c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25z"/> </g> </svg>'
      }, link: 'https://space.bilibili.com/24341971' },
      
      { icon: 'discord', link: '', ariaLabel: 'cool link' },
      { icon: 'youtube', link: '' },
    ],
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/:path',
      text: 'Edit this page on GitHub'
    },
    lastUpdated: {
    }
  },
  markdown: {
    lineNumbers: true,
    math: true,
  },

  // https://nolebase-integrations.ayaka.io/pages/en/integrations/vitepress-plugin-enhanced-readabilities/
  vite: { 
    optimizeDeps: { 
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client', 
      ], 
    }, 
    ssr: { 
      noExternal: [ 
        // If there are other packages that need to be processed by Vite, you can add them here.
        // '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/*',
      ], 
    }, 
  }, 
})
