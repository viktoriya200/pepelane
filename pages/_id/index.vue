<template>
    <div :class="$style.vehicle">
        <div :class="$style.image">
            <img v-if="vehicle" :src="vehicle.image" alt />
        </div>
        <div :class="$style.info">
            <a :class="$style.info_title" v-if="vehicle">{{ vehicle.name }}</a>
            <div :class="$style.tabheader">
                <a
                    href
                    @click.prevent="component ='Specifications', activate($event)"
                    class="tabheader__item item_active"
                >Specifications</a>
                <a
                    href
                    @click.prevent="component ='Team', activate($event)"
                    class="tabheader__item"
                >Team</a>
                <a
                    href
                    @click.prevent="component ='Rent', activate($event)"
                    class="tabheader__item"
                >Rent terms</a>
            </div>
            <div>
                <component v-bind:is="component" v-bind:vehicle="vehicle"></component>
            </div>
            <div class="rent">
                <div :class="$style.rent_text" v-if="vehicle">
                    Rent for
                    <span>{{ vehicle.rent }}</span>$/h
                </div>
                <a href="#" class="btn">
                    <span>Rent now</span>
                </a>
            </div>
            <div class="whiteblock"></div>
        </div>
    </div>
</template>

<script>
import vehicles from "@/api/vehicles.json";
import Specifications from "@/components/Specifications";
import Team from "@/components/Team";
import Rent from "@/components/Rent";

export default {
    name: "vehicle",
    components: {
        Specifications,
        Team,
        Rent
    },
    data() {
        return {
            vehicles,
            vehicle: null,
            component: Specifications,
            active: false
        };
    },
    created: function() {
        for (let obj of this.vehicles) {
            if (obj.id === this.$route.params.id) {
                this.vehicle = obj;
            }
        }
    },
    methods: {
        activate(event) {
            const links = document.querySelectorAll(".tabheader__item");
            links.forEach((link, i) => {
                link.classList.remove("item_active");
                if (event.target === link) {
                    links[i].classList.add("item_active");
                }
            });
        }
    }
};
</script>

<style module src="@/modulesScss/id/IdGeneral.scss" lang="scss">
</style>