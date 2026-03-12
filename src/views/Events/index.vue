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

getEventList();


function getEventList() {
  listRef.value.records = [];
  loading.value = true;

  IndexAPI.eventPage(queryFormRef.value).then((res) => {
    console.log("FULL RESPONSE:", JSON.stringify(res, null, 2));

    if (res.code == 200) {
      listRef.value.total = res.body.page.count; 
      listRef.value.records = res.body.page.data;

      setTimeout(() => {
        loading.value = false;
      }, 1000);
    } 
    else {
      ElMessage({
        message: "warning:" + res.msg,
        type: "warning",
      });
      loading.value = false;
    }
  });
}

const handlePagination = () => {
  getEventList();
};
</script>





<template>
  <!-- Breadcrumb -->
  <breadcrumb />

  <!-- Loading placeholder -->
  <el-table v-if="loading" element-loading-text="Loading..." v-loading="true" empty-text="" style="width: 100%; height: 120px"></el-table>

  <!-- Events list -->
  <div v-else>
    <section class="section section-md bg-transparent novi-background" data-preset='{"title":"Events Classic","category":"events","reload":false,"id":"events-classic-1"}'>
      <div class="container">
        <h1 class="text-center">Events</h1>

        <div class="post-container">
          <div class="post-container-item" v-for="item in listRef.records" :key="item.id">
            <div class="post">

              <!-- Event image -->
              <router-link class="post-img-link" :to="`/single-post.html/${item.id}`">
                <img :src="item.item_pic_url" alt="" width="570" height="366"/>
              </router-link>

              <!-- Event title -->
              <h3 class="post-title">
                <router-link :to="`/single-post.html/${item.id}`">{{ item.title }}</router-link>
              </h3>

              <!-- Event subtitle -->
              <div class="post-text">
                <p>{{ item.subtitle }}</p>
              </div>

              <!-- Event meta: location and time -->
              <div class="post-meta">
                <div class="post-meta-item">
                  <router-link class="post-meta-link" :to="`/single-post.html/${item.id}`">{{ item.deptName }}</router-link>
                </div>

                <div class="post-meta-item">
                  <span class="post-meta-icon int-clock novi-icon"></span>
                  <router-link class="post-meta-link" :to="`/single-post.html/${item.id}`">
                    {{ item.start_time }} - {{ item.end_time }}
                  </router-link>
                </div>
              </div>

              <!-- Footer: Read more -->
              <div class="post-meta post-meta-footer">
                <div class="post-meta-item">
                  <router-link class="btn btn-dark btn-rect post-btn" :to="`/single-post.html/${item.id}`">Read more</router-link>
                </div>
                <div class="post-meta-item">
                  <span class="post-meta-icon int-chat novi-icon"></span>
                  {{ item.joinerNumber }} people joined
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- Pagination -->
        <ul class="pag pag-simple justify-content-center">
          <Pagination
            layout="total, prev, pager, next"
            v-model:page="queryFormRef.page"
            v-model:limit="queryFormRef.size"
            @pagination="handlePagination"
            v-model:total="listRef.total"
          />
        </ul>
      </div>
    </section>
  </div>
</template>


<style scoped lang="scss">
</style>