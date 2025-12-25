<script setup lang="ts">
  import IndexAPI from "@/api/index.api.ts";
  import Pagination from '@/components/Pagination/index.vue'
  const queryFormRef = ref({
    page:1,
    size:10
  })
  const listRef = ref({
    total:0,
    records:[]
  })
  const loading = ref(false)
  getBlogList();
  function getBlogList() {
    listRef.value.records = []
    loading.value = true;
    IndexAPI.blogPage(queryFormRef.value).then(res=>{
      if(res.code == 200){
        listRef.value.total = res.body.page.totalCount
        listRef.value.records = res.body.page.list
        setTimeout(function () {
          loading.value = false
        }, 1000);
      }else{
        ElMessage({
          message: res.msg,
          type: 'warning',
        })
      }
    })
  }
  const handlePagination = () => {
    getBlogList();
  }
</script>

<template>
  <!-- Breadcrumb default-->
  <breadcrumb/>
  <el-table v-if="loading" element-loading-text="Loading..." v-loading="true" empty-text="" style="width: 100% ;height: 120px"></el-table>
  <dev v-else>
    <!-- Classic layout cretive-->
    <section class="section section-md bg-transparent novi-background" data-preset='{"title":"Blog Classic","category":"blog","reload":false,"id":"blog-classic-4"}'>
      <div class="container">
        <h1 class="text-center">Classic blog</h1>
        <div class="post-container">
          <div class="post-container-item" v-for="item in listRef.records">
            <!-- Post classic 1-->
            <div class="post">
              <router-link class="post-img-link" :to="`/single-post.html/${item.id}`">
                <img :src="item.frontImage" alt="" width="570" height="366"/>
              </router-link>
              <h3 class="post-title">
                <router-link :to="`/single-post.html/${item.id}`">{{item.title}}</router-link>
              </h3>
              <div class="post-meta">
                <div class="post-meta-item">
                  <router-link class="post-meta-link" :to="`/single-post.html/${item.id}`">News</router-link>
                </div>

                <div class="post-meta-item">
                  <span class="post-meta-icon int-clock novi-icon"></span>
                  <router-link class="post-meta-link" :to="`/single-post.html/${item.id}`">{{item.addtime}}</router-link>
                </div>
              </div>
              <div class="post-text" >
              </div>
              <div class="post-meta post-meta-footer">
                <div class="post-meta-item">
                  <router-link class="btn btn-dark btn-rect post-btn" :to="`single-post.html/${item.id}`">Read more</router-link></div>
                <div class="post-meta-item"><span class="post-meta-icon int-chat novi-icon"></span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <ul class="pag pag-simple justify-content-center">
          <Pagination  layout="total, prev, pager, next"
                       v-model:page="queryFormRef.page"
                       v-model:limit="queryFormRef.size"
                       @pagination="handlePagination" v-model:total="listRef.total" />
        </ul>
      </div>
    </section>
  </dev>

</template>

<style scoped lang="scss">

</style>
