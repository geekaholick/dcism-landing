<template>
    <section class="hero-branding bg-cover" :style="bgImg" id="home">
        <div class="container-fluid container-fluid--cp-150">
            <div class="hero-branding">
                <div class="hero-content">
                    <h2 class="h1 hero-content-title">Programs</h2>
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
                    backgroundImage: `url(${require('../assets/img/hero/branding/DCISM.png')})`
                },
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/variabls.scss';
    @import '../assets/scss/elements/hero-branding.scss'
</style>
