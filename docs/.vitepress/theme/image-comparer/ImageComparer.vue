<template>
    <div class="image-comparer" style="min-height: 300px;">
        <img class="view before" :src="srcBefore" alt="before" style="position: absolute;">
        <img class="view after" :src="srcAfter" alt="after" style="position: absolute;">
        Image Comparer
        <div class="image-comparer-handle">
            <span class="arrow-left"></span>
            <span class="arrow-right"></span>
        </div>
    </div>
</template>

<script setup lang="ts">
    // import 'viewerjs/dist/viewer.min.css'

    withDefaults(defineProps<{
        srcBefore: string
        srcAfter: string
    }>(), {
    });

    // const showImage = (e: Event) => {
    //     ((e.target as HTMLElement).previousElementSibling as HTMLElement).click();
    // };
</script>

<style scoped lang="css">

    .image-comparer {
        display: block; 
        position: relative;
        box-sizing: content-box; 
        z-index: 0; 
        overflow: hidden;
    }
    
    .image-comparer .view,
    .image-comparer .view::before,
    .image-comparer .view::after {
        box-sizing: border-box;
    }
    
    .image-comparer .view:first-child::before {
        content: '';
        position: absolute;
        bottom: 1em;
        background-color: white;
        width: 250px;
        height: 100vh;
        z-index: -1;
        border-bottom: 1px solid #000000;
    }

    .image-comparer .after::before {
        content: '';
        position: absolute;
        bottom: 0;
        background-color: green;
        width: 250px;
        height: 100vh;
        border: 1px solid #000000;
        border-top-width: 0;
        z-index: -2;
    }

    /* .image-viewer {
        margin: 20px 0;
    }

    .image-viewer img {
        display: none;
    }

    .image-viewer button {
        display: block;
        background-color: #ff6348;
        border-radius: 4px;
        padding: 5px 10px;
        margin: 10px 15px;
        color: white;
    }

    .dark .image-viewer > button {
        background-color: #5d240f;
    } */


    .before {
        z-index: 20; 
    }

    .after {
        z-index: 10; 
    }

    .image-comparer-handle {
        height: 38px;
        width: 38px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -22px;
        margin-top: -22px;
        border: 3px solid white;
        -webkit-border-radius: 1000px;
        -moz-border-radius: 1000px;
        border-radius: 1000px;
        -webkit-box-shadow: 0px 0px 12px rgba(51, 51, 51, 0.5);
        -moz-box-shadow: 0px 0px 12px rgba(51, 51, 51, 0.5);
        box-shadow: 0px 0px 12px rgba(51, 51, 51, 0.5);
        z-index: 40;
        cursor: pointer; 
    }

    .image-comparer-handle:before {
        bottom: 50%;
        margin-bottom: 22px;
        -webkit-box-shadow: 0 3px 0 white, 0px 0px 12px rgba(51, 51, 51, 0.5);
        -moz-box-shadow: 0 3px 0 white, 0px 0px 12px rgba(51, 51, 51, 0.5);
        box-shadow: 0 3px 0 white, 0px 0px 12px rgba(51, 51, 51, 0.5);
    }
    .image-comparer-handle:after {
        top: 50%;
        margin-top: 22px;
        -webkit-box-shadow: 0 -3px 0 white, 0px 0px 12px rgba(51, 51, 51, 0.5);
        -moz-box-shadow: 0 -3px 0 white, 0px 0px 12px rgba(51, 51, 51, 0.5);
        box-shadow: 0 -3px 0 white, 0px 0px 12px rgba(51, 51, 51, 0.5); 
    }
    .image-comparer-handle:before, .image-comparer-handle:after {
        width: 3px;
        height: 9999px;
        left: 50%;
        margin-left: -1.5px; }


    .arrow-left {
        border-right: 6px solid white !important;
        left: 50%;
        margin-left: -17px;
    }

    .arrow-right {
        border-left: 6px solid white !important;
        right: 50%;
        margin-right: -17px;
    }

    .arrow-left, .arrow-right {
        top: 50%;
        margin-top: -6px;
        width: 0;
        height: 0;
        border: 6px inset transparent;
        position: absolute;
    }

</style>
