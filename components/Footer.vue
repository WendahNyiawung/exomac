<template>
  <div class="footer">
    <div class="container">
    <!-- Footer Top Widgets Start -->
      <div class="row">
        <div class="col-lg-6">
          <h5 style="color:#748494">Notre emplacement</h5>
          <span class>
            <p>
              <a href>{{ footerData.footerAboutWidget.location }}</a>
            </p>
          </span>
          <p>
            <a href>{{ footerData.footerAboutWidget.pobox }}</a>
          </p>
        </div>
        <div class="col-lg-3 mt-4 mt-lg-0">
          <div class="footer-logo">
            <n-link to="/">
              <img :src="footerData.footerAboutWidget.logoSrc" alt="Logo" />
            </n-link>
          </div>
          <div class="footer-social-inline">
            <a :href="footerData.footerAboutWidget.twitterUrl">
              <i class="fab fa-twitter-square"></i>
            </a>
            <a :href="footerData.footerAboutWidget.fbUrl">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a :href="footerData.footerAboutWidget.instagramUrl">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-3 mt-4 mt-lg-0">
             <h5 style="color:#748494">Contacte Nous</h5>
                  <div class="footer-widget-content">
                            <div class="content">
                              
                                <p><a href="tel:+237 690 05 26 54">{{ footerData.footerAboutWidget.WhatsApp }}</a></p>
                                <p><a href="mailto:hello@hasagency.com">{{ footerData.footerAboutWidget.email }}</a></p>
                               
                            </div>
                         
                        </div>
        </div>
      </div>
      <!-- Footer Top Widgets End -->

       <!-- Footer Copyright Start -->
            <div class="row copyright">
                <div class="col">
                    <p class="mt-2">Copyright &copy; 2021 <a href="#">RC3D</a>. All Rights Reserved.</p>
                </div>
            </div>
            <!-- Footer Copyright End -->
    </div>
  </div>
</template>
<script>
import footerData from "~/data/footer.json";

export default {
  data() {
    return {
      footerData,
    };
  },
};
</script>
<style lang="css">
.footer {
  padding: 2rem 3rem;
  background-color: #030e22;
}
.footer-social-inline{
    margin-top: 1rem;
}
.copyright{
    margin-top: 3rem;
}
</style>