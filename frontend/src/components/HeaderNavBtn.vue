<script setup lang="ts">
defineProps({
    icon: String,
    title: String
})
</script>

<template>
    <a class="navigation-item" :href="`/#${title}`">
        <i :class="`navigation-item-image fa ${icon}`"></i>
        <span class="navigation-item-title">{{ title }}</span>
    </a>
</template>

<style scoped>
* {
    color: var(--text-secondary);
    background: var(--background-secondary);
}

.navigation-item {
    display: flex;
    text-decoration: none;
    align-items: center;
    gap: 6px;
    padding: 8px;
    border-radius: 5px;
    transition: 0.25s;
}

.navigation-item * {
    display: flex;
    align-items: center;
    transition: 0.25s;
    margin: 0px;
}

.navigation-item-image {
    font-size: 16px;
}

.navigation-item-title {
    font-size: 14px;
}

.navigation-item:hover {
    scale: 1.05;
}

.navigation-item:hover, .navigation-item:hover * {
    background-color: var(--background-primary);
}
</style>