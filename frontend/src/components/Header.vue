<script setup lang="ts">
import HeaderNavBtn from './HeaderNavBtn.vue';
</script>

<template>
    <header>
        <div class="profile">
            <i class="profile-image fa fa-filter"></i>
            <span class="profile-title">Luo Water Filter Maintenance</span>
        </div>
        <nav class="navigation">
            <HeaderNavBtn icon="fa-house" title="Home" />
            <HeaderNavBtn icon="fa-wrench" title="Services" />
            <HeaderNavBtn icon="fa-phone" title="Contact" />
        </nav>
    </header>
</template>

<style scoped>
header {
    height: 50px;
    padding: 0px 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: var(--background-secondary);
    animation: bounce-in 0.5s ease-out;
}

header * {
    background: var(--background-secondary);
}

.profile {
    display: flex;
    align-items: center;
    gap: 6px;
}

.profile-image {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    background-color: var(--background-primary);
    color: var(--highlight)
}

/* navbar */
nav {
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 10px;
}

/* animations */
@keyframes bounce-in {
    0% {
        transform: translateY(-100%);
    }

    100% {
        transform: translateY(0%);
    }
}
</style>