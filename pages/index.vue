<template>
    <div class="rentBlock">
        <div class="rentBlock__title">
            <div class="rentBlock__title-rent">
                <span>Rent</span>
                <select name="fehiclesFilter" @click.once="setSelectOptions()" v-on:change="selectFilter(this.value)" class="rentBlock-select" ref="select">
                    <option value="whatever">whatever</option>
                </select>
            </div>
            <a href="#" class="rentBlock__title-add">
                <span>Add new</span>
                <img class="transform" src="/rent/Add.svg" alt="">
            </a>
        </div>
        <div class="rentBlock__body">
            <div class="rentBlock__element element" v-for="vehicle in vehicles" :key="vehicle.id">
                <div class="element__content">
                    <nuxt-link :to="`/elements/${vehicle.id}`" class="element__image"><img :src="vehicle.preview" class="transform" alt=""></nuxt-link>
                    <div class="element__info">
                        <nuxt-link :to="`/elements/${vehicle.id}`" class="element__info-title"><span>{{ vehicle.name }}</span></nuxt-link>
                        <div class="element__info-descr">{{ vehicle.description}}</div>
                        <div class="element__info-price"><span>{{ vehicle.rent }}</span> $/h</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="rentForm">
            <div class="rentForm-bg"></div>
            <div class="rentForm__body">
                <div class="rentForm__title">
                    <div class="rentForm__title-text">Add new vehicle</div>
                    <div class="rentForm__title-cross"></div>
                </div>
                <form action="">
                    <img src="/Form.svg" alt="">
                    <input id="file-input" type="file" name="file" multiple class="input__img">
                    <input autocomplete="off" type="text" name="budget" data-value="Project Budget" class="input">
                    <input autocomplete="off" type="text" name="budget" data-value="Project Budget" class="input">
                    <input autocomplete="off" type="text" name="budget" data-value="Project Budget" class="input">
                    <button type="submit" class="btn"></button>
                </form>
            </div>
        </div> -->
    </div>

</template>

<script>
// import vehicles from "./../api/vehicles"
// import vehicles from "./../store/index"
import getVehicles from "@/api/request"


export default {
    name: 'vehicles',
    // data () {
    //     return {vehicles} 
    // },
    async asyncData ({ params, error, store}) {
        var vehicles;
        await getVehicles()
        .then(date => {
            store.commit('SET_VEHICLES',[...date]);
            vehicles = store.getters.GET_VEHICLES;
        })
        .catch((err) => {
            store.commit('SET_VEHICLES',null);
            error({ statusCode: 404, message: 'Post not found' });
        });
        return {vehicles}
    },
    methods:{
        setSelectOptions(){
            const select = this.$refs.select;
            const vehiclesTypes = [];

            function getTypes(){
                vehicles.forEach(vehicle =>{
                    if (!vehiclesTypes.includes(vehicle.type)){
                        vehiclesTypes.push(vehicle.type.toLowerCase());
                    }
                });
            }
            function setTypes(){
                vehiclesTypes.sort().forEach(type =>{
                    let option = document.createElement("option");
                    option.textContent = type;
                    option.value = type;

                    select.append(option);
                });
            }
            getTypes();
            setTypes();
        },
        selectFilter(value){
            var newVehicles = vehicles.filter(obj=>{
                return obj.type === value;
            });
        }
    }
}
</script>

<style lang="scss">

