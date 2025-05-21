import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme as ThemeConfig } from 'vitepress'
import { 
  NolebaseEnhancedReadabilitiesMenu, 
  NolebaseEnhancedReadabilitiesScreenMenu, 
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

import "./style.css"
// import './styles/vars.css'
// import './styles/main.css'


import 'viewerjs/dist/viewer.min.css';
import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import { useRoute } from 'vitepress';

import ImageComparer from './image-comparer/ImageComparer.vue';

export const Theme: ThemeConfig = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // A enhanced readabilities menu for wider screens
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu), 
      // A enhanced readabilities menu for narrower screens (usually smaller than iPad Mini)
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu), 
    })
  },
  enhanceApp(ctx) {
    // DefaultTheme.enhanceApp(ctx);
    // other configurations...
    
    // Register global components, if you don't want to use it, you don't need to add it
    ctx.app.component('vImageViewer', vImageViewer);
    
    ctx.app.component('ImageComparer', ImageComparer);
  },
  setup() {
      // Get route
      const route = useRoute();
      // Using
      imageViewer(route);
  },
}

export default Theme