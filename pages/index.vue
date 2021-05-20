<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <SearchPopup />
        
        <HeroSliderTwo />

        <AboutTwo />


        <FeatureOne :style="{backgroundColor: '#f8faff'}" />

        <FunFcat />

        <SkillWithVideo />


        <!-- <TheFooter /> -->

    </div>
</template>

<script>
    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            HeroFixedBanner: () => import('@/components/HeroFixedBanner'),
              HeroSliderTwo: () => import('@/components/HeroSliderTwo'),
            AboutTwo: () => import('@/components/AboutTwo'),
            FunFcat: () => import('@/components/FunFcat'),
            FeatureOne: () => import('@/components/FeatureOne'),
            SkillWithVideo: () => import('@/components/SkillWithVideo'),
            PortfolioGalleryTwo: () => import('@/components/PortfolioGalleryTwo'),
            TestimonialSectionOne: () => import('@/components/TestimonialSectionOne'),
            BlogSectionOne: () => import('@/components/BlogSectionOne'),
            ContactSectionOne: () => import('@/components/ContactSectionOne'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        head() {
            return {
                title: 'RD3C'
            }
        },
    };
</script>
