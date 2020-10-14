<template>
    <div :class="$style.block" class="errorBlock">
        <div :class="$style.title" class="errorBlock-title">An error has occurred</div>
        <div :class="$style.text" class="errorBlock-text">Please refresh the page</div>
        <a href="/" :class="$style.btn" class="btn errorBlock-btn">
            <span>Reload page</span>
        </a>
    </div>
</template>

<script>
export default {
    name: "errorPage",
    props: {
        error: {
            type: Object,
            default: () => {}
        }
    }
};
</script>

<style module src="@/modulesScss/error.scss" lang="scss">
</style>