<template>
    <div :class="$style.rent">
        <div :class="$style.title">
            <div :class="$style.title_rent">
                <span>Rent</span>
                <select
                    v-model="filter"
                    name="fehiclesFilter"
                    @click.once="setSelectOptions"
                    :class="$style.select"
                    ref="select"
                >
                    <option value="whatever">whatever</option>
                </select>
            </div>
            <a href="#" :class="$style.title_add">
                <span>Add new</span>
                <img class="transform" src="/rent/Add.svg" alt />
            </a>
        </div>
        <RentBody v-bind:vehicles="filterVehicles" />
    </div>
</template>

<script>
import getVehicles from "@/api/request";
import RentBody from "@/components/RentBlock_body";

export default {
    name: "rebtblock",
    components: {
        RentBody
    },
    data() {
        return {
            filter: "whatever",
            vehicles: null,
            vehiclesTypes: [],
            ts: []
        };
    },
    created: function() {
        this.vehicles = this.$store.getters.GET_VEHICLES;
    },
    asyncData({ params, error, store }) {
        return getVehicles()
            .then(arr => {
                store.commit("SET_VEHICLES", [...arr]);
            })
            .catch(err => {
                store.commit("SET_VEHICLES", null);
                error({ statusCode: 404, message: "Post not found" });
            });
    },
    computed: {
        filterVehicles() {
            if (this.filter === "whatever") {
                return this.vehicles;
            } else {
                this.vehiclesTypes.forEach(item => {
                    if (this.filter === item) {
                        this.ts = this.vehicles.filter(t => t.type === item);
                    }
                });
                return this.ts;
            }
        }
    },
    methods: {
        setSelectOptions() {
            const select = this.$refs.select;
            this.vehicles.forEach(vehicle => {
                if (!this.vehiclesTypes.includes(vehicle.type)) {
                    this.vehiclesTypes.push(vehicle.type.toLowerCase());
                }
            });
            this.vehiclesTypes.sort().forEach(type => {
                const option = document.createElement("option");
                option.textContent = type;
                option.value = type;
                select.append(option);
            });
        }
    }
};
</script>

<style module src="@/modulesScss/rentBlock.scss" lang="scss">
</style>
