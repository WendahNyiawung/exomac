<template>
    <div class="section-padding-t90 section-padding-bottom">
        <div class="container">
            <!-- Section Title Start -->
            <!-- <div class="section-title text-center" data-aos="fade-up">
                <h2 class="title fz-32">Services that create identities, build brands, and get results</h2>
                <p class="sub-title">We produce beautifully crafted creative solutions that transcend business goals. We provide the exceptional service we’d want to experience ourselves!</p>
            </div> -->
            <!-- Section Title End -->

            <!-- About Wrapper Start -->
            <div class="row icon-box-shape-animation mtn-30">
                <div class="col mt-30" data-aos="fade-up">
                    
                </div>
                <!-- <div class="col mt-30" data-aos="fade-up" v-for="(service, index) in serviceData" :key="index">
                    <ServiceItem :service="service" addClassName="box-border" />
                </div> -->
                
                <ul class="col col-sm-3" v-scroll-spy-active v-scroll-spy-link>
                  
                    <li>
                        <a>FOCODDEV 2022</a>
                    </li>
                    <li>
                        <a>Conditions de participation</a>
                    </li>
                   
                </ul>

                <div class="col col-sm-7" v-scroll-spy>
                    
                    <div>
                        <h1>FOCODDEV 2022</h1>
                        <h4><i>Du 4 au 10 juin 2022 au Canada</i></h4>
                        <p>La 7ème édition du Forum pour la coopération décentralisée et le développement durable (FOCODDEV) aura lieu au Canada du 4 au 10 juin 2022. Il s’agit d’un événement organisé chaqu’année par le Réseau pour la Coopération décentralisée et le Développement Durable (RC3D). L’édition de cette année a pour thème « L’efficacité des jumelages et des partenariats Afrique-Canada : Enjeux, défis et réalisations. »</p>
                        <p>Le FOCODDEV c’est une plateforme d’affaires et de réseautage entre les communes d’Afriques et celles du Canada, entre les PME, les hommes d’affaires et les chefs d’entreprises du sud qui vont à la rencontre de leurs homologues du Canada. </p>
                        <p>Pendant pratiquement une semaine, les participants ont droit à des visites guidées dans les entreprises et autres organisations, des conférences et tables rondes, des rencontres de jumelages, des échanges de procédés et capitalisation, la valorisation du potentiel local (à travers les Journées portes-ouvertes, salons et expositions…), la réalisation des mandats sectoriels, le partage des meilleures pratiques culturelles, une foire à l’emploi, l’organisation des rencontres économiques spécifiques (échanges, études, stages professionnels, séminaires et ateliers…), des ateliers de renforcement des capacités et une soirée de gala.</p>
                        <hr>
                        <h4>Conditions de participation </h4>
                        <p>Les personnes et les organisations éligibles au FOCODDEV sont tenues de respecter les conditions suivantes : </p>
                        <ul>
                            <li>Payer des frais d’inscription et d’étude du dossier de 200 000 francs CFA ;</li>
                            <li>S’acquitter des frais de participation de 7 000 euros (4,5 millions de francs CFA).</li>
                        </ul>
                        <p>
                            Les paiements peuvent se faire par virement bancaire, par Western Union ou par tout autre moyen. Ils donnent droit à la prise en charge totale de chaque participant pendant le FOCODDEV. Cette prise en charge comprend : l’accueil à l’aéroport, le transfert de l’aéroport au lieu de l’hébergement, l’hébergement et la nutrition, le transport inter urbain, la participation aux conférences et ateliers, la participation aux visites et aux rencontres d’affaires et au diner de clôture.
                        </p>
                        <button class="btn btn-primary">S’inscrire ici</button>
                    </div>
                    <br>
                   
                </div>

                <ShapeWithAnimation addClassName="shape-1" data-depth="1" imgSrc="/images/shape-animation/video-shape-1.png" />
            </div>
            <!-- About Wrapper End -->
        </div>
    </div>
</template>

<script>
    import serviceData from '~/data/service.json';

    export default {
        components: {
            ServiceItem: () => import('@/components/ServiceItem'),
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },

        data() {
            return {
                serviceData
            }
        },
    };
</script>