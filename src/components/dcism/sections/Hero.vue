<template>
    <div class="hero-software hero-swiper-btn" id="home">
        <div class="container_f1">
            <div class="swiper-wrapper">
                <swiper :options="swiperOption">
                    <div class="swiper-slide bg-cover slider-1">
                        <div class="hero-item">
                            <div class="hero-content text-center">
                                <h2 class="h1 hero-content-title">Temp University</h2>
                                <h4 class="hero-content-subtitle">The best university for your education.</h4>
                            </div>
                        </div>
                    </div>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                swiperOption: {
                    speed: 1500,
                    loop: true,
                    effect: 'fade',
                    autoplay: false,
                    spaceBetween : 30,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                }
            };
        }
    };
</script>

<style lang="scss" scoped> 
    @import '../../../assets/scss/variabls.scss';
    .hero-item {
        height: 800px;
        display: flex;
        align-items: center;
        justify-content: center;
        // responsive
        @media #{$desktop-device, $tablet-device}{
            height: 600px;
        }
        @media #{$large-mobile}{
            height: 450px;
        }
        @media #{$extra-small-mobile}{
            height: 380px;
        }
    }
    .hero-content {
        width: 750px;
        &-subtitle {
            color: $white;
            font-weight: 400;
            padding-bottom: 20px;
        }
        &-title {
            color: $white;
            font-size: 80px;
            font-family: Arial, Helvetica, sans-serif;
            margin-bottom: 0;
            // responsive
            @media #{$large-mobile}{
                font-size: 40px;
            }
            @media #{$small-mobile}{
                font-size: 28px;
            }
        }
        .sub-heading {
            color: $white;
            font-size: 16px;
            padding-top: 40px;
        }
        .hero-btn {
            margin-top: 40px;
            .ht-btn {
                margin-right: 30px;
                @media #{$extra-small-mobile}{
                    margin-right: 5px;
                }
                &:last-child {
                    margin-right: 0;
                }
                &--gradient2 {
                    background: linear-gradient(90deg, rgb(240, 168, 107) 0%, rgb(225, 118, 67) 100%);
                }
            }
        }
    }
    .slider-1 {
        background-image: url('../../../assets/img/agency/school-01.jpg');
    }
    .slider-2 {
        background-image: url('../../../assets/img/hero/agency/digital-agency-02.jpg');
    }
</style>

