<template>
    <div class="ht-tab-wrap">
        <b-tabs class="ht-tab-menu wow move-up">
            <b-tab title="Incoming Freshmen who have NOT Taken the CAE" active>
                <!-- tab content one component -->
                <AdmissionTabContentOne />  
            </b-tab>
            <b-tab title="Incoming Freshmen who have TAKEN the CAE">
                <!-- tab content two component -->
                <AdmissionTabContentTwo /> 
            </b-tab>
            <!-- <b-tab title="New Friendly Support"> -->
                <!-- tab content third component -->
                <!-- <AdmissionTabContentThree />  -->
            <!-- </b-tab> -->
        </b-tabs>
    </div>
</template>

<script>
    import AdmissionTabContentOne from '../components/AdmissionTabContentOne'
    import AdmissionTabContentTwo from '../components/AdmissionTabContentTwo'
    import AdmissionTabContentThree from '../components/AdmissionTabContentThree'

    export default {
        name: 'AdTabOne',
        components: {
            AdmissionTabContentOne,
            AdmissionTabContentTwo,
            AdmissionTabContentThree
        }
    };
</script>