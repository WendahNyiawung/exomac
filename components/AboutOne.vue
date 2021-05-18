<template>
  <div class="section-padding">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-5 col-lg-6 col-12" data-aos="fade-up">
          <div style="margin-top:100px;">
            <!-- Section Title Two Start -->
            <div class="section-title-two">
              <!-- <span class="sub-title">Development that converts and delivers</span> -->
              <h3 class="title">Nos objectifs:</h3>
            </div>
            <!-- Section Title Two End -->

            <!-- Agency List Start -->
            <ul class="agency-list">
              <li class="item">
                <div class="icon">
                  <i class="fas fa-check"></i>
                </div>
                <div
                  class="text"
                >Promouvoir la Décentralisation à travers une stratégie participative;</div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="fas fa-check"></i>
                </div>
                <div class="text">Promouvoir la coopération décentralisée ;</div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="fas fa-check"></i>
                </div>
                <div class="text">Promouvoir le développement locals</div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="fas fa-check"></i>
                </div>
                <div class="text">Promouvoir la coopération Nord-Sud et Sud-Sud</div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="fas fa-check"></i>
                </div>
                <div
                  class="text"
                >Développer les canaux de transferts des technologies et de compétences</div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="fas fa-check"></i>
                </div>
                <div class="text">Concevoir, la planification et l’évaluation des projets</div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="fas fa-check"></i>
                </div>
                <div
                  class="text"
                >Promouvoir des programmes de formation et de renforcement des capacités</div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="fas fa-check"></i>
                </div>
                <div
                  class="text"
                >Concevoir, planifier, suivre et évaluer des projets de développement.</div>
              </li>
            </ul>
          </div>
        </div>

        <div class="offset-xl-1 col-xl-6 col-lg-6 col-12">
            <div class="section-title-two">
              <!-- <span class="sub-title">Development that converts and delivers</span> -->
              <h3 class="title">NOS CIBLES</h3>
            </div>
          <ul class="agency-list">
              <li class="item">
                <div class="icon">
                  <i class="fas fa-check"></i>
                </div>
                <div
                  class="text"
                >Les gouvernements</div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="fas fa-check"></i>
                </div>
                <div class="text">Les Collectivités Territoriales Décentralisées</div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="fas fa-check"></i>
                </div>
                <div class="text">Les entreprises publiques et parapubliques</div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="fas fa-check"></i>
                </div>
                <div class="text">Les acteurs de l’économie sociale</div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="fas fa-check"></i>
                </div>
                <div
                  class="text"
                >Les PME / PMI</div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="fas fa-check"></i>
                </div>
                <div class="text">Les organismes internationaux</div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="fas fa-check"></i>
                </div>
                <div
                  class="text"
                >Les ONG</div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="fas fa-check"></i>
                </div>
                <div
                  class="text"
                >Les associations</div>
              </li>
            </ul>
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

  data() {
    return {
      videos: [
        {
          src: "https://www.youtube.com/watch?v=eS9Qm4AOOBY",
        },
      ],
    };
  },
};
</script>
