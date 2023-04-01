<script setup>
const props = defineProps({
    userName: String,
    userRole: String,
    userTwitter: String,
    userFacebook: String,
    userInstagram: String,
    userLinkedin: String,
    userGithub: String,
    userPortfolio: Object
});

// open and close function for social modal
const openSocialModal = () => {
    let socialModal = document.querySelector('.social-modal');
    socialModal.classList.add('social-modal-open');
    socialModal.classList.remove('social-modal-closed');
}

const closeSocialModal = () => {
    let socialModal = document.querySelector('.social-modal');
    socialModal.classList.add('social-modal-closed');
    socialModal.classList.remove('social-modal-open');
}

// open and close function for portfolio modal
const openPortfolioModal = () => {
    let socialModal = document.querySelector('.portfolio-modal');
    socialModal.classList.add('portfolio-modal-open');
    socialModal.classList.remove('portfolio-modal-closed');
}

const closePortfolioModal = () => {
    let socialModal = document.querySelector('.portfolio-modal');
    socialModal.classList.add('portfolio-modal-closed');
    socialModal.classList.remove('portfolio-modal-open');
}

//scroll to top when opening portfolio modal
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

</script>
<template>
    <!-- This row shows the bottom section with user name and role on left, and two button on left (Social and Portfolio) -->
    <div class="row justify-content-center">
    <!-- bottom section with user name and role to left, social and portfolio buttons to right -->
    <div class="col-lg-10">
        <div class="bottom-section">
            <div class="bottom-left">
                <h1><span class="text-highlight" v-html="userName"></span></h1>
                <UIDivider desktop=".5rem" tablet=".5rem" smartphone=".5rem" />
                <h3 v-html="userRole"></h3>
                <UIDivider desktop="1rem" tablet="1.5rem" smartphone="1.5rem" />
            </div>
                <div class="bottom-right">
                    <UIButton class="social-button" text="Social" @click="openSocialModal()" />
                    <UIButton class="social-button" text="Portfolio" @click="openPortfolioModal(); topFunction()" />
                </div>
            </div>
        </div>
    </div>
    <!-- Social modal container with UIUserSocial component -->
    <div class="social-modal">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="urls-container">
                        <div class="close-modal">
                            <svg @click="closeSocialModal()" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path
                                    d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                            </svg>
                        </div>
                        <UIUserSocial :twitterUrl="userTwitter" :facebookUrl="userFacebook" :instagramUrl="userInstagram"
                            :linkedinUrl="userLinkedin" :githubUrl="userGithub" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Portfolio modal -->
    <div class="portfolio-modal">
        <div class="close-modal">
            <svg @click="closePortfolioModal()" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                    d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
            </svg>
        </div>
        <div class="container portfolio-loop-elements">
            <!-- 
                    For every portfolio elements in portfolio.json show a row with:
                    - Project title
                    - Project subtitle
                    - Project description
                    - Project url (open in new tab)
                    - Project slideshow images (images will come from /images/portfolio/) and have also a lightbox function

                    If a project does not have any of the above parts, it will simply be hidden
                -->
            <div v-for="portfolioEl in userPortfolio" class="row single-portfolio-el">
                <div v-if="portfolioEl.status != 'draft'">
                    <!-- Portfolio project title -->
                    <div v-if="portfolioEl.title" class="col-12">
                        <h2 v-html="portfolioEl.title"></h2>
                        <UIDivider desktop=".6rem" tablet=".8rem" smartphone="1rem" />
                    </div>
                    <!-- Portfolio project subtitle -->
                    <div v-if="portfolioEl.subTitle" class="col-12 col-lg-9">
                        <h3 v-html="portfolioEl.subTitle"></h3>
                        <UIDivider desktop="1rem" tablet="1.3rem" smartphone="1.5rem" />
                    </div>
                    <!-- Portfolio project description -->
                    <div v-if="portfolioEl.description" class="col-9 col-lg-6">
                        <p v-html="portfolioEl.description"></p>
                        <UIDivider desktop="3rem" tablet="3.5rem" smartphone="3.8rem" />
                    </div>
                    <!-- Portfolio project url to project (open in new tab) -->
                    <div v-if="portfolioEl.projectUrl" class="col-12">
                        <a class="portoflio-url" :href="portfolioEl.projectUrl" target="_blank">Discover project <svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="portoflio-url-svg">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </a>
                        <UIDivider desktop="3rem" tablet="3.5rem" smartphone="3.8rem" />
                    </div>
                    <!-- Portfolio project images gallery with lightbox function -->
                    <div v-if="portfolioEl.projectImages" class="col-12 image-slider">
                        <div class="portfolio-slider" uk-slider="autoplay: true; autoplay-interval: 5000">
                            <div class="uk-slider-items" uk-lightbox>
                                <div class="slide-el" v-for="img in portfolioEl.projectImages">
                                    <a :href="`/images/portfolio/${img}`">
                                        <img :src="`/images/portfolio/${img}`" alt="">
                                    </a>
                                </div>
                            </div>
                            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#"
                                uk-slidenav-previous uk-slider-item="previous"></a>
                            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next
                                uk-slider-item="next"></a>
                        </div>
                        <UIDivider class="before-line" desktop="3rem" tablet="3.5rem" smartphone="3.8rem" />
                    </div>
                    <!-- Portfolio project divider -->
                    <div class="col-lg-12">
                        <UIStraightLine lineWidth="20%" lineColor="#FF4334" justify="center" />
                        <UIDivider class="after-line" desktop="3rem" tablet="3.5rem" smartphone="3.8rem" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* bottom section */
