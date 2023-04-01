<script setup>
const props = defineProps({
    userPicture: String,
    userDescription: String
});
</script>
<template>
    <!-- This row shows the user profile image and, below, the user personal description -->
    <div class="top-section row justify-content-center">
        <!-- top left section with image -->
        <div v-if="userPicture" class="col-lg-12 max-height-top-section">
            <div class="profile-image">
                <div class="img-card">
                    <img :src="`/images/profilePicture/${userPicture}`" alt="Profile Picture">
                </div>
            </div>
        </div>
        <!-- to right section with user presentation -->
        <div v-if="userDescription" class="col-lg-10 d-flex align-items-stretch">
            <div class="profile-description">
                <p v-html="userDescription"></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.top-section .profile-image {
    margin-bottom: 30px;
    border-radius: 100%;
    overflow: hidden;
    position: relative;
    height: 18rem;
    width: 18rem;
    margin: 0px auto;
}

.top-section .profile-image img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
}

@media screen and (max-width: 991px) {
    .top-section .profile-image {
        margin-bottom: 30px;
        border-radius: 100%;
        overflow: hidden;
        position: relative;
        height: 15rem;
        width: 15rem;
        margin: 0px auto;
    }
}

.top-section .profile-description {
    background-color: var(--detailsColor2);
    border-radius: 30px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    margin-top: 30px;
}
</style>