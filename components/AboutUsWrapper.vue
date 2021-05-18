<template>
  <div class="section-padding-t90 section-padding-bottom">
    <div class="container">
      <!-- Section Title Start -->
      <div class="section-title text-center" data-aos="fade-up">
        <h2 class="title fz-32" style="margin-bottom:15px;">Nos partenaires nationaux</h2>
        <div class="row">
          <div class="col-2"></div>
          <div class="col-8">
            <ul class="agency-list">
              <li class="item">
                <div class="icon">
                  <i class="fas fa-circle"></i>
                </div>
                <div
                  class="text"
                >Le MINATD (Ministère de l’Administration Territoriale et de la Décentralisation;</div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="fas fa-circle"></i>
                </div>
                <div
                  class="text"
                >Le MINPMEESA (Ministère des Petites et Moyennes Entreprises, de l’Economie Sociale et de l’Artisanat)</div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="fas fa-circle"></i>
                </div>
                <div
                  class="text"
                >La CCIMA (Chambre de Commerce de l’Industrie, des Mines et de l’Artisanat).</div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="fas fa-circle"></i>
                </div>
                <div
                  class="text"
                >La CCIMA (Chambre de Commerce de l’Industrie, des Mines et de l’Artisanat).</div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="fas fa-circle"></i>
                </div>
                <div
                  class="text"
                >SADER (Service d’Appui au Développement Rural)</div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="fas fa-circle"></i>
                </div>
                <div
                  class="text"
                >PNDP (Programme National de Développement Participatif)</div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="fas fa-circle"></i>
                </div>
                <div
                  class="text"
                >CREA AGENCY (Agence Conseils en Communication et Formation)</div>
              </li>
            </ul>
          </div>
          <div class="col-2"></div>
        </div>
      </div>
      <!-- Section Title End -->
    </div>
  </div>
</template>

<script>
import serviceData from "~/data/service.json";

export default {
  components: {
    ServiceItem: () => import("@/components/ServiceItem"),
    ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
  },

  data() {
    return {
      serviceData,
    };
  },
};
</script>