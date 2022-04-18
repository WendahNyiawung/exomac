<template>
    <div class="intro-slider">
        <swiper :options="swiperOptions">
            <swiper-slide class="swiper-slide" v-for="(banner, index) in sliderData" :key="index">
                <div class="intro-section overlay bg-cover" :style="{ backgroundImage: `url(${banner.bgImgSrc})` }">
                    <div class="container">
                        <div class="row row-cols-lg-1 row-cols-1">
                            <div class="col align-self-center">
                                <div class="intro-content m-auto text-center">
                                    <h3 class="title">{{ banner.heading }}</h3>
                                    <div class="desc">
                                        <p>{{ banner.text }}</p>
                                    </div>
                                    <!-- <n-link to="/about" class="btn btn-primary btn-hover-secondary">Commencer</n-link> -->
                                    <n-link to="/about" class="btn btn-outline-white btn-hover-primary">Inscrivez vous a la FIA | FOCODEVV 2022</n-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <!-- pagination class -->
        <div class="home-slider-prev swiper-button-prev main-slider-nav">
            <i class="fal fa-angle-left"></i>
        </div>
        <div class="home-slider-next swiper-button-next main-slider-nav">
            <i class="fal fa-angle-right"></i>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                swiperOptions: {
                    speed: 1000,
                    loop: true,
                    autoplay: true,
                    spaceBetween : 30,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },

                sliderData: [
                    {
                        id: 1,
                        heading: "RENFORCEMENT DES CAPACITÉS",
                        text: "Augmentez la performance humaine pour un développement économique et social",
                        bgImgSrc: "/images/hero-image/1.jpg"
                    },
                    {
                        id: 2,
                        heading: "APPUI TECHNIQUE, PLANIFICATION, MATURATION ET EXÉCUTION DES PROJETS",
                        text: "Nous mettons notre expertise au service d’appui des CTD à la mise en œuvre des diagnostics communautaires et l’élaboration des plans de développement",
                        bgImgSrc: "/images/hero-image/4.jpg"
                    },
                    {
                        id: 3,
                        heading: " APPUI AU DÉVELOPPEMENT DES PARTENARIATS",
                        text: "Dans l’optique de promouvoir le développement des Collectivités Territoriales Décentralisées et la recherche des partenaires financiers, nous organisons chaque année au Canada avec le soutien de nos partenaires canadiens le« Forum International sur la Coopération Décentralisée et le Développement Durable",
                        bgImgSrc: "/images/hero-image/3.jpg"
                    },
                    {
                        id: 4,
                        heading: "AMÉLIORATION DE LA GOUVERNANCE COMMUNALE",
                        text: "L’action consiste notamment au renforcement des dialogues et des partenariats opérationnels entre les Communes et les acteurs locaux",
                        bgImgSrc: "/images/hero-image/5.jpg"
                    },
                     {
                        id: 5,
                        heading: " APPUI À L’INFORMATIQUE ET A LA COMMUNICATION",
                        text: "Nous améliorons la visibilité  les Communes et organismes à l’échelle internationale dans la conception, la maintenance de leurs sites web dynamiques ou statiques",
                        bgImgSrc: "/images/hero-image/4.jpg"
                    },
                     {
                        id: 6,
                        heading: " LE FOCODEVV 2022 | 7é EDITION",
                        text: "La 7é édition du forum pour la cooperation decentraliséé et le developpement du 04 au 10 juin 2022 au Canada",
                        bgImgSrc: "/images/event/focodevv.jpg"
                    },
                     {
                        id: 7,
                        heading: " LA FIA 2022 | 7é EDITION",
                        text: "RIAA est l'unique platforme d'échanges, de promotion d'exellence et de partage des valeurs entre plusier acteurs à travers différentes activités. Du 04 au 10 juin 2022 au Canada",
                        bgImgSrc: "/images/event/fia.jpg"
                    },
                ]
            }
        },
    };
</script>