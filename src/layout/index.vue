<template>
  <Header/>
  <app-main/>
  <Footer/>
</template>

<script setup lang="ts">

// 状态管理
import { useAppStore, useSettingsStore } from "@/store";



// 枚举
import { DeviceEnum } from "@/enums/settings/device.enum";

// 组件
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";

const appStore = useAppStore();
const settingsStore = useSettingsStore();
const width = useWindowSize().width;
settingsStore.changeThemeColor('#6b39bd')
// 常量
const WIDTH_DESKTOP = 992; // 响应式布局容器固定宽度（大屏 >=1200px，中屏 >=992px，小屏 >=768px）

// 计算属性
const isMobile = computed(() => appStore.device === DeviceEnum.MOBILE); // 是否为移动设备
const isSidebarOpen = computed(() => appStore.sidebar.opened); // 侧边栏是否展开


// 监听窗口宽度变化，调整设备类型和侧边栏状态
watchEffect(() => {
  const isDesktop = width.value >= WIDTH_DESKTOP;
  appStore.toggleDevice(isDesktop ? DeviceEnum.DESKTOP : DeviceEnum.MOBILE);
  if (isDesktop) {
    appStore.openSideBar();
  } else {
    appStore.closeSideBar();
  }
});

// 监听路由变化，如果是移动设备且侧边栏展开，则关闭侧边栏
const route = useRoute();
watch(route, () => {
  if (isMobile.value && isSidebarOpen.value) {
    appStore.closeSideBar();
  }
});

// 计算属性：布局样式
const layoutClass = computed(() => ({
  hideSidebar: !appStore.sidebar.opened,
  openSidebar: appStore.sidebar.opened,
  mobile: appStore.device === DeviceEnum.MOBILE,
  [`layout-${settingsStore.layout}`]: true,
}));

/**
 * 处理遮罩层点击事件，关闭侧边栏
 */
function handleCloseSidebar() {
  appStore.closeSideBar();
}

/**
 * 处理切换侧边栏的展开/收起状态
 */
function handleToggleSidebar() {
  appStore.toggleSidebar();
}
</script>
<style lang="scss" scoped>

</style>
