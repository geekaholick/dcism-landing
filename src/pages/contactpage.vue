<template>
    <div class="main-container maintenance-wrapper">
                <ContactForm />
            </div>

</template>

<script>
    import FlipCountdown from 'vue2-flip-countdown';
    import ContactForm from '../components/ContactForm';

    export default {
        name: 'app',
        components: {
            FlipCountdown,
            ContactForm
        },

        metaInfo: {
            title: 'Aeroland - Coming Soon',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>