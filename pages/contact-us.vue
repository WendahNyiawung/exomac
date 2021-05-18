<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <BreadcrumbOne :items="items"  backgroundUrl= "/images/bg/header-contact.jpg" />

        <CallToActionOne />

        <!--Google Map Area Start-->
        <div class="google-map-area section-padding-bottom">
            <div class="container">
                <div class="contact-map-area">
                    <iframe class="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.6003351665054!2d11.50046831408946!3d3.8954956491989674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf32b2db5565%3A0x71b059c0dd3ea8bc!2sBastos&#39;Appart!5e0!3m2!1sen!2sbd!4v1621275163175!5m2!1sen!2sbd" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
        <!--Google Map Area Start-->

        <ContactForm />

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
            CallToActionOne: () => import('@/components/CallToActionOne'),
            ContactForm: () => import('@/components/ContactForm'),
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
                        text: 'Contact Us',
                        active: true
                    }
                ]
            }
        },

        head() {
            return {
                title: 'Contact Us'
            }
        },
    };
</script>


