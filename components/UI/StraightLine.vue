<script setup>
const props = defineProps({
    lineWidth: String, /* line width value */
    lineColor: String, /* color value */
    justify: String, /* left, center, right */
});
</script>

<template>
    <div class="straight-line" :style="[
        {'height': 1.5 + 'px'},
        {'width': lineWidth},
        {'background-color': `${lineColor}`},
        justify === 'left' ? {'margin-right': 'auto'} : '',
        justify === 'center' ? {'margin': '0px auto'} : '',
        justify === 'right' ? {'margin-left': 'auto'} : '',
        ]"></div>
</template>

<style scoped>
.straight-line {
    position: relative;
}
</style>