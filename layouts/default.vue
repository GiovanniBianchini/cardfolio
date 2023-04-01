<template>
        <div id="app-cont">
            <ClientOnly>
                <slot />
            </ClientOnly>
        </div>
</template>

<style scoped>
    #app-cont {
        width: 100%;
        height: 100%;
        min-height: 100vh;
        background-color: var(--backgroundColor3);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>