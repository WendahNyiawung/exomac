<template>
    <div class="contact-form-section section-padding-t90-b100" :style="{backgroundColor: '#f8faff'}">
        <div class="container">
            <div class="row">
                <div class="offset-lg-2 col-lg-8">
                    <!-- Section Title Start -->
                    <div class="section-title text-center" data-aos="fade-up">
                        <h2 class="title fz-32">Écrivez-nous</h2>
                        <p class="sub-title">Nous avons facilité la tâche des clients pour nous joindre et faire tisser leurs solutions</p>
                    </div>
                    <!-- Section Title End -->
                    <div class="contact-form">
                        <form>
                            <div class="row mtn-30">
                                <div class="col-md-6 col-12 mt-30">
                                    <input type="text" placeholder="votre nom *" name="name">
                                </div>
                                <div class="col-md-6 col-12 mt-30">
                                    <input type="email" placeholder="Email *" name="email">
                                </div>
                                <div class="col-md-12 col-12 mt-30">
                                    <input type="text" placeholder="Sujet *" name="subject">
                                </div>
                                <div class="col-12 mt-30">
                                    <textarea name="message" placeholder="Message"></textarea>
                                </div>
                                <div class="col-12 text-center mt-30">
                                    <button class="btn btn-primary btn-hover-secondary">Soumettre</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>