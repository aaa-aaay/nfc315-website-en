<script setup lang="ts">
  import IndexAPI from "@/api/index.api.ts";
  import type { FormInstance, FormRules } from 'element-plus'
  interface RuleForm {
    contactName: string
    contactEmail: string
    message: string

  }

  const ruleFormRef = ref<FormInstance>()
  const ruleForm = reactive<RuleForm>({
    contactName: '',
    contactEmail: '',
    message: '',

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

  <breadcrumb/>

  <!-- Contact us-->
  <section class="section section-md bg-transparent novi-background" data-preset='{"title":"Contact Us","category":"contacts","reload":true,"id":"contact-us-2"}'>
    <div class="container">
      <div class="row row-40">
        <div class="col-sm-10 col-md-6">
          <h3>How to find us</h3>
          <p>You can always visit us in our comfortable office. View its address and opening hours or call/email us directly using the information below.</p>
          <div class="offset-md">
            <div class="d-inline-flex align-items-center"><span class="icon icon-xs int-phone novi-icon mr-2"></span>
              <div class="h5"><a href="tel:#">+65 88758188</a></div>
            </div>
          </div>
          <div class="offset-xs">
            <div class="h5">Blackey singapore pte. ltd. 134 JURONG GATEWAY ROAD#02-309A 600134</div>
          </div>
          <ul class="list list-xs small">
            <li class="list-item">Monday-Friday: 8am - 6pm</li>
            <li class="list-item">Saturday-Sunday: 8am - 2pm</li>
            <li class="list-item">Holidays: closed</li>
          </ul>
          <ul class="list list-xl">
            <li class="list-item"><a class="link link-dark" href="mailto:#">support@blackey.sg</a></li>
          </ul>
        </div>
        <div class="col-md-6">
          <h3>Get in touch</h3>
          <el-form ref="ruleFormRef"
                   size="large"
                   :model="ruleForm"
                   :rules="rules" :class="rd-mailform" data-form-output="form-output-global" data-form-type="contact" >
            <div class="form-group">
              <label for="input-name">Name:</label>
              <div class="position-relative">
                <el-form-item  prop="contactName">
                  <el-input v-model="ruleForm.contactName" type="text" placeholder="Your name" />
                </el-form-item>
              </div>
            </div>
            <div class="form-group">
              <label for="input-email">E-mail:</label>
              <div class="position-relative">

                <el-form-item  prop="contactEmail">
                  <el-input v-model="ruleForm.contactEmail" type="email" placeholder="Your e-mail address" />
                </el-form-item>
              </div>
            </div>
            <div class="form-group">
              <label for="input-question">Message:</label>
              <div class="position-relative">
                <el-form-item  prop="message">
                  <el-input  v-model="ruleForm.message" placeholder="Your message" type="textarea"  :rows="5"/>
                </el-form-item>
              </div>
            </div>
            <button class="btn btn-lg btn-dark" type="button" @click="submitForm(ruleFormRef)" >Send</button>
          </el-form>
          <div class="form-output snackbar snackbar-secondary" id="form-output-global"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>
