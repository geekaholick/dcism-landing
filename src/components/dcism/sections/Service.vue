<template>
    <div class="digital-agency-assistance-area  section-space--ptb_120" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="digital-agency-section-title text-center section-space--mb_60">
                
                        <h2 class="section-title font-weight--light mb-15 wow move-up">Department of Computer, Information Sciences <br> and Mathematics</h2>
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

</style>