<template>
    <div class="section-padding-t90-b100">
        <div class="container">
            <!-- Section Title Start -->
            <div class="section-title text-center" data-aos="fade-up">
                <p class="title fz-32" style="font-size:20px;">Le Réseau pour la Coopération Décentralisée et le Développement Durable (RC3D), dans le cadre de ses missions, s’est donné comme objectif de répondre aux besoins de formation des municipalités pour une meilleure efficacité dans l’action, c’est dans cette optique que nous mettons régulièrement sur pieds des forums pour faciliter et la cohésion et la mise en relation des organismes. Sur ceux, plusieurs forums ont été organisé jusqu’à nos jours à l'instar du </p>
            </div>
            <!-- Section Title End -->

            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 mtn-30">
                <div class="col mt-30" v-for="(project, index) in projectData" :key="index">
                    <div class="work">
                        <div class="thumbnail">
                            <!-- <n-link to="/project-details" class="image"> -->
                                <img :src="project.imgSrc" :alt="project.title">
                            </n-link>
                        </div>
                        <div class="info">
                            <h3 class="title">
                                <n-link to="/project-details">{{ project.title }}</n-link>
                            </h3>
                            <p class="desc">{{ project.desc }}</p>
                            <!-- <n-link to="/project-details">View Project</n-link> -->
                        </div>
                    </div>
                </div>
            </div>
             <div class="section-title text-center " style="font-size:20px; margin-top:6rem;" data-aos="fade-up">
                 <h2 class="title fz-32" style="font-size:30px;">Nos Archives</h2>
                <p class="title fz-32" style="font-size:20px; margin-top:1rem; font-weight:300;">Le RC3D est une organisation à but non lucratif créée en 2014 qui met en exergue tous les acteurs de son réseau dans l’optique d’une collaboration avec un intérêt mutuel. Il s’agit en effet d’assurer le bon déroulement des missions qui favorisent la matérialisation des partenariats gagnant-gagnants. Notre mission principale est ainsi de promouvoir le développement et la décentralisation sur une stratégie participative qui inclut la formation, l’intégration et la promotion des organisations publiques, privées et de la société civile agissant dans le cadre de la décentralisation et de l’économie sociale.</p>
            </div>
        </div>
    </div>
</template>

<script>
    import projectData from "~/data/project.json"

    export default {
        data() {
            return {
                projectData
            }
        },
    };
</script>