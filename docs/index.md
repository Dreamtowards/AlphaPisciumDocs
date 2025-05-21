---
title: ""
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 
  text: α Piscium  # <small><sup>Alpha</sup></small>
  # tagline: "Next-Gen Global Illumination Solution for Minecraft"
  tagline: "Performant & Cinematic Global Illumination for Minecraft"
  
  actions:
    - theme: brand
      text: Download
      link: https://github.com/Luna5ama/Alpha-Piscium/releases
    - theme: alt
      text: Showcase
      link: /showcase
    - theme: alt
      text: Versions
      link: /versions
    - theme: alt
      text: Principle & Implementation
      link: /impl
    - theme: alt
      text: About
      link: /about
features:
  - title: SSVBIL Global Illumination
    details: Real-time indirect lighting with minimal performance overhead, leveraging bitmask-based visibility approximation for accurate indirect light bounces in complex scenes.
    link: 
  - title: "<b>Atmospheric Scattering</b>"
    details: Physically accurate sky/light shafts using UE Sky Atmosphere and Epipolar Sampling.
  - title: RTWSM Adaptive Shadows # "High-quality, fast, and adaptive <b>Shadows</b>"
    details: Alias-free shadows with variable penumbra via Rectilinear Texture Warping.
  # - title: "High-quality, fast, and adaptive <b>Shadows</b>"
  #   details: Realistic, real-time, and fast Atmospheric Scattering. Including sky and light shafts
---

<!-- <br>
**Alpha Piscium: A Cutting-Edge Real-Time Rendering Engine for Photorealistic Global Illumination and Dynamic Atmospheric Effects**  
Alpha Piscium is a high-performance real-time rendering framework integrating state-of-the-art algorithms for physically based global illumination, atmospheric scattering, and adaptive shadow mapping, optimized for cinematic visual fidelity in dynamic environments.   -->

## Showcase &nbsp;<span style='font-size: 70%;'>[More](/showcase/)</span>

<div id="showcase" style="overflow: scroll; overflow-y: hidden;">
  <div style="width: 3000px">
    <iframe width="420" height="240" style="height: 240px; display: inline" src="//player.bilibili.com/player.html?isOutside=true&aid=113936707883228&bvid=BV1eFF1e6E2x&cid=28193129044&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
    <img style="height: 240px; display: inline" src="/assets/screenshots/v1.2.0/1-new.png">
    <img style="height: 240px; display: inline" src="/assets/screenshots/v1.2.0/7.png">
    <img style="height: 240px; display: inline" src="/assets/screenshots/v1.2.0/3-new.png">
    <img style="height: 240px; display: inline" src="/assets/screenshots/v1.2.0/6-new.png">
    <img style="height: 240px; display: inline" src="/assets/screenshots/v1.2.0/8.png">
  </div>

</div>


## **Features**  

- **Global Ilumination**<br>
Implements [*Screen Space Visibility Bitmask Indirect Lighting*](https://arxiv.org/pdf/2301.11376) (SSVBIL) to achieve real-time global illumination with minimal performance overhead, leveraging bitmask-based visibility approximation for accurate indirect light bounces in complex scenes.  

- Photorealistic, real-time, and fast **Atmospheric Scattering**<br>
Combines [*Unreal Engine's Sky Atmosphere model*](https://sebh.github.io/publications/egsr2020.pdf) with [*Epipolar Sampling*](https://gdcvault.com/play/1018227/Practical-Implementation-of-Light-Scattering) for real-time volumetric light shafts and wavelength-dependent sky rendering, enabling dynamic time-of-day transitions and physically accurate aerial perspective.  

- High-quality, fast, and adaptive **Shadows**<br> 
Deploys adaptive shadow resolution via [*Rectilinear Texture Warping*](https://www.cspaul.com/publications/Rosen.2012.I3D.pydf), reducing aliasing artifacts while maintaining <2ms rendering cost, with variable penumbra simulation for contact-hardened soft shadows.  

<!-- **Technical Distinction**: Unifies academic advancements (SSVBIL, Epipolar Sampling) with production-proven techniques (UE Sky Atmosphere) to balance innovation and practicality, targeting AAA game engines and VFX pipelines. -->


## Versions

### [v1.2.0](https://github.com/Luna5ama/Alpha-Piscium/releases/tag/1.2.0)

New
- Added emissive curve setting

Improvement
- Greatly improved GI quality and temporal stability
- Do GI accumulation in full resolution for higher quality and less flickering
- Added Shared memory optimization to GI Denoiser filter
- Added fast history clamping to denoiser for sharper shadows and more responsive update
- Optimized GI reproject branching

<!-- ## About

Credits: [Luna](https://github.com/Luna5ama) -->


<!-- ## BibTeX

```
@article{Sun2024SVR,
  title={Sparse Voxels Rasterization: Real-time High-fidelity Radiance Field Rendering},
  author={Cheng Sun and Jaesung Choe and Charles Loop and Wei-Chiu Ma and Yu-Chiang Frank Wang},
  journal={ArXiv},
  year={2024},
  volume={abs/2412.04459},
}
``` -->