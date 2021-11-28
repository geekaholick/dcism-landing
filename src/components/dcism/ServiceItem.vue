<template>
    <div class="digital-agency-grid">
        <a href="#" class="digital-agency-assistance__warap wow move-up" v-for="(item, index) in services" :key="index">
            <div class="digital-agency-assistance__box">
                <div class="digital-agency-assistance__images">
                    <div class="images-midea" id="removeBG">
                        <img :src="item.img" class="img-fluid" alt="service thumb">
                    </div>
                </div>
                <div class="digital-agency-assistance__content mt-30 text-center">
                    <p class="description">{{ item.desc }}</p>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
    export default{
        name: 'ServiceItem',
        data(){
            return {
                 services: [
                    {
                        img: require('../../assets/img/about/award-no1.png'),
                        desc: '100% passing rate Librarian Licensure Examination (2012)'
                    },
                    {
                        img: require('../../assets/img/about/arrows-up.png'),
                        desc: 'CHED Center of Development in Information Technology Education'
                    },
                    {
                        img: require('../../assets/img/about/thumbs-up.png'),
                        desc: 'Only Top Performing Library School in the Visayas recognized by the Professional Regulation Commision'
                    },
                    {
                        img: require('../../assets/img/about/certificates.png'),
                        desc: 'Top Performing School in the Philippine Information Technology General Certification Exam'
                    },
                    {
                        img: require('../../assets/img/about/seminar.png'),
                        desc: 'Host of Ph.D Mathematics Program in partnership with Ateneo de Manila University and CHED'
                    },
                    {
                        img: require('../../assets/img/about/shake-hands.png'),
                        desc: 'Collaborating with Academics without Borders-Canada Project for teaching statistics in K-12'
                    },
                    {
                        img: require('../../assets/img/about/arrows-up.png'),
                        desc: 'CHEC delivering institution for mathematics'
                    },
                    {
                        img: require('../../assets/img/about/3-stars.png'),
                        desc: 'Level III FAAP-accredited B.S Math program evaluated by PAASCU'
                    }
                ]
            }
        }
    };
</script>

<style lang="scss" scoped>
  
   .images-midea{
        display: block;
        margin-left: auto;
        margin-right: auto;
        height:30%;
        width: 30%;
   }
    
    .description{
        font-weight: bold;
            color: black;
            & strong {
                color: rgb(0, 0, 0);
                font-weight: 500;
            }
    }

    .digital-agency-grid {
        grid-template-columns: repeat( 4,1fr);
    }

    #removeBG::after{
        background-image: none;
    }

</style>