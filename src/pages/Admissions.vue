<template>
    <div class="main-container">
        <!-- Navbar section -->
        <Header />

        <!-- hero section -->
        <AdmissionCoverPage />

        <!-- tab conetent section -->
        <div class="tabs-wrapper startup-tab section-space--mt_30 section-space--pb_120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title-wrapper text-center section-space--mb_60 wow move-up">
                            <h2 class="section-title font-weight--bold mb-15">SY 2021-2022</h2>
                        </div>
                    </div>
                </div>
                <!-- tab components -->
               <AdmissionTabs />
            </div>
        </div>
        
        <!-- footer section -->
        <FooterMain />

        <!-- offcanvas search component -->
        <OffcanvasSearchBox />

    </div>
</template>

<script>
    // import Navbar from '../components/Navbar'
    // import HeroBranding from '../components/HeroBranding'
    // import TabOne from '../components/TabOne'
    
    import Header from '../components/dcism/Header'
    import AdmissionCoverPage from '../components/AdmissionCoverPage'
    import AdmissionTabs from '../components/AdmissionTabs'

    import FooterMain from '../components/FooterMain'
    import OffcanvasSearchBox from '../components/OffcanvasSearchBox'

    export default {
        name: 'app',
        components: {
            // Navbar,
            // HeroBranding,
            // TabOne,

            Header,
            AdmissionCoverPage,
            AdmissionTabs,
            FooterMain,
            OffcanvasSearchBox
        },

        metaInfo: {
            title: 'DCISM - Admission Page',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>