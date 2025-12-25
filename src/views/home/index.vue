
<script setup lang="ts">
  import IndexAPI from "@/api/index.api.ts";
  import type { FormInstance, FormRules } from 'element-plus'
  import { ref, onMounted, onUnmounted, defineProps, computed, watch } from 'vue';
  // 导入 Swiper 核心组件、幻灯片组件
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // 导入 Swiper 基础样式 + 分页器样式
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  // 导入“分页器”功能模块
  import { Autoplay,Pagination,Navigation } from 'swiper';

  // 注册 Swiper 所需模块（此处仅需“分页器”）
  const modules = [Autoplay,Pagination,Navigation];



  interface RuleForm {
    contactName: string
    contactEmail: string
    contactPhone: string
    subject: string
    message: string

  }

  const ruleFormRef = ref<FormInstance>()
  const ruleForm = reactive<RuleForm>({
    contactName: '',
    contactEmail: '',
    message: '',
    contactPhone: '',
    subject: '',

  })
  const rules = reactive<FormRules<RuleForm>>({

    contactName: [
      { required: true, message: 'Please input Your name', trigger: 'blur' },
    ],
    contactEmail: [
      { required: true, message: 'Please input Your e-mail address', trigger: 'blur' },
      {
        type: 'email',
        message: 'Please input correct email address',
        trigger: ['blur', 'change'],
      },
    ],
    message: [
      { required: true, message: 'Please input Your message', trigger: 'blur' },
    ],
  })

  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
      if (valid) {
        IndexAPI.saveMessage(ruleForm).then(res=>{
          if(res.code == 200){
            ElMessage({
              message: 'Your needs are received! We’ll reach out soon.',
              type: 'success',
            })
            setTimeout(()=>{
              ruleForm.contactName = ''
              ruleForm.contactEmail = ''
              ruleForm.message = ''
            },1000)
          }else{
            ElMessage({
              message: 'Temporary submission failure. Please try again later.',
              type: 'warning',
            })
          }
        })
      } else {
        console.log('error submit!', fields)
      }
    })
  }

</script>

