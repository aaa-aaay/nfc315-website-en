<script>

</script>

<template>

  <!-- FOOTER -->

  <!-- Footer event-->
  <footer class="section footer bg-transparent novi-background" data-preset='{"title":"Footer Event","category":"footer","reload":true,"id":"footer-event"}'>
    <div class="container">
      <div class="row row-40 row-md-50 justify-content-md-between justify-content-xl-end">
        <div class="col-xs-4 col-lg-2">
          <!-- Logo-->
          <div class="logo"><a class="logo-link" href="index.html"><img class="logo-image-default" src="@/assets/images/logo-default-202x46.png" alt="OpenWeb" width="101" height="23"/><img class="logo-image-inverse" src="@/assets/images/logo-inverse-202x46.png" alt="OpenWeb" width="101" height="23"/></a></div>
        </div>
        <div class="col-6 col-xs-4 col-lg-2">
          <ul class="list list-xl small font-weight-normal">
            <li class="list-item"><router-link class="list-link" to="/index.html">Speakers</router-link></li>
            <li class="list-item"><router-link class="list-link" to="/index.html">Schedule</router-link></li>
            <li class="list-item"><router-link class="list-link" to="/starter.html">Tickets</router-link></li>
            <li class="list-item"><router-link class="list-link" to="/index.html">Venue</router-link></li>
          </ul>
        </div>
        <div class="col-6 col-xs-4 col-lg-3">
          <h6>Get in touch at</h6>
          <div class="mt-2"><a class="small font-weight-normal" href="mailto:#">support@blackey.sg</a></div>
        </div>
        <div class="col-md-9 col-lg-5 col-xl-4 offset-xl-1">
          <h6>Subscribe to our newsletter</h6>
          <form class="rd-mailform" data-form-output="form-output-footer-event" data-form-type="subscribe" method="post" action="components/rd-mailform/rd-mailform.php">
            <div class="form-group-icon novi-disabled">
              <input class="form-control form-control-sm-fsz" type="email" name="email" placeholder="Enter your email address" data-constraints="@Email @Required">
              <button class="form-group-icon-btn int-arrow-right novi-icon"></button>
            </div>
          </form>
          <div class="form-output snackbar snackbar-dark" id="form-output-footer-event"></div>
        </div>
      </div>
      <hr class="divider divider-sm footer-divider">
      <div class="footer-panel">
        <div class="group-20 d-flex flex-wrap align-items-center justify-content-between novi-disabled">
          <div>
            <div class="group-x-30 d-inline-flex flex-wrap">
              <a class="footer-link" href="#">Cookies</a><router-link class="footer-link" to="privacy_policy.html">Privacy Policy</router-link>
              <a class="footer-link" href="#">Data-retention policy</a><a class="footer-link" href="#">Code of Conduct</a></div>
          </div>
          <div>
            <div class="group-30 d-inline-flex text-900"><a class="icon icon-xs icon-social int-youtube novi-icon" href="#"></a><a class="icon icon-xs icon-social int-facebook novi-icon" href="#"></a><a class="icon icon-xs icon-social int-instagram novi-icon" href="#"></a><a class="icon icon-xs icon-social int-twitter novi-icon" href="#"></a><a class="icon icon-xs icon-social int-linkedin novi-icon" href="#"></a></div>
          </div>
        </div>
        <!-- Copyright-->
        <p class="rights"><span>&copy; 2025&nbsp;</span><span>. All rights reserved</span> <a target="_blank" href="https://www.mobanwang.com/" title="网站模板">网站模板</a></p>
      </div>
    </div>
  </footer>
  <!-- END / FOOTER -->
</template>

<style scoped lang="scss">

</style>
