<template>
  <router-view />
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted } from 'vue';
  import { useAppStore, useSettingsStore } from "@/store";
  import defaultSettings from "@/settings";
  import { ThemeMode } from "@/enums/settings/theme.enum";
  import { ComponentSize } from "@/enums/settings/layout.enum";

  const appStore = useAppStore();
  const settingsStore = useSettingsStore();
  const locale = computed(() => appStore.locale);
  const size = computed(() => appStore.size as ComponentSize);
  const watermarkEnabled = computed(() => settingsStore.watermarkEnabled);
  const dialogVisible = ref(true)
  // 明亮/暗黑主题水印字体颜色适配
  const fontColor = computed(() => {
    return settingsStore.theme === ThemeMode.DARK ? "rgba(255, 255, 255, .15)" : "rgba(0, 0, 0, .15)";
  });


  onMounted(() =>{
    new window.ZemezCore({
      //{DEL LIVEDEMO BUILDER}
      debug: false,
      //{DEL}
      components: window.components,
      observeDOM: true,
      IEPolyfill: "https://polyfill.io/v3/polyfill.min.js?features=Element.prototype.closest%2CArray.from%2CCustomEvent%2CNodeList.prototype.forEach%2CObject.assign%2CIntersectionObserver%2CPromise%2CElement.prototype.remove",
      IEHandler: function ( version ) {
        document.documentElement.classList.add( 'ie-'+ version );
      }
    });
    setTimeout( function () {
      document.documentElement.classList.add( 'page-loaded' );
    }, 1200 );

    appStore.getCurrentPosition().then((res)=>{
      console.log(res)
    })
  });



</script>
