<script setup>

/*
variables from two json files will be passed to components as props
*/
import settings from '/src/settings.json'
import portfolio from '/src/portfolio.json'

//get user settings such as text and images from settings.json
let userSettings = ref(settings);

//get user portfolio items
let userPortfolioObj = ref(portfolio);

</script>
<template>
    <div>
        <UIDivider desktop="1rem" tablet="1rem" smartphone="6rem" />
        <!-- general app container -->
        <div class="cards-container container">
            <UIImageAndDescription 
            :userPicture="userSettings.profileImage"
            :userDescription="userSettings.presentation"
            />
            <UINameRoleAndModals
            :userName="userSettings.name"
            :userRole="userSettings.role"
            :userTwitter="userSettings.twitterProfileUrl"
            :userFacebook="userSettings.facebookProfileUrl"
            :userInstagram="userSettings.instagramProfileUrl"
            :userLinkedin="userSettings.linkedinProfileUrl"
            :userGithub="userSettings.githubProfileUrl"
            :userPortfolio="userPortfolioObj"
            />
        </div>
        <UIDivider desktop="1rem" tablet="1rem" smartphone="1rem" />
    </div>
</template>

<style scoped>
/* card style */
.cards-container {
    position: relative;
    overflow-y: hidden;
}
</style>