.rentBlock{
    max-width: 1312px;
    background: #F3F4F7;
    border-radius: 48px;
    margin: 0 auto;
    padding: 56px 64px 0px 64px;
    margin: 0px 64px 48px 64px;
    @media (max-width:$md1+px){
        padding: 34px 34px 0px 34px;
        margin: 0px 16px 20px 16px;
    }
    @media (max-width:$md3+px){
        margin: 0px 10px 20px 10px;
        padding: 24px 28px 0px 28px;
    }
    @media (max-width:$md4+px){
        margin: 0px 0px 20px 0px;
        padding: 26px 16px 0px 16px;
    }
    @media (min-width:1440px){
        width: 90vw;
        margin: 0 auto;
        max-width: none;
    }
    @media (min-width:1920px){
        margin: 0 auto;
        max-width: 1728px;
    }
}
.rentBlock__title { 
    display: flex;
    justify-content:space-between;
    align-items:center;
    margin: 0px 0px 40px 0px;
    @media (max-width:$md1+px){
        margin: 0px 0px 25px 0px;
    }
}
.rentBlock__title-rent { 
    font-weight: 700;
    font-size: 40px;
    line-height: 120%;
    color: $dark_grey;
    @media (max-width:$md2+px){
        font-size: 34px;
    }
    @media (max-width:$md3+px){
        font-size: 28px;
    }
    @media (max-width:$md4+px){
        font-size: 24px;
    }
}
.rentBlock-select { 
    user-select: none;
    appearance: none;
    text-align: center;
    background: url("/rent/Arrow.svg") 100% 60%/12px 8px no-repeat; 
    padding: 0px 30px 0px 0px;
    border: none;
    font-weight: 700;
    font-size: 40px;
    color: #4959FF;
    cursor: pointer;
    line-height: 120%;
    @include anim(0.5s,0s);
    &:hover{
        color: #F84AB3;
    }
    @media (max-width:$md2+px){
        font-size: 34px;
    }
    @media (max-width:$md3+px){
        font-size: 28px;
    }
    @media (max-width:$md4+px){
        font-size: 24px;
        background: url("/rent/Arrow.svg") 100% 60%/8px 5.3px no-repeat; 
        padding: 0px 5px 0px 0px;
    }
}
.rentBlock__title-add { 
    height: 48px;
    font-weight: 700;
    font-size: 20px;
    line-height: 140%;
    color: #4959FF;
    display: flex;
    align-items: center;
    position: relative;
    span{
        padding: 0px 20px 0px 0px;
        @media (max-width:$md4+px){
            padding: 0px 12px 0px 0px;
        }
    }
    img{
        @media (max-width:$md4+px){
            max-width: 32px;
        }
    }
    &:after{
		content:'';
		width: 0;
		position: absolute;
		@include anim(0.5s,0s);
		height: 2px;
		left: -5px;
		top: 70%;
		background-color: #F84AB3;
	}
	&:hover{
		&:after{
			width: 60%;
		}
	}
    @media (max-width:$md4+px){
        font-size: 16px;
    }
}
.rentBlock__body { 
    display: flex;
    margin: 0px -16px;
    flex-wrap: wrap;
    @media (max-width:$md2+px){
            margin: 0px -8px;
    }
}
.element { 
    flex: 0 1 33.333%;
    padding: 0px 16px;
    margin: 0px 0px 32px 0px;

    @media (max-width:1265px){
        flex: 0 1 50%;
    }
    @media (max-width:$md2+px){
        padding: 0px 8px;
    }
    @media (max-width:$md3+px){
        flex: 1 1 100%;
        margin: 0px 0px 12px 0px;
    }
}

.element__content { 
    height: 100%;
    display: flex;
    background: #FCFCFC;
    border-radius: 32px;
}
.element__image { 
    margin: 24px 0px 0px 32px;
    border-radius: 24px;
    flex: 0 1 88px;
    height: 88px;
    overflow: hidden;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media (max-width:$md3+px){
        border-radius: 16px;
    }
    @media (max-width:$md4+px){
        margin: 20px 0px 0px 20px;
    }
}
.element__info { 
    padding: 40px 0px 25px 24px;
    max-width: 197px;
    @media (max-width:$md4+px){
        padding: 32px 0px 20px 20px;
    }
}
.element__info-title { 
    display: block;
    font-weight: 700;
    font-size: 16px;
    line-height: 14px;
    color: $dark_grey;
    margin: 0px 0px 12px 0px;
    position: relative;
    &:after{
		content:'';
		width: 0;
		position: absolute;
		@include anim(0.5s,0s);
		height: 2px;
		left: 0;
		top: 100%;
		background-color: #4959FF;
	}
	&:hover{
		&:after{
			left: 0;
			width: 100%;
		}
	}
}
.element__info-descr { 
    font-weight: 300;
    font-size: 12px;
    line-height: 148%;
    min-width: 170px;
    width: auto;
    margin: 0px 0px 16px 0px;
}
.element__info-price { 
    font-weight: 700;
    font-size: 14px;
    line-height: 148%;
    color: #F84AB3;
}
</style>
