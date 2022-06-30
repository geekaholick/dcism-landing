<template>
    <div class="main-container maintenance-wrapper">
        <div class="content-wrapper">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-6 left-bg"></div>
                    <div class="col-lg-6 right-bg">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="maintenance-logo text-center">
                                        <img src="../assets/img/logo/logo-dark.png" alt="">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                       <center> <h3 class="section-title font-weight--bold mb-15">Contact Page </h3></center>
                                    </div>
                                </div>
                                <div class="col-sm-10 m-auto">
                                </div>
                                <div class="col-lg-8 col-sm-8 mr-auto ml-auto">
                                    <div class="maintenance-newsletter">
                                        <div class="newsletter-form--two text-center">
                                            <form>
                                                <input type="email" placeholder="Email">
                                                <button class="ht-btn ht-btn-md">Subscribe</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

</template>

<script>
    import FlipCountdown from 'vue2-flip-countdown';

    export default {
        name: 'app',
        components: {
            FlipCountdown
        },

        metaInfo: {
            title: 'Aeroland - Coming Soon',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>