---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 
  text: "α Piscium"  # <small><sup>Alpha</sup></small>
  tagline: "Next-Gen Global Illumination Solution for Minecraft"
  
  actions:
    - theme: brand
      text: Download
      link: https://github.com/Luna5ama/Alpha-Piscium/releases
    - theme: alt
      text: Showcase
      link: /showcase
    - theme: alt
      text: Design & Implementation
      link: /impl
    - theme: alt
      text: About
      link: /about
features:
  - title: SSVBIL Global Illumination
    details: Real-time indirect lighting with minimal performance overhead, leveraging bitmask-based visibility approximation for accurate indirect light bounces in complex scenes.
    link: https://arxiv.org/pdf/2301.11376
  - title: "<b>Atmospheric Scattering</b>"
    details: Physically accurate sky/light shafts using UE Sky Atmosphere and Epipolar Sampling.
  - title: RTWSM Adaptive Shadows # "High-quality, fast, and adaptive <b>Shadows</b>"
    details: Alias-free shadows with variable penumbra via Rectilinear Texture Warping.
  # - title: "High-quality, fast, and adaptive <b>Shadows</b>"
  #   details: Realistic, real-time, and fast Atmospheric Scattering. Including sky and light shafts
---

<br>


**Alpha Piscium: A Cutting-Edge Real-Time Rendering Engine for Photorealistic Global Illumination and Dynamic Atmospheric Effects**  
Alpha Piscium is a high-performance real-time rendering framework integrating state-of-the-art algorithms for physically based global illumination, atmospheric scattering, and adaptive shadow mapping, optimized for cinematic visual fidelity in dynamic environments.  

---

### **Feature Highlights**  

