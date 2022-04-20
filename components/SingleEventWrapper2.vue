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
                
                <div class="col col-sm-3" >
                  
                    <img src="/images/event/focodevv.jpg"  alt="" srcset="">
                    
                    <br>
                    <br>
                    <a target="_blank" href="https://docs.google.com/forms/d/15Umha2otJwpD13kYrTw8LJ7YITtzDnX1P2Io6JZNic8" class="btn btn-primary">S’inscrire ici (Francais)</a>
                   
                    <br>
                    <br>
                    <a target="_blank" href="https://docs.google.com/forms/d/15Umha2otJwpD13kYrTw8LJ7YITtzDnX1P2Io6JZNic8" class="btn btn-primary">S’inscrire ici (Anglais)</a>
                </div>

                <div class="col col-sm-7" v-scroll-spy>
                    <div>
                        <h1>FIAA 2022</h1>
                        <h4><i>Du 14 au 20 juin à Philadelphie</i></h4>
                        <p>La Foire internationale d’Afrique et d’Amérique (FIAA) aura lieu à Philadelphie aux États-Unis du 14 au 20 juin 2022.  Il s’agit d’un rendez-vous économique de premier plan entre les investisseurs africains et ceux de cette grande ville de l’État de Pennsylvanie. </p>
                        <p>
                                La FIAA est le fruit du partenariat entre le RC3D et l’ACPE. Au-delà du volet économique de ce rendez-vous, il s’agit aussi d’une rencontre culturelle et sportive avec la participation des personnalités du monde des arts et des athlètes de haut niveau. Sur le plan économique, Les échanges porteront sur les énergies renouvelables, les changements climatiques, les équipements et Engins lourds et les secteurs Portuaire et Maritime. Les activités suivantes sont prévues :   
                                <ul>
                                    <li>Rencontre d’affaires, de réseautage et de jumelage ; </li>
                                    <li>Échanges de procédés et capitalisation ; </li>
                                    <li>Visites guidées des entreprises ; Organisations et municipalités ; </li>
                                    <li>Conférences et tables rondes.</li>
                                </ul>
                        </p>
                        <p>Sur les plans culturel, sportif et touristiques, la FIAA prévoit les activités suivantes : 
                            <ul>
                                <li>Une foire et exposition-vente (objets d’art, arts plastiques, styles et modes, stands etc.…) ; </li>
                                <li>Une foire gastronomique (art culinaires, produits exotiques, pharmacopée, stands etc.…) ;  </li>
                                <li>La valorisation du potentiel culturel Africain (à travers les Journées portes-ouvertes, salons et expositions, danses traditionnelles et concours, …) ; </li>
                                <li>Des rencontres sportives (match de gala basket-ball et football) ; </li>
                                <li>Des soirées de Gala, collecte de fonds et Élection MISS FIAA 2022 A PHILADELPHIE (prestations artistiques, élections miss, tombola, collecte de fonds)</li>
                            </ul>
                        </p>
                        <hr>
                        <h4>Conditions de participation </h4>
                        <p>Les personnes et les organisations éligibles au FOCODDEV sont tenues de respecter les conditions suivantes :  </p>
                        <ul>
                            <li>Payer des frais d’inscription et d’étude du dossier de 200 000 francs CFA ;</li>
                            <li>S’acquitter des frais de participation de 7 000 euros (4,5 millions de francs CFA).</li>
                        </ul>
                        <p>
                            Les paiements peuvent se fait par virement bancaire, par Western Union ou par tout autre moyen. Ils donnent droit à la prise en charge totale de chaque participant pendant le FOCODDEV. 
                            <br> <strong>Cette prise en charge comprend :</strong> l’accueil à l’aéroport, le transfert de l’aéroport au lieu de l’hébergement, l’hébergement et la nutrition, le transport inter urbain, la participation aux conférences et ateliers, la participation aux visites et aux rencontres d’affaires et au diner de clôture.
                        </p>
                        
                    </div>
                    <br>
                    <hr>
                   
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