<script setup lang="ts">
  import IndexAPI from "@/api/index.api.ts";
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router'; // 引入路由信息
  // 监听参数变化（比如同一页面切换不同文章，组件复用场景）
  import { watch } from 'vue';
  const route = useRoute();
  const id = ref(route.params.id);

  const postDetail = ref({});
  const nextPost = ref({});
  const prePost = ref({});
  const loading = ref(false)
  const fetchPostDetail = (postId) => {
    console.log('请求文章详情：', postId);
    loading.value = true;
    IndexAPI.fetchPostDetail(postId).then(res=>{
        if(res.code == 200){
          postDetail.value = res.body.sysArticle;
          setTimeout(()=>{
            loading.value = false;
          },1000)
        }else{
          ElMessage({
            message: res.msg,
            type: 'warning',
          })
        }
      })
  };
  const getPreAndNext = (postId) => {
    console.log('getPreAndNext：', postId);
    IndexAPI.getPreAndNext(postId).then(res=>{
      if(res.code == 200){
        nextPost.value = res.body.next;
        prePost.value = res.body.pre;
      }else{
        ElMessage({
          message: res.msg,
          type: 'warning',
        })
      }
    })
  };


  const formatDate = (dateStr) => {
    if (!dateStr) return '';

    // 1. 提取日期部分（忽略时间）：截取前 10 位（YYYY-MM-DD）
    const datePart = dateStr.slice(0, 10);

    // 2. 校验日期格式（YYYY-MM-DD）
    if (!/^\d{4}-\d{2}-\d{2}$/.test(datePart)) return '无效日期';

    // 3. 解析年、月、日（月份是 0 开始，需减 1）
    const [year, month, day] = datePart.split('-').map(Number);

    // 4. 英文完整月份映射
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // 5. 拼接格式（日期不带前导零，直接用 day 即可）
    return `${monthNames[month - 1]} ${day}, ${year}`;
  };
  watch(
    () => route.params.id,
    (newId) => {
      id.value = newId;
      // 重新请求文章数据
      fetchPostDetail(newId);
      getPreAndNext(newId);
    },
    { immediate: true } // 初始化时执行一次
  );
</script>

<template>
  <breadcrumb/>
  <el-table v-if="loading" element-loading-text="Loading..." v-loading="true" empty-text="" style="width: 100% ;height: 120px"></el-table>
  <div v-else>
    <!-- Post without sidebar-->
    <section class="section section-md bg-transparent novi-background" data-preset='{"title":"Post Without Sidebar","category":"blog","reload":true,"id":"post-without-sidebar"}'>
      <div class="container">
        <div class="row row-40 justify-content-xxl-between novi-disabled">

          <div class="col-md-12">
            <div class="blog-article clearfix">
              <div class="post-meta post-meta-between">
                <div class="post-meta-item">
                  <a class="post-meta-link post-meta-linkbox" href="#">News</a></div>
                <span class="post-icon int-clock novi-icon"></span>
                <span class="post-meta-text">{{formatDate(postDetail.addtime)}} </span>

              </div>
              <h2></h2>
              <figure class="figure">
                <img class="figure-img" :src="postDetail.frontImage" alt="" width="840" height="540"/>
              </figure>
              <p v-html="postDetail.content"></p>
              <div class="post-share post-share-1">
                <div class="post-share-title">Share</div><a class="post-share-icon int-facebook novi-icon" href="#"></a><a class="post-share-icon int-twitter novi-icon" href="#"></a>
              </div>
              <hr class="divider divider-sm post-single-divider" v-if="prePost || nextPost">
              <h3 class="blog-article-subtitle" v-if="prePost || nextPost">Related posts</h3>
              <div class="row row-40">
                <div class="col-xs-10 col-sm-6" v-if="prePost && prePost.id">
                  <!-- Post classic-->
                  <div class="post post-sm">
                    <router-link class="post-img-link" :to="`/single-post.html/${prePost.id}`">
                      <img :src="prePost.frontImage" alt="" width="400" height="257"/>
                    </router-link>
                    <div class="post-meta">
                      <div class="post-meta-item">
                        <router-link class="post-meta-link" :to="`/single-post.html/${prePost.id}`">News</router-link></div>
                      <div class="post-meta-item"><span class="post-meta-icon int-clock novi-icon">

                    </span>
                        <router-link class="post-meta-link" :to="`/single-post.html/${prePost.id}`">{{ formatDate(prePost.addtime) }}</router-link></div>
                    </div>
                    <h5 class="post-title"><router-link :to="`/single-post.html/${prePost.id}`">{{prePost.title}}</router-link></h5>
                    <div class="post-meta">
                      <div class="post-meta-item">
                        <router-link class="btn btn-dark btn-rect post-btn" :to="`/single-post.html/${prePost.id}`">Read more</router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xs-10 col-sm-6" v-if="nextPost && nextPost.id">
                  <!-- Post classic-->
                  <div class="post post-sm">
                    <router-link class="post-img-link" :to="`/single-post.html/${nextPost.id}`">
                      <img :src="nextPost.frontImage" alt="" width="400" height="257"/>
                    </router-link>
                    <div class="post-meta">
                      <div class="post-meta-item">
                        <router-link class="post-meta-link" :to="`/single-post.html/${nextPost.id}`">News</router-link></div>
                      <div class="post-meta-item"><span class="post-meta-icon int-clock novi-icon">

                    </span>
                        <router-link class="post-meta-link" :to="`/single-post.html/${nextPost.id}`">{{ formatDate(nextPost.addtime) }}</router-link></div>
                    </div>
                    <h5 class="post-title"><router-link :to="`/single-post.html/${nextPost.id}`">{{nextPost.title}}</router-link></h5>
                    <div class="post-meta">
                      <div class="post-meta-item">
                        <router-link class="btn btn-dark btn-rect post-btn" :to="`/single-post.html/${nextPost.id}`">Read more</router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="divider divider-sm post-single-divider">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<style scoped lang="scss">

</style>
