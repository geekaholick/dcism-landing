<script>
import{ init } from 'emailjs-com';
init("user_2AIPKnhpcMB3buwo4GDag");
</script>
<template>
    <div class="contact-form-section section-space--ptb_120" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 order-2 order-lg-1">
                    <div class="section-title text-left section-space--mb_60">
                        <h2 class="font-weight--bold mb-15 wow move-up">Contact Page</h2>
                    </div>
                    <div class="contact-from-wrapper wow move-up">
                        <form ref="form" @submit.prevent="sendEmail" id="contact-form" method="post">
                            <div class="contact-page-form">
                                <div class="contact-input">
                                    <div class="contact-inner">
                                        <input name="user_name" type="text" placeholder="Name *" required>
                                    </div>
                                    <div class="contact-inner">
                                        <input name="user_email" type="email" placeholder="Email *" required>
                                    </div>
                                </div>
                                <div class="contact-inner">
                                    <input name="subject" type="text" placeholder="Subject *" required>
                                </div>
                                <div class="contact-inner contact-message">
                                    <textarea name="message" placeholder="Message *" required></textarea>
                                </div>
                                <div class="contact-submit-btn">
                                    <button class="ht-btn ht-btn-md" type="submit">Send message</button>
                                    <p class="form-messege"></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-5 order-1 order-lg-2">
                    <div class="peatures_image-wrap section-space--mb_40">
                        <div class="image text-center wow move-up">
                            <img class="img-fluid" src="../../public/img/DCISM_logo.jpg" alt="contact thumb">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
console.log(Notification.permission)
import emailjs from 'emailjs-com';
    export default {
        name: 'ContactForm',
          methods:{
    sendEmail() {
      emailjs.sendForm('service_wowu17u', 'template_p1icr7f', this.$refs.form, 'user_2AIPKnhpcMB3buwo4GDag')
        .then((result) => {
            alert("Success");
        }, (error) => {
            alert("Failed");
        });
    }
  }
    }
</script>


