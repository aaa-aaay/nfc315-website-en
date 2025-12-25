<template>
  <section class="section section-breadcrumb novi-background" data-preset='{"title":"Breadcrumb","category":"breadcrumb","reload":false,"id":"breadcrumb-6"}'>
    <div class="container">
      <!-- Breadcrumb-->
      <ul class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link class="breadcrumb-link" to="/index.html">Home</router-link>
        </li>
        <li class="breadcrumb-item">
          <span class="breadcrumb-text breadcrumb-active">{{ currentTitle }}</span></li>
      </ul>
    </div>
  </section>
</template>

<script  lang="ts">

import { useRoute } from 'vue-router';
import { ref } from 'vue';

export default {
  setup() {
    const route = useRoute();
    // 响应式存储当前路径
    const currentTitle = ref(route.meta.title);

    // 监听路由路径变化，实时更新
    watch(
        () => route.meta.title, // 监听的目标：路由路径
        (newVal, oldVal) => {
          console.log('路由变化：', oldVal, '→', newVal);
          currentTitle.value = newVal; // 更新响应式变量
        }
    );

    return {
      currentTitle
    };
  }
};

</script>