.bottom-section {
    position: relative;
    background-color: var(--detailsColor2);
    border-radius: 30px;
    padding: 1.5rem;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.bottom-section .bottom-left {
    margin-right: 1.5rem;
}

.bottom-section .bottom-right {
    display: flex;
    flex-wrap: wrap;
}

.bottom-section .c-button {
    margin: .5rem .5rem;
}

/* social modal */
.social-modal {
    position: absolute;
    background-color: var(--backgroundColor2);
    width: 40%;
    height: auto;
    bottom: -200%;
    right: 0rem;
    padding: 1rem;
    border-radius: 20px 20px 20px 0px;
    overflow: hidden;
    z-index: 1;
    transition: bottom .9s cubic-bezier(.33, 1, 1, .96);
}

@media screen and (max-width: 991px) {
    .social-modal {
        width: 90%;
        left: 0rem;
        margin: auto;
        border-radius: 20px;
    }
}

.social-modal-open {
    bottom: 0rem;
}

.social-modal-closed {
    bottom: -30rem;
}

/* container for SocialIconName component */
.urls-container {
    position: relative;
}

.urls-container .close-modal {
    display: flex;
    justify-content: flex-end;
    padding-right: 0rem;
}

.urls-container .close-modal svg {
    fill: var(--detailsColor2);
    width: .8rem;
    cursor: pointer;
    transition: fill .3s cubic-bezier(.33, 1, 1, .96);
}

.urls-container .close-modal svg:hover {
    fill: var(--detailsColor1);
}

/* portfolio modal */
.portfolio-modal {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: -200%;
    margin: auto;
    width: 100%;
    height: 100%;
    background-color: var(--backgroundColor2);
    border-radius: 20px;
    transition: bottom .9s cubic-bezier(.33, 1, 1, .96);
    overflow-y: auto;
    padding: 0rem 1.3rem;
}

.portfolio-modal::-webkit-scrollbar {
    display: none;
}

.portfolio-loop-elements {
    position: relative;
}

.portfolio-loop-elements .portfolio-slider {
    position: relative;
}

.portfolio-loop-elements .image-slider .slide-el {
    padding: 0rem 1rem 0rem 0rem;
}

.portfolio-loop-elements .image-slider img {
    max-height: 25rem;
    border-radius: 20px;
}

@media screen and (max-width: 1399px) {
    .portfolio-loop-elements .image-slider img {
        max-height: 18rem;
    }
}

@media screen and (max-width: 991px) {
    .portfolio-loop-elements .image-slider img {
        max-height: 15rem;
    }
}

@media screen and (max-width: 767px) {
    .portfolio-loop-elements .image-slider .slide-el {
        padding: 0rem .3rem;
    }

    .portfolio-loop-elements .image-slider img {
        max-height: auto;
        width: 100%;
    }
}

.portoflio-url-svg {
    width: 1rem;
    margin: 0rem 0rem 0.1rem 0.3rem;
}

.portfolio-modal h3,
.portfolio-modal h2,
.portfolio-modal p {
    color: var(--detailsColor2);
    overflow-wrap: break-word;
}

.portfolio-modal .close-modal {
    display: flex;
    justify-content: flex-end;
    padding-right: 1rem;
    padding-top: .5rem;
    margin-top: .5rem;
}

.portfolio-modal .close-modal svg {
    fill: var(--detailsColor2);
    width: .8rem;
    cursor: pointer;
    transition: fill .3s cubic-bezier(.33, 1, 1, .96);
}

.portfolio-modal .close-modal svg:hover {
    fill: var(--detailsColor1);
}

.portfolio-modal-open {
    bottom: 0rem;
}

.portfolio-modal-closed {
    bottom: -200%;
}

.portfolio-modal .portfolio-loop-elements .single-portfolio-el:nth-last-child(1) .straight-line {
    display: none;
}

.portfolio-modal .portfolio-loop-elements .single-portfolio-el:nth-last-child(1) .after-line {
    display: none;
}
</style>
