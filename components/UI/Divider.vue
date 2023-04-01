<script setup>
const props = defineProps({
    desktop: String,
    tablet: String,
    smartphone: String
});

//define var to set up divider height based on viewport width
let size = ref();

//define function to manage divider height based on viewport width
const checkScreenSize = () => {
    let windowWidth = window.innerWidth;
    if (windowWidth) {
        //load desktop divider
        if (windowWidth >= 992) {
            size.value = props.desktop;
        }

        //load small desktop/tablet divider
        if (windowWidth < 992) {
            size.value = props.tablet;
        }

        //load mobile divider
        if (windowWidth <= 576) {
            size.value = props.smartphone;
        }
    } else {
        console.log('Error getting window size');
    }
}

//after app mounted, launch checkScreenSize() to check screen resolution at startup
//every time window resize, launch checkScreenSize() to check screen resolution
onMounted(() => {
    checkScreenSize();
    window.addEventListener('resize', () => {
        checkScreenSize();
    });
});
</script>

<template>
    <div class="divider" :style="{ 'height': size }"></div>
</template>

<style scoped></style>