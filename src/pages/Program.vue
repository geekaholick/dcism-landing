<template>
    <div class="main-container">
        <!-- Navbar section -->
        <Header />
        
        <HeroBranding />


        <div class="box-image-area section-space--ptb_120" id="about">
            <div class="container">
                <div class="section-title-wrapper text-center section-space--mb_60 wow move-up">
                    <h2 class="section-title mb-15">Discover Different Careers and Courses</h2>
                    <span class="section-text">Plan ahead to make progress and lead the trend.</span>
                </div>
                <!-- about component -->
                 <Course/>
            </div>
        </div>

            <div class="feature-icon-list-area section-space--pb_120">
            <div class="container">
                <div class="section-title-wrapper text-center section-space--mb_100">
                    <h2 class="section-title mb-30">SEE THE PROGRAMS OFFERED</h2>
                    <div class="video-button-container video-popup">
                        <silentbox-single src="https://www.youtube.com/watch?v=9No-FiEInLA">
                            <div class="video-play">
                                <i class="fa fa-play-circle"></i>
                                <span class="video-text">INTRO & DEMO VIDEO</span>
                            </div>
                        </silentbox-single>
                    </div>
                </div>
            </div>
            <!-- feature list component -->
            <IT />
        </div>
       


        <!-- footer section -->
        <FooterMain />

        <!-- offcanvas search component -->
        <OffcanvasSearchBox />

    </div>
</template>

<script>
    import Header from "@/components/dcism/Header";
    import HeroBranding from '../components/HeroBranding'
    import Course from '../components/dcism/sections/Programs/Course'
    import FooterMain from '../components/FooterMain'
    import OffcanvasSearchBox from '../components/OffcanvasSearchBox'
    import IT from '../components/dcism/sections/Programs/IT'

    export default {
        name: 'app',
        components: {
            Header,
            HeroBranding,
            Course,
            IT,
            FooterMain,
            OffcanvasSearchBox
        },

        metaInfo: {
            title: 'Aeroland - Home Branding',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>