- **Global Ilumination**<br>
Implements [*Screen Space Visibility Bitmask Indirect Lighting*](https://arxiv.org/pdf/2301.11376) (SSVBIL) to achieve real-time global illumination with minimal performance overhead, leveraging bitmask-based visibility approximation for accurate indirect light bounces in complex scenes.  

- Photorealistic, real-time, and fast **Atmospheric Scattering**<br>
Combines [*Unreal Engine's Sky Atmosphere model*](https://sebh.github.io/publications/egsr2020.pdf) with [*Epipolar Sampling*](https://gdcvault.com/play/1018227/Practical-Implementation-of-Light-Scattering) for real-time volumetric light shafts and wavelength-dependent sky rendering, enabling dynamic time-of-day transitions and physically accurate aerial perspective.  

- High-quality, fast, and adaptive **Shadows**<br> 
Deploys adaptive shadow resolution via [*Rectilinear Texture Warping*](https://www.cspaul.com/publications/Rosen.2012.I3D.pydf), reducing aliasing artifacts while maintaining <2ms rendering cost, with variable penumbra simulation for contact-hardened soft shadows.  

---  
**Technical Distinction**: Unifies academic advancements (SSVBIL, Epipolar Sampling) with production-proven techniques (UE Sky Atmosphere) to balance innovation and practicality, targeting AAA game engines and VFX pipelines.


<!-- ### Voxel

***I. Storage:***  
[Runtime Store](), [Persistent Store](), [Extendable Id System](), [Unaligned Voxel Systems]()  

***II. Rendering:***   
[LoD](), [Culling](), [RayMarching](), [Isosurface](),   

***3. Simulating:***   
[Flooding](), [Lighting](), [Connectivity](), [Fire Spread](), [Explosion](), [Voxel Collision Detection](), [PhysX Integration]().  

***IV. Procedural WorldGen:***  
[Noises](), [Biomes](), [WFC](), [L-system]().    

***Misc:***   
Teardown of (Minecraft Perf, Minecraft WorldGen, Teardown, Gore, Dauglas, xima)  

### Graphics

***I. Postmodern OpenGL 4:***  
[SSBO](), [Compute Shader](), [Programmable Vertex Pulling](), [Bindless Texture](),   
[All Draw Functions](), [MultiDraw Indirect MDI](), [Tessellation Shader](), [DSA]().   

***II. Modern Graphics APIs:***  
[Vulkan Review](), [Wgpu Review](), [OpenGL4 Review]()  
[Vulkan DynamicRenderingExt](), [DirectX 12 WorkGraph]()

### Physics

### Programming Language -->


<!-- # Projects -->

<!-- <div class="VPFeatures VPHomeFeatures VPFeatures vp-raw" style="margin: 14px 0">
  <div class="project-items">
    <VPProject 
      title="Ethertia · 以太效應" 
      details="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      link="https://ethertia.com/showcase"
      linkText="ethertia.com"/>
    <VPProject 
      title="Minecraft 設計思想 · <small>Thinking in Minecraft</small>" 
      details="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      link="https://elytra.dev/thinking-in-minecraft"
      linkText="Webdoc"/>
    <VPProject 
      title="The Elytra Programming Language" 
      details="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      link="https://elytra.dev/lang"
      linkText="Documentation"/>
  </div>
</div> -->

<!-- # Playlists -->

<!-- <p>Ethertia Devlog</p> -->
<!-- <div>
  <EtVideo
    title="温度湿度等参数 生物群系设计 E1 | Ethertia 23u02"
    desc="Jan 12, 2023 · 02:44"
    link="https://www.bilibili.com/video/BV1YY4y1f77G"
    cover_url="https://elytra.dev/~pris/res/vp/bio1.png"/>
  <EtVideo
    title="温度湿度等参数 生物群系设计 E1 | Ethertia 23u02"
    desc="Jan 12, 2023 · 02:44"
    link="https://www.bilibili.com/video/BV1YY4y1f77G"
    cover_url="https://elytra.dev/~pris/res/vp/bio1.png"/>
</div> -->

<!-- # Blogs -->

<!-- <div>
  <EtPost
    title="Dive into Minecraft Terrain Generation"
    desc="Atmosphere always is Spherical due to Gravity Theory."
    link="https://www.bilibili.com/video/BV1YY4y1f77G"
    date="2022-12-03"
    cover_url="https://elytra.dev/~pris/res/bg21.png"
    tags="Agood;Abcs"/>
    
  <EtPost
    title="Flat Atmosphere Rendering"
    desc="Atmosphere always is Spherical due to Gravity Theory."
    link="https://www.bilibili.com/video/BV1YY4y1f77G"
    date="2022-12-03"
    cover_url="https://elytra.dev/~pris/res/bg2.png"/>

  <EtPost
    title="Raymarching World-Ray Generation"
    desc="Ray, ClipSpace to WorldSpace with MVP Transformations."
    link="https://www.bilibili.com/video/BV1YY4y1f77G"
    date="2022-12-03"/>
  <EtPost
    title="Naive SurfaceNets Implmentation"
    desc="Conversion of Ray from ClipSpace to WorldSpace with MVP"
    link="https://www.bilibili.com/video/BV1YY4y1f77G"
    date="2022-12-03"/>
</div> -->


<!-- # Articles · Papers · Publications 

# Gallery

# About -->





<!-- <VPTeamMembers size="small" :members="members" /> -->


<!-- <style>

.vp-doc h1 {
  font-size: 30px;
  font-weight: 200;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  margin: 42px 0 18px 0;
}


.project-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  gap: 12px
}

</style> -->

<!--script setup>

import VPProject from '/components/VPProject.vue'

import EtVideo from '/components/VPVideo.vue'
import EtPost from '/components/VPPost.vue'

import { VPTeamMembers } from 'vitepress/theme';
const members = [
  {
    avatar: 'https://www.github.com/Dreamtowards.png',
    name: 'Dreamtowards',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/Dreamtowards' },
      { icon: 'twitter', link: 'https://twitter.com/Dreamtowards' }
    ],
    // sponsor: "sth",
    // actionText: "Action"
  },
  {
    avatar: 'https://www.github.com/thaumstrial.png',
    name: 'Thaumstrial',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/thaumstrial' },
      { icon: 'twitter', link: 'https://twitter.com/thaumstrial' }
    ]
  },
  {
    avatar: 'https://www.github.com/okkmnone.png',
    name: 'Master Foo',
    title: 'Technical Adviser',
    links: [
      { icon: 'github', link: 'https://github.com/thaumstrial' },
      { icon: 'twitter', link: 'https://twitter.com/thaumstrial' }
    ]
  },
]
</script-->

