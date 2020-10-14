<template>
    <div :class="$style.rent_body">
        <div :class="$style.element" v-for="vehicle in vehicles" :key="vehicle.id">
            <div :class="$style.content">
                <nuxt-link :to="`/${vehicle.id}/`" :class="$style.image">
                    <img :src="vehicle.preview" class="transform" alt />
                </nuxt-link>
                <div :class="$style.info">
                    <nuxt-link :to="`/${vehicle.id}/`" :class="$style.info_title">
                        <span>{{ vehicle.name }}</span>
                    </nuxt-link>
                    <div :class="$style.info_descr">{{ vehicle.description}}</div>
                    <div :class="$style.info_price">
                        <span>{{ vehicle.rent }}</span> $/h
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["vehicles"]
};
</script>

<style module src="@/modulesScss/rentBody.scss" lang="scss">
</style>