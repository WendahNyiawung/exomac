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
                
                

                <div class="col col-sm-10" v-scroll-spy>
                    
                    <div>
                        <h1>LE FOCODDEV ET LA FIAA 2022</h1>
                        <h4> <i>Plus que quelques jours</i> </h4>
                        <br>
                        <p>Deux événements vont meubler les Rencontres internationales du RC3D cette année. Le FOCODDEV et la FIAA. Ces deux événements auront lieu respectivement au Canada et à Philadelphie aux États-Unis du 4 au 20 juin 2022. </p>
                    </div>
                    <br>
                    <hr>
                    <AccordionStyle/>
                    <br>
                    <hr>
                    <div>
                        <h1>INFO</h1>
                        <p>Les frais d’inscription pour les rencontres du RC3D à l’internationale s’élèvent à 200 000F CFA par participant.</p>
                        <p> Les frais de participation à un événement (FOCODDEV ou FIAA) s’élèvent à 7 000 euros (4 500 000F CFA) et aux deux évènements (FOCODDEV et FIAA) à 11 540 euros (7 500 000F CFA). </p>
                    </div>
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
            AccordionStyle: () => import('@/components/AccordionStyleOne.vue'),
        },

        data() {
            return {
                serviceData
            }
        },
    };
</script>