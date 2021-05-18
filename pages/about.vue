<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <BreadcrumbOne :items="items" title="" backgroundUrl= "/images/bg/header-propo.jpg" />

        <AboutFour class="section-padding-top about-section-padding-bottom-200"/>

        <AboutOne />
        <AboutWrapper/>

        <TheFooter />

    </div>
</template>

<script>
    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            BreadcrumbOne: () => import('@/components/BreadcrumbOne'),
            AboutTwo: () => import('@/components/AboutTwo'),
            AboutOne: () => import('@/components/AboutOne'),
            CallToActionVideo: () => import('@/components/CallToActionVideo'),
            AboutFour: () => import('@/components/AboutFour'),
            TestimonialSectionOne: () => import('@/components/TestimonialSectionOne'),
            CallToActionThree: () => import('@/components/CallToActionThree'),
            TheFooter: () => import('@/components/TheFooter'),
            AboutWrapper: () => import('@/components/AboutUsWrapper'),
        },

        data() {
            return {
                items: [
                    {
                        text: 'Accueil',
                        to: "/"
                    },
                    {
                        text: 'A propos',
                        active: true
                    }
                ]
            }
        },

        head() {
            return {
                title: 'About us'
            }
        },
    };
</script>


