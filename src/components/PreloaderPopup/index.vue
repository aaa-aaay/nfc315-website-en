<template>
  <div>
    <!-- 预加载器 -->
    <div
      id="preloader"
      class="preloader"
      v-if="showPreloader"
      :class="{ 'fade-out': isPreloaderFading }"
    >
      <span class="preloader-dot"></span>
    </div>

    <!-- 弹出层 -->
    <div
      class="awe-popup-overlay"
      id="awe-popup-overlay"
      v-if="showPopup"
      @click="closePopup"
    ></div>
    <div
      class="awe-popup-wrap"
      id="awe-popup-wrap"
      v-if="showPopup"
    >
      <div class="awe-popup-content">
        <slot></slot> <!-- 插槽用于插入弹出层内容 -->
      </div>
      <span
        class="awe-popup-close"
        id="awe-popup-close"
        @click="closePopup"
      >&times;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreloaderPopup',
  data() {
    return {
      showPreloader: true,
      isPreloaderFading: false,
      showPopup: true
    }
  },
  mounted() {
    // 预加载器延迟淡出效果
    setTimeout(() => {
      this.isPreloaderFading = true;
      // 等待动画完成后隐藏
      setTimeout(() => {
        this.showPreloader = false;
      }, 400);
    }, 1000);
  },
  methods: {
    // 打开弹出层
    openPopup() {
      this.showPopup = true;
      document.body.style.overflow = 'hidden'; // 防止背景滚动
    },
    // 关闭弹出层
    closePopup() {
      this.showPopup = false;
      document.body.style.overflow = ''; // 恢复背景滚动
    }
  }
}
</script>

<style scoped>
/* 预加载器样式 */
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.4s ease-out;
}

.preloader.fade-out {
  opacity: 0;
}



@keyframes pulse {
  0%, 100% {
    transform: scale(0.8);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}


</style>
