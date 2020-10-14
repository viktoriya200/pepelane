<template>
    <div>
        <div class="text" v-if="vehicle">{{ vehicle.team_text }}</div>
        <div>
            <div class="title">Qualified specialists</div>
            <div :class="$style.row">
                <div :class="$style.item">
                    <div :class="$style.image">
                        <img src="/vehicle/Spec1.svg" alt />
                    </div>
                    <div :class="$style.info">
                        <div :class="$style.name">Marvin McKinney</div>
                        <div :class="$style.position">Pilot assistant</div>
                    </div>
                </div>
                <div :class="$style.item">
                    <div :class="$style.image">
                        <img src="/vehicle/Spec2.svg" alt />
                    </div>
                    <div :class="$style.info">
                        <div :class="$style.name">Savannah Nguyen</div>
                        <div :class="$style.position">Mechanic</div>
                    </div>
                </div>
                <div :class="$style.item">
                    <div :class="$style.image">
                        <img src="/vehicle/Spec3.svg" alt />
                    </div>
                    <div :class="$style.info">
                        <div :class="$style.name">Courtney Henry</div>
                        <div :class="$style.position">Stewardess</div>
                    </div>
                </div>
            </div>
            <div
                :class="$style.descr"
                class="text"
            >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["vehicle"]
};
</script>

<style module src="@/modulesScss/id/TeamComponent.scss" lang="scss">
</style>