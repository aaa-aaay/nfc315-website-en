<script  lang="ts">

  import { useRoute } from 'vue-router';
  import { ref } from 'vue';

  export default {
    setup() {
      const route = useRoute();
      // 响应式存储当前路径
      const currentPath = ref(route.path);

      // 监听路由路径变化，实时更新
      watch(
          () => route.path, // 监听的目标：路由路径
          (newPath, oldPath) => {
            console.log('路由变化：', oldPath, '→', newPath);
            currentPath.value = newPath; // 更新响应式变量
          }
      );

      return {
        currentPath,
        navbar:[
          {
            path:'/index.html',
            title:'Home'
          },
          {
            path:'/about_us.html',
            title:'About Us'
          },

          {
            path:'/blog.html',
            title:'Blog'
          },
          {
            path:'/contact_us.html',
            title:'Contact us'
          }
        ]
      };
    }
  };

</script>

<template>

  <!--RD Navbar-->
  <header class="section rd-navbar-wrap" data-preset='{"title":"Navbar Event","category":"header","reload":true,"id":"navbar-event"}'>
    <nav class="rd-navbar navbar-event" data-rd-navbar='{"responsive":{"1200":{"stickUpOffset":"60px"}}}'>
      <div class="navbar-section navbar-non-stuck">
        <div class="navbar-container">
          <div class="navbar-cell flex-grow-1">
            <div class="navbar-info">
              <a class="navbar-info-link navbar-info-link-thin" href="#">
                <span class="navbar-info-icon int-marker novi-icon">
              </span>
                Blackey singapore pte. ltd.
                134 JURONG GATEWAY ROAD#02-309A  600134
              </a><a class="navbar-info-link" href="tel:#"><span class="navbar-info-icon int-phone novi-icon"></span> +65 88758188</a></div>
          </div>
        </div>
      </div>
      <div class="navbar-section">
        <div class="navbar-container">
          <div class="navbar-cell">
            <div class="navbar-panel">
              <button class="navbar-switch int-hamburger novi-icon" data-multi-switch='{"targets":".rd-navbar","scope":".rd-navbar","isolate":"[data-multi-switch]"}'></button>
              <div class="navbar-logo"><a class="navbar-logo-link" href="index.html"><img class="navbar-logo-default" src="@/assets/images/logo-default-202x46.png" alt="NFC315" width="101" height="23"/>
                <img class="navbar-logo-inverse" src="@/assets/images/logo-inverse-202x46.png" alt="OpenWeb" width="101" height="23"/></a></div>
            </div>
          </div>

          <div class="navbar-cell navbar-sidebar">
            <ul class="navbar-navigation rd-navbar-nav">
              <li :class="['navbar-navigation-root-item', item.path ==currentPath ? 'active' :''  ] " v-for="item in navbar">
                <RouterLink class="navbar-navigation-root-link" :to="item.path">{{ item.title }}</RouterLink>
              </li>
            </ul>
          </div>
          <div class="navbar-cell navbar-spacer"></div>
          <div class="navbar-cell">
            <div class="navbar-subpanel">
              <div class="navbar-subpanel-item navbar-subpanel-item-mobile">
                <button class="navbar-button navbar-info-button mdi-dots-vertical novi-icon" data-multi-switch='{"targets":".rd-navbar","scope":".rd-navbar","class":"navbar-info-active","isolate":"[data-multi-switch]"}'></button>
              </div>
              <div class="navbar-subpanel-item">
                <button class="navbar-button navbar-buy-button mdi-account novi-icon" data-multi-switch='{"targets":".rd-navbar","scope":".rd-navbar","class":"navbar-buy-active","isolate":"[data-multi-switch]"}'></button>
                <div class="navbar-buy">
                  <a class="btn btn-sm btn-login navbar-action-button" target="_blank"  href="https://dpp.nfc315.com/">
                    Sign in</a>
                </div>
              </div>
              <div class="navbar-subpanel-item">
                <button class="navbar-button navbar-buy-button mdi-arrow-right-bold-circle novi-icon" data-multi-switch='{"targets":".rd-navbar","scope":".rd-navbar","class":"navbar-buy-active","isolate":"[data-multi-switch]"}'></button>
                <div class="navbar-buy">
                  <RouterLink to="starter.html" class="btn btn-sm btn-rect btn-dark navbar-action-button">Get Started</RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
  .btn-login{
    color: #171724;
    border-color: transparent;
    background-color: transparent;
    box-shadow:transparent
  }
</style>
