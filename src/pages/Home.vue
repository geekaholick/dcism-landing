<template>
	<div class="main-container">

		<!-- Navbar section -->
		<Header />

		<!-- hero section -->
		<Hero />

		<!-- service section -->
		<Service />

		<!-- feature section -->
		<Feature />

		<!-- team section -->
		<Team />

		<!-- project gallery -->
		<Project />

        <!-- newsletter section -->
        <Newsletter /> 

		<!-- contact us section -->
		<Contact />

		<!-- footer section -->
        <Footer />

        <!-- offcanvas search component -->
        <OffcanvasSearchBox />

	</div>
</template>

<script>
	import Header from "@/components/dcism/Header";
	import Hero from "@/components/dcism/sections/Hero";
	import Service from "@/components/dcism/sections/Service";
	import Feature from "@/components/dcism/sections/Feature";
	import Team from "@/components/dcism/sections/Team";
	import Project from "@/components/dcism/sections/Project";
	import Newsletter from "@/components/dcism/Newsletter";
	import Contact from "@/components/dcism/sections/Contact";
	import Footer from "@/components/dcism/Footer";
	import OffcanvasSearchBox from "@/components/dcism/OffcanvasSearchBox";

	export default {
		name: "app",
		components: {
			Header,
			Hero,
			Service,
			Feature,
			Team,
			Project,
			Newsletter,
			Contact,
            Footer,
            OffcanvasSearchBox	
		},

		metaInfo: {
            title: 'Aeroland - Home Agency',
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

