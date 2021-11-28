<template>
    <div class="digital-agency-assistance-area  section-space--ptb_120" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="digital-agency-section-title text-center section-space--mb_60">
                        <h6 class="section-sub-title mb-20 font-weight--bold wow move-up">School of Arts and Sciences</h6>       
                        <h2 class="section-title font-weight--bold mb-15 wow move-up">Department of Computer, Information Sciences <br> and Mathematics</h2>
                    </div>
                </div>
            </div>

            <!-- service agency component -->
            <ServiceItem />
        </div>
    </div>
</template>

<script>
    import ServiceItem from '../ServiceItem'
    export default{
        name: 'Service',
        components: {
            ServiceItem
        }
    };
</script>

<style lang="scss">
    .section-title{
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-weight: bold; 
    }
</style>