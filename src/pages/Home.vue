<template>
	<div class="main-container">

		<!-- Navbar section -->
		<Header />

		<!-- hero section -->
		<Hero />

		<!-- course section -->
		<Course />

		<!-- campus section -->
		<Campus />

		<!-- facilities section -->
		<Facilities />

		<!-- call to action -->
		<CTA />

		<!-- footer section -->
        <Footer />

        <!-- offcanvas search component -->
        <OffcanvasSearchBox />

	</div>
</template>

<script>
	import Header from "@/components/dcism/Header";
	import Hero from "@/components/dcism/sections/Hero";
	import Course from "@/components/dcism/sections/Course";
	import Campus from "@/components/dcism/sections/Campus";
	import Facilities from "@/components/dcism/sections/Facilities";
	import CTA from "@/components/dcism/sections/CTA";
	import Footer from "@/components/dcism/Footer";
	import OffcanvasSearchBox from "@/components/dcism/OffcanvasSearchBox";

	export default {
		name: "app",
		components: {
			Header,
			Hero,
			Course,
			Campus,
			Facilities,
			CTA,
            Footer,
            OffcanvasSearchBox	
		},

		metaInfo: {
            title: 'Homepage',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
	};
</script>

<style lang="scss">
	@import '../assets/scss/_variabls.scss';
    @import '../assets/scss/page-section/_dcism.scss';
</style>

