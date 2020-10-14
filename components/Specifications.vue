<template>
    <div>
        <div :class="$style.text" class="text" v-if="vehicle">{{ vehicle.specifications_text }}</div>
        <div :class="$style.features">
            <div class="title">Features:</div>
            <div :class="$style.item">
                <div :class="$style.item_image">
                    <img src="/vehicle/Icon1.svg" alt />
                </div>
                <div>
                    <div :class="$style.item_title">A challenge for a true champion</div>
                    <div
                        class="text"
                    >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</div>
                </div>
            </div>
            <div :class="$style.item">
                <div :class="$style.item_image">
                    <img src="/vehicle/Icon2.svg" alt />
                </div>
                <div>
                    <div :class="$style.item_title">Pilot's sweaty hands</div>
                    <div
                        class="text"
                    >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["vehicle"]
};
</script>

<style module src="@/modulesScss/id/SpecComponent.scss" lang="scss">
</style>