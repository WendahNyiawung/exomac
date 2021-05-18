<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <BreadcrumbOne :items="items" backgroundUrl= "/images/bg/header-prog.jpg" />

        <ProjectWrapper />

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
            ProjectWrapper: () => import('@/components/ProjectWrapper'),
            CallToActionTwo: () => import('@/components/CallToActionTwo'),
            AboutFour: () => import('@/components/AboutFour'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            FaqOne: () => import('@/components/FaqOne'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        data() {
            return {
                items: [
                    {
                        text: 'Home',
                        to: "/"
                    },
                    {
                        text: 'Project',
                        active: true
                    }
                ]
            }
        },

        head() {
            return {
                title: 'Project'
            }
        },
    };
</script>


