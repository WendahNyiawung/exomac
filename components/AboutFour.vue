<template>
  <div class="section-padding-top section-padding-bottom-180">
    <div class="container">
      <div class="row">
        <div class="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
          <div class="about-image-area">
            <div class="about-image js-tilt">
              <img src="/images/about/1.jpg" alt="image" />
            </div>
            <div class="about-image js-tilt">
              <img src="/images/about/2.jpg" alt="image" />
            </div>

            <!-- Animation Shape Start -->
            <ShapeWithAnimation
              addClassName="shape-1"
              data-depth="1"
              imgSrc="/images/shape-animation/about-shape-1.png"
            />
          </div>
        </div>
        <div class="col-xl-5 col-lg-6 col-12" data-aos="fade-up">
          <div class="about-content-area about-four">
            <div class="section-title-two">
              <!-- <span class="sub-title">Our solutions begin with brand research</span> -->
              <h3
                class="title"
              >Le Réseau pour la Coopération Décentralisée et le Développement Durable (RC3D)</h3>
            </div>
            <p>Le RC3D est une organisation à but non lucratif créée en 2014 qui met en exergue tous les acteurs de son réseau dans l’optique d’une collaboration avec un intérêt mutuel. Il s’agit en effet d’assurer le bon déroulement des missions qui favorisent la matérialisation des partenariats gagnant-gagnants. Notre mission principale est ainsi de promouvoir le développement et la décentralisation sur une stratégie participative qui inclut la formation, l’intégration et la promotion des organisations publiques, privées et de la société civile agissant dans le cadre de la décentralisation et de l’économie sociale.</p>
          </div>
          <br />
        </div>
      </div>
      <div class="row">
        <div class="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
          <div class="about-content-area about-four">
            <div class="section-title-two">
              <!-- <span class="sub-title">Our solutions begin with brand research</span> -->
              <h3 class="title">Vision</h3>
            </div>
            <p>
              Demeurer le leader reconnu dans le renforcement des capacités en offrant des formations pratiques et innovantes.
              Devenir un partenaire privilégié dans la mise en œuvre du processus de décentralisation ainsi qu’un appui dans la mise en œuvre des projets de développement
            </p>
          </div>
        </div>
        <div class="col-xl-5 col-lg-6 col-12" data-aos="fade-up">
          <div class="about-content-area about-four">
            <div class="section-title-two">
              <!-- <span class="sub-title">Our solutions begin with brand research</span> -->
              <h3 class="title">Mission</h3>
            </div>
            <p>
              Contribuer à une performance accrue des Collectivités Territoriales Décentralisées, des institutions publiques et entreprises privées par une meilleure gestion des ressources et le renforcement des capacités.
              S’associer au succès professionnel de nos partenaires par le partage de notre savoir-faire et de notre expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
  },
};
</script>