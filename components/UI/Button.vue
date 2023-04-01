<script setup>
const props = defineProps({
    text: String, /* button text */
    url: String, /* target url */
});
</script>
<template>
    <NuxtLink :to="url" class="c-button">
        <!-- circle with arrow element inside button -->
        <div class="circle-and-arrow-container">
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path
                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
        </div>
        <!-- text next to arrow -->
        <p class="button-text">{{ text }}</p>
    </NuxtLink>
</template>

<style scoped>
.c-button {
    display: inline-flex;
    text-decoration: none;
    border: 1px solid var(--detailsColor1);
    border-radius: 30px;
    padding: 9px 30px 9px 9px;
    align-items: center;
    transition: background-color 0.4s cubic-bezier(.56, .25, .31, 1);
    position: relative;
    overflow: hidden;
}

.circle-and-arrow-container {
    width: 40px;
    height: 40px;
    background-color: var(--detailsColor1);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    transition: transform .4s cubic-bezier(.33,1,1,.96), background-color .4s cubic-bezier(.33,1,1,.96);
}

.c-button:hover {
    background-color: var(--detailsColor1);
}

.c-button:hover .circle-and-arrow-container {
    background-color: var(--detailsColor2);
}

.circle-and-arrow-container svg{
    width: 18px;
    height: auto;
    fill: var(--detailsColor2);
}

.c-button:hover .circle-and-arrow-container svg {
    fill: var(--detailsColor1);
}

.c-button .button-text {
    margin-left: 1rem;
    color: var(--detailsColor1);
    transition: color .4s cubic-bezier(.33,1,1,.96);
}

.c-button:hover .button-text {
    color: var(--detailsColor2);
}
</style>