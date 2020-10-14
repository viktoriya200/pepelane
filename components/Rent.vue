<template>
    <div :class="$style.tabcontent">
        <div class="text" v-if="vehicle">
            {{ vehicle.term_text }}
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
        <div :class="$style.conditions">
            <div class="title">Additional conditions:</div>
            <ul :class="$style.list" class="text">
                <li :class="$style.item">
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </li>
                <li :class="$style.item">
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                </li>
                <li :class="$style.item">
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ["vehicle"]
};
</script>

<style module src="@/modulesScss/id/RentComponent.scss" lang="scss">
</style>