<template>

  <!-- Intro-->
  <section class="section section-lg d-flex align-items-center min-vh-100 novi-background" data-preset='{"title":"Intro","category":"intro","reload":false,"id":"intro-8"}'>
    <div class="container">
      <div class="bg-image py-5 px-3 px-md-0 novi-background container-novi-background" >
        <div class="row novi-disabled">
          <div class="col-md-9 col-lg-7 col-xl-6">
            <h3 data-animate='{"class":"fadeInUp"}'>Made for Brands</h3>
            <h1 data-animate='{"class":"fadeInUp","delay":"0.15s"}'>NFC315</h1>
            <p data-animate='{"class":"fadeInUp","delay":"0.3s"}'>
              <span class="d-inline-block" style="max-width:460px ;color: black">
                NFC315 is a Connected Product Platform that unifies compliance, traceability, sustainability, and customer experience — giving every product a digital identity, a story, and a future.
              </span>
            </p>
            <div class="offset-md" data-animate='{"class":"fadeInUp","delay":"0.45s"}'>
              <RouterLink to="starter.html" class="btn btn-lg btn-rect btn-dark">Get Started</RouterLink>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-image  px-3 px-md-0 novi-background target-img" >
        <div class="row novi-disabled">
          <img src="@/assets/images/image-00-1280x500.png">
        </div>
      </div>
    </div>
  </section>
  <!-- Intro video-->
  <section class="section section-xl section-layer context-dark pb-0" data-preset='{"title":"Intro","category":"content box, media","reload":true,"id":"intro-9"}'>
    <div class="bg-layer bg-gray-custom novi-background" style="bottom: 30%"></div>
    <div class="container">
      <div class="row justify-content-center row-40 row-lg-50 row-xl-70 row-xxl-90">
        <div class="col-12" data-animate='{"class":"fadeInUp"}'>
          <div class="row novi-disabled">
            <div class="col-md-10 col-xl-9">
              <h3>Enable flexible transparency for your products without replacing any of your IT infrastructure or workflows.</h3>
              <ul class="list list-xs">
                <li class="text-contrast font-weight-normal">Seamless Adaptation</li>
                <li class="text-contrast font-weight-normal">Digital Product Passports</li>
                <li class="text-contrast font-weight-normal">Real Value</li>
                <li class="text-contrast font-weight-normal">Beyond Regulation</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-10 col-lg-8" data-lightgallery data-animate='{"class":"fadeIn"}'>
          <!-- Video-->
          <article class="video lightgallery-item" data-html="#0sduc5rj38p"><img class="video-image" src="@/assets/images/image-02-840x473.jpg" alt="" width="840" height="473"/>
            <div class="video-link">
              <div class="icon icon-circle icon-sm video-icon fa-play novi-icon"></div>
            </div>
          </article>
          <div class="d-none" id="0sduc5rj38p">
            <video class="lg-video-object lg-html5" controls="" preload="none">
              <source src="@/assets/video/bg-video.mp4" type="video/mp4">Your browser does not support HTML5 video.
            </video>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Offer-->
  <section class="section section-xl bg-transparent novi-background" data-preset='{"title":"Offers","category":"offer box","reload":false,"id":"offer-2"}'>
    <div class="container">
      <div class="row justify-content-center row-40 row-lg-50 row-xl-70 row-xxl-90">
        <div class="col-md-6" data-animate='{"class":"fadeInLeft"}'>
          <!-- Offer box divided-->
          <div class="offer-box offer-box-divided">
            <h6 class="offer-box-subtitle">Embrace</h6>
            <h3 class="offer-box-title">Transparency</h3>
            <hr class="divider divider-dark offer-box-divider">
            <div class="offer-box-text">
              Get a comprehensive overview of your value chain, product origin and partners. Share the insight with customers, economic operators, and authorities to build identity and authenticity, and show compliance.
            </div><router-link class="btn btn-lg btn-dark rounded-0 offer-box-btn" to="/blog.html">Learn More</router-link>
          </div>
        </div>
        <div class="col-md-6" data-animate='{"class":"fadeInRight"}'>
          <!-- Offer box divided-->
          <div class="offer-box offer-box-divided">
            <h6 class="offer-box-subtitle">Streamline</h6>
            <h3 class="offer-box-title">Data Sharing</h3>
            <hr class="divider divider-dark offer-box-divider">
            <div class="offer-box-text">Integrate and categorise all information from supply chain, sustainability, and operations with a flexible, smart, and easy-to-use platform. Include documentation for quality, certifications, and authentication for products.</div>
            <router-link class="btn btn-lg btn-dark rounded-0 offer-box-btn" to="/blog.html">Learn More</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Workshops-->
  <section class="section section-xl bg-200 novi-background" data-preset='{"title":"Workshops","category":"content box","reload":false,"id":"workshops"}'>
    <div class="container content-row-area">
      <h1 class="text-center text-md-left" data-animate='{"class":"fadeInUp"}'>Made for Brands</h1>
      <p class="text-center text-md-left" style="max-width: 680px" data-animate='{"class":"fadeInUp"}'>
        <span class="h6">

        </span>
      </p>
      <!-- Content row-->
      <div class="content-row content-row-max-width" data-animate='{"class":"fadeInUp"}'>
        <div class="content-row-item">
          <img class="content-row-img-shadow" src="@/assets/images/image-icon-01-180x180.jpg" alt="" width="120" height="120"/>
        </div>
        <div class="content-row-item content-row-body">
          <h5 class="content-row-title">
            <span class="content-row-title-item">Flexible Storytelling</span></h5>
          <div class="content-row-text">
            Tell your story and connect with your customers through digital product passports
          </div>
        </div>
      </div>
      <!-- Content row-->
      <div class="content-row content-row-max-width" data-animate='{"class":"fadeInUp"}'>
        <div class="content-row-item">
          <img class="content-row-img-shadow" src="@/assets/images/image-icon-01-180x180.jpg" alt="" width="120" height="120"/>
        </div>
        <div class="content-row-item content-row-body">
          <h5 class="content-row-title"><span class="content-row-title-item">Commercial Enhancement</span></h5>
          <div class="content-row-text">Generate revenue and increase loyalty with cross-selling, circular services and other modules</div>
        </div>
      </div>
      <!-- Content row-->
      <div class="content-row content-row-max-width" data-animate='{"class":"fadeInUp"}'>
        <div class="content-row-item">
          <img class="content-row-img-shadow" src="@/assets/images/image-icon-01-180x180.jpg" alt="" width="120" height="120"/>
        </div>
        <div class="content-row-item content-row-body">
          <h5 class="content-row-title"><span class="content-row-title-item">Data Completeness</span></h5>
          <div class="content-row-text">Elevate your products with custom fields and any data types from your connected sources.</div>
        </div>
      </div>
      <!-- Content row-->
      <div class="content-row content-row-max-width" data-animate='{"class":"fadeInUp"}'>
        <div class="content-row-item">
          <img class="content-row-img-shadow" src="@/assets/images/image-icon-01-180x180.jpg" alt="" width="120" height="120"/>
        </div>
        <div class="content-row-item content-row-body">
          <h5 class="content-row-title"><span class="content-row-title-item">Developer Optional</span></h5>
          <div class="content-row-text">Share your products with customizable templates, or build your own frontend using our APIs.</div>
        </div>
      </div>
      <!-- Content row-->
      <div class="content-row content-row-max-width" data-animate='{"class":"fadeInUp"}'>
        <div class="content-row-item">
          <img class="content-row-img-shadow" src="@/assets/images/image-icon-01-180x180.jpg" alt="" width="120" height="120"/>
        </div>
        <div class="content-row-item content-row-body">
          <h5 class="content-row-title"><span class="content-row-title-item">Module Based</span></h5>
          <div class="content-row-text">Avoid irrelevant features; activate and utilize the functionality that you actually want.</div>
        </div>
      </div>
      <!-- Content row-->
      <div class="content-row content-row-max-width" data-animate='{"class":"fadeInUp"}'>
        <div class="content-row-item">
          <img class="content-row-img-shadow" src="@/assets/images/image-icon-01-180x180.jpg" alt="" width="120" height="120"/>
        </div>
        <div class="content-row-item content-row-body">
          <h5 class="content-row-title"><span class="content-row-title-item">Product Journey</span></h5>
          <div class="content-row-text">Tell the true story, from raw material to end-of-life, instead of uninterpretable data points.</div>
        </div>
      </div>
      <!-- Content row-->
      <div class="content-row content-row-max-width" data-animate='{"class":"fadeInUp"}'>
        <div class="content-row-item">
          <img class="content-row-img-shadow" src="@/assets/images/image-icon-01-180x180.jpg" alt="" width="120" height="120"/>
        </div>
        <div class="content-row-item content-row-body">
          <h5 class="content-row-title"><span class="content-row-title-item">No-code Integrated</span></h5>
          <div class="content-row-text">Connect and fetch data from any system already in your tech stack, without the need for coding.</div>
        </div>
      </div>
    </div>
  </section>
  <!-- Tickets-->
  <section class="section section-lg bg-transparent novi-background" data-preset='{"title":"Tickets","category":"content box","reload":false,"id":"tickets"}'>
    <div class="container content-row-area text-center text-md-left">
      <h1 data-animate='{"class":"fadeIn"}'>Packages</h1>
      <!-- Content row-->
      <div class="content-row content-row-sm" data-animate='{"class":"fadeInRightBig"}'>
        <div class="content-row-item content-row-body">
          <h6 class="content-row-title">Essential features for  generating digital product passports </h6>
        </div>
        <div class="content-row-item">
          <router-link class="btn btn-lg btn-dark content-row-btn rounded-0" to="/starter.html">Get Packages</router-link></div>
      </div>
      <!-- Content row-->
      <div class="content-row content-row-sm" data-animate='{"class":"fadeInRightBig","delay":"0.15s"}'>
        <div class="content-row-item content-row-body">
          <h6 class="content-row-title">DPP with WMS and  after-sales service</h6>
        </div>
        <div class="content-row-item">
          <router-link class="btn btn-lg btn-dark content-row-btn rounded-0" to="/starter.html">Get Packages</router-link></div>
      </div>
      <!-- Content row-->
      <div class="content-row content-row-sm" data-animate='{"class":"fadeInRightBig","delay":"0.3s"}'>
        <div class="content-row-item content-row-body">
          <h6 class="content-row-title">Private server, independent deployment, unlimited use and customerized functions</h6>
        </div>
        <div class="content-row-item">
          <router-link class="btn btn-lg btn-dark content-row-btn rounded-0" to="/starter.html">Get Packages</router-link></div>
      </div>
    </div>
  </section>
  <!-- Venue-->
  <section class="section section-lg bg-gray-custom context-dark novi-background" data-preset='{"title":"Venue","category":"content box","reload":false,"id":"venue"}'>
    <div class="container">
      <div class="row row-30 justify-content-between flex-md-row-reverse">
        <div class="col-md-6">
          <swiper
            style="height: 100%"
            :slidesPerView="2"
            :spaceBetween="30"
            :autoplay="{
              delay: 1500,
              pauseOnMouseEnter: true,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
              waitForTransition: true,
            }"
            :pagination="{
            clickable: true,
            }"
            :modules="modules">
            <swiper-slide><img src="@/assets/images/image-samples-01.png" alt=""   data-animate='{"class":"fadeIn"}'/></swiper-slide>
            <swiper-slide><img src="@/assets/images/image-samples-02.png" alt=""   data-animate='{"class":"fadeIn"}'/></swiper-slide>
          </swiper>

        </div>
        <div class="col-md-6 col-xl-5 dl-area">
          <h1 data-animate='{"class":"fadeIn"}'>Samples</h1>
          <dl data-animate='{"class":"fadeInLeftBig"}'>
            <dd class="text-contrast">If you need DPP samples (NFC or QRCode), you can purchase them from our online store.</dd>
          </dl>
          <dl data-animate='{"class":"fadeInLeftBig","delay":"0.15s"}'>

            <dt class="font-weight-normal">Shopee</dt>
            <dd class="text-contrast">Place your order here, and we will send you samples from Singapore.</dd>
            <a href="https://shopee.sg/shop/356908725" class="btn btn-lg btn-rect btn-dark">Get Sample</a>
          </dl>
          <dl data-animate='{"class":"fadeInLeftBig","delay":"0.3s"}'>
            <dt class="font-weight-normal">AliExpress</dt>
            <dd class="text-contrast">Place your order here, and we will send you samples from Gemany.</dd>
            <a href="https://shopee.sg/shop/356908725" class="btn btn-lg btn-rect btn-dark">Get Sample</a>
          </dl>
        </div>
      </div>
    </div>
  </section>
  <!-- Get in touch-->
  <section class="section section-layer" data-preset='{"title":"Get In Touch","category":"form, contacts","reload":true,"id":"get-in-touch-2"}'>
    <div class="bg-layer bg-gray-custom novi-background" style="bottom: 27%"></div>
    <div class="container">
      <div class="row justify-content-center novi-disabled">
        <div class="col-md-10 col-lg-9 col-xl-8">
          <h1 class="context-dark text-center" data-animate='{"class":"fadeIn"}'>Get in touch</h1>
          <article class="accent-box rounded-0" data-animate='{"class":"fadeInUp"}'>
            <h4 class="accent-box-title">Have a question regarding our event? Feel free to contact us using the form below.</h4>
            <p class="accent-box-text">You can also email us with any questions or inquiries or use our contact data.</p>
            <el-form ref="ruleFormRef"
                     size="large"
                     :model="ruleForm"
                     :rules="rules"
                      class="accent-box-form rd-mailform" data-form-output="form-output-global" data-form-type="contact" >
              <div class="form-row row-15 novi-disabled">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="input-name">Name:</label>
                    <div class="position-relative">
                      <el-form-item  prop="contactName" >
                        <el-input v-model="ruleForm.contactName" type="text" placeholder="Your name" />
                      </el-form-item>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="input-email">E-mail:</label>
                    <div class="position-relative">
                      <el-form-item  prop="contactEmail">
                        <el-input v-model="ruleForm.contactEmail" type="email" placeholder="Your e-mail address" />
                      </el-form-item>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="input-tel">Phone:</label>
                    <div class="position-relative">
                      <el-form-item  >
                        <el-input v-model="ruleForm.contactPhone"  placeholder="X-XXX-XXX-XXXX" />
                      </el-form-item>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="input-subject">Subject:</label>
                    <div class="position-relative">

                      <el-form-item  >
                        <el-input v-model="ruleForm.subject"  placeholder="Subject" />
                      </el-form-item>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <label for="input-question">Question:</label>
                    <div class="position-relative">

                      <el-form-item  prop="message">
                        <el-input  v-model="ruleForm.message" placeholder="Your message" type="textarea"  :rows="5"/>
                      </el-form-item>
                    </div>
                  </div>
                </div>
              </div>
              <div class="offset-xs group-20 d-flex flex-wrap justify-content-between align-items-center">
                <div>
                  <button class="btn btn-lg btn-dark accent-box-btn rounded-0" type="button" @click="submitForm(ruleFormRef)">Submit</button>
                </div>
                <div class="small">By clicking the button you agree to<br>the
                  <u class="font-weight-medium"><router-link class="link-inherit" to="privacy_policy.html">Privacy Policy</router-link></u> and
                  <u class="font-weight-medium"><router-link class="link-inherit" to="/index.html">Terms and Conditions</router-link></u>
                </div>
              </div>
            </el-form>
          </article>
          <div class="form-output snackbar snackbar-secondary" id="form-output-global"></div>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped lang="scss">

.container-novi-background{
  background-repeat: no-repeat;
  background-position: right center;
  background-color: white;
}

/* 默认样式：小屏幕（≤768px）显示图片 */
.target-img {
  /* 可选：设置图片基础样式 */
  margin-top: 10px;
  height: 100%;
}

/* 大屏幕（>768px）隐藏图片 */
@media (min-width: 991px) {
  .target-img {
    display: none; /* 完全隐藏，不占空间 */
  }
  .container-novi-background{
    background-image: url('@/assets/images/image-01-1280x500.png')
  }
}
</style>
