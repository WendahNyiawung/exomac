<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <BreadcrumbOne :items="items" title="FIA & FOCODEVV" backgroundUrl= "/images/event/fia-focodevv.jpg" />

        <EventWrapper />

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
            SuccessStory: () => import('@/components/SuccessStory'),
            EventWrapper: () => import('@/components/SingleEventWrapper'),
            AboutFour: () => import('@/components/AboutFour'),
            FunfactWithTitle: () => import('@/components/FunfactWithTitle'),
            ContactSectionTwo: () => import('@/components/ContactSectionTwo'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        data() {
            return {
                items: [
                    {
                        text: 'Accueil',
                        to: "/"
                    },
                    {
                        text: 'Fia & Focodevv',
                        active: true
                    }
                ]
            }
        },

        head() {
            return {
                title: 'Service'
            }
        },
    };
</script>


