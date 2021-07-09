<template>
    <div class="section-padding-t90-b100">
        <div class="container shape-animate">
            <!-- Section Title Start -->
            <SectionTitle title="Contactez-nous pour toute demande" sub-title="Notre équipe de créatifs sont des perfectionnistes qui aiment ce qu'ils font et aiment où ils travaillent" add-class-name="mb-30" />
            <!-- Section Title End -->

            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30">
                <div class="col mt-30" data-aos="fade-up">
                    <div class="contact-info">
                        <div class="icon">
                            <img class="svgInject" src="/images/svg/linea/linea-basic-map.svg" alt="Icon">
                        </div>
                        <div class="info">
                            <h4 class="title">Nos implantations</h4>
                            <span class="info-text">Siège de RC3D : <br> Cameroun-Yaoundé-Rue Montée Bastos</span>
                        </div>
                    </div>
                </div>

                <div class="col mt-30" data-aos="fade-up">
                    <div class="contact-info">
                        <div class="icon">
                            <img class="svgInject" src="/images/svg/linea/linea-basic-message-txt.svg" alt="Icon">
                        </div>
                        <div class="info">
                            <h4 class="title">Appelez-nous</h4>
                            <span class="info-text"> 237 222 25 20 86 <br> +237 654 81 03 86 <br> +237 690 05 26 54 </span>
                        </div>
                    </div>
                </div>

                <div class="col mt-30" data-aos="fade-up">
                    <div class="contact-info">
                        <div class="icon">
                            <img class="svgInject" src="/images/svg/linea/linea-basic-mail-open-text.svg" alt="Icon">
                        </div>
                        <div class="info">
                            <h4 class="title">bureau d'aide</h4>
                            <span class="info-text">
                                <a href="mailto:agencecreasarl@gmail.com">agencecreasarl@gmail.com</a>
                                <br>
                                <a href="mailto:demo@example.com" style="color:#fff;">demo@example.com</a>
                                <a href="mailto:demo@example.com" style="color:#fff;">demo@example.com</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <shape-with-animation add-class-name="shape-1" data-depth="4" img-src="/images/shape-animation/video-shape-1.png" />

        </div>
    </div>
</template>

<script>

    export default {
        components: {
            SectionTitle: () => import("@/components/SectionTitle"),
            ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
        },
    };
</script>
