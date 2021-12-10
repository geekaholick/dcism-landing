<template>
    <section class="hero-branding bg-cover" :style="bgImg" id="home">
        <div class="container-fluid container-fluid--cp-150">
            <div class="hero-branding">
                <div class="hero-content">
                    <h2 class="h1 hero-content-title"><p class="text-white">Admissions</p></h2>
                    <h6 class="hero-content-subtitle mt-20"><p class="text-white">The University is currently accepting freshmen applications for Academic Year 2021 – 2022. For those who were not able to take the College Admission Examination (CAE), please follow the procedure below:</p></h6>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data (){
            return {
                bgImg: {
                    backgroundImage: `url(${require('../assets/img/hero/branding/ad-background.jpg')})`
                },
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/variabls.scss';
    @import 'src/assets/scss/elements/hero-branding.scss'
</style>
