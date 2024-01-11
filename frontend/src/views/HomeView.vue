<script setup lang="ts"></script>

<template>
    <section id="home">
        <div class="homepage-text">
            <h1 class="homepage-text-title">I maintain water filters</h1>
            <p class="homepage-text-body">Hi! I'm Mr. Luo and I provide various water-filter related services. Think your water's tasting strange? Book a session with me and I'll tell you what's wrong!</p>
            <button class="homepage-text-btn">Make an appointment</button>
        </div>
        <img class="homepage-image" src="/homepage-image.png">
    </section>
</template>

<style scoped>
#home {
    height: 100vh;
    display: grid;
    grid-template-columns: 350px 350px;
    justify-content: center;
    gap: 40px;
    padding-top: 20vh;
    align-items: start;
}

/* text section */
.homepage-text {
    grid-column: 1;
}

.homepage-text-title {
    font-size: 36px;
    margin: 0px;
    line-height: 1.5;
}

.homepage-text-body {
    font-size: 16px;
    line-height: 1.4;
    color: var(--text-secondary);
}

.homepage-text-btn {
    background-color: var(--highlight);
    border: none;
    border-radius: 5px;
    padding: 8px 10px;
    font-size: 16px;
    font-family: var(--font-family-default);
    color: var(--background-primary);
    margin-top: 10px;
    font-weight: bold;
    transition: 0.25s;

    animation: homepage-btn-slide-up 1.5s cubic-bezier(0, 0.3, 0.3, 1);
}

.homepage-text-btn:hover {
    background-color: var(--highlight-secondary);
}

/* image */
.homepage-image {
    grid-column: 2;
    max-width: 100%;
    border-radius: 15px;
}

/* animations */
@keyframes homepage-btn-slide-up {
    0% {
        transform: translateY(500px);
    }

    50% {
        transform: translateY(500px);
    }

    100% {
        transform: translateY(0px);
    }
}
</style>