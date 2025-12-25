<script setup lang="ts">

</script>

<template>
  <breadcrumb/>


  <section class="section section-lg bg-transparent novi-background" data-preset='{"title":"Pricing Box","category":"price","reload":true,"id":"pricing-box"}'>
    <div class="container">
      <div class="row justify-content-center text-center text-lg-left">
        <div class="col-12">
          <h1>Packages</h1>
          <p style="color: black">
            We offer two deployment options: SaaS and private deployment. Private deployment is suitable for large enterprise with dedicated servers. SaaS is suitable for SME, and offers two packages: Starer and Pro.
          </p>
        </div>
      </div>

    </div>
  </section>

  <section class="section section-lg bg-transparent novi-background" data-preset='{"title":"Tickets","category":"content box","reload":false,"id":"tickets"}'>
    <div class="container">
      <div class="row justify-content-center text-center text-lg-left">
        <div class="col-12">
          <h1>Choose a Package</h1>
        </div>
      </div>
      <div class="plans">
        <div class="row row-30  novi-disabled">
          <div class="col-lg-4">
            <div class="pricing pricing-box">
              <div class="pricing-box-header">
                <div class="pricing-box-title h3">Starter</div>
                <div class="pricing-box-subtitle lead ">Essential features for  generating digital product passports </div>
                <div class="pricing-box-divider"></div>
              </div>
              <div class="pricing-box-body">
                <div class="pricing-box-value">USD 99
                  <span>per month</span>
                </div>
                <ul class="pricing-box-list">
                  <li><span class="pricing-box-list-icon novi-icon int-check-circle-filled"></span>20 User Account</li>
                  <li><span class="pricing-box-list-icon novi-icon int-check-circle-filled"></span>50 Product Types</li>
                  <li><span class="pricing-box-list-icon novi-icon int-check-circle-filled"></span>100.000 Digital Product Passports per year</li>
                  <li><span class="pricing-box-list-icon novi-icon int-check-circle-filled"></span>DPP（QR/NFC/RFID） Management</li>
                  <li><span class="pricing-box-list-icon novi-icon int-check-circle-filled"></span>Customer Management</li>
                  <li><span class="pricing-box-list-icon novi-icon int-check-circle-filled"></span>Order Management</li>
                  <li><span class="pricing-box-list-icon novi-icon int-check-circle-filled"></span>Order Delivery Management</li>
                </ul>
                <button class="btn btn-block btn-lg btn-rect btn-dark pricing-box-btn btn-primary">Get Package</button>
                <div class="pricing-box-links"><span>or</span><a class="pricing-box-link" href="#">See More Features</a></div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="pricing pricing-box ">
              <div class="pricing-box-header">
                <div class="pricing-box-title h3">Pro</div>
                <div class="pricing-box-subtitle lead">DPP with WMS and  after-sales service  </div>
                <div class="pricing-box-divider"></div>
              </div>
              <div class="pricing-box-body">
                <div class="pricing-box-value">USD 599
                  <span>per month</span>
                </div>
                <ul class="pricing-box-list">
                  <li><span class="pricing-box-list-icon novi-icon int-check-circle-filled"></span>Everything in Starter</li>
                  <li><span class="pricing-box-list-icon novi-icon int-check-circle-filled"></span>100 User Account</li>
                  <li><span class="pricing-box-list-icon novi-icon int-check-circle-filled"></span>500 Product Types</li>
                  <li><span class="pricing-box-list-icon novi-icon int-check-circle-filled"></span>1.000.000 Digital Product Passports per year</li>
                  <li><span class="pricing-box-list-icon novi-icon int-check-circle-filled"></span>Warehouse Management</li>
                  <li><span class="pricing-box-list-icon novi-icon int-check-circle-filled"></span>After-sales Service</li>

                </ul>
                <button class="btn btn-block btn-lg btn-rect btn-dark pricing-box-btn btn-primary">Get Package</button>
                <div class="pricing-box-links"><span>or</span><a class="pricing-box-link" href="#">See More Features</a></div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="pricing pricing-box">
              <div class="pricing-box-header">
                <div class="pricing-box-title h3">Enterprise</div>
                <div class="pricing-box-subtitle lead">Private server, independent deployment, unlimited use and customerized functions
                </div>
                <div class="pricing-box-divider"></div>
              </div>
              <div class="pricing-box-body">
                <div class="pricing-box-value">Let's talk
                </div>
                <ul class="pricing-box-list">
                  <li><span class="pricing-box-list-icon novi-icon int-check-circle-filled"></span>Everything in Pro</li>
                  <li><span class="pricing-box-list-icon novi-icon int-check-circle-filled"></span>unlimited User Account</li>
                  <li><span class="pricing-box-list-icon novi-icon int-check-circle-filled"></span>Unlimited Product Types</li>
                  <li><span class="pricing-box-list-icon novi-icon int-check-circle-filled"></span>Unlimited Digital Product Passports</li>
                  <li><span class="pricing-box-list-icon novi-icon int-check-circle-filled"></span>Customerized functions</li>

                </ul>
                <button class="btn btn-block btn-lg btn-rect btn-dark pricing-box-btn btn-primary">Get Package</button>
                <div class="pricing-box-links"><span>or</span><a class="pricing-box-link" href="#">See More Features</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped lang="scss">
.pricing-box-subtitle{
  min-height: 120px;
}
.pricing-box-list{
  list-style-type: none;
  padding-left: 0;
  min-height: 320px;
}
.pricing-box-value span{
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.2;
  color: #171724;
}
</style>
