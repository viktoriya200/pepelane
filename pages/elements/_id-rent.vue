<template>
    <div class="vehicleBlock">
        <div class="vehicleBlock__image"><img v-if="vehicle" :src="vehicle.image" alt=""></div>
        <div class="vehicleBlock__info">
            <a class="vehicleBlock__info-title" v-if="vehicle">{{ vehicle.name }}</a>
            <div class="tabheader" @click="switchTabs">
                <nuxt-link :to="`/elements/${vehicle.id}`" class="tabheader-item " >Specifications</nuxt-link>
                <nuxt-link :to="`/elements/${vehicle.id}-team`" class="tabheader-item" >Team</nuxt-link>
                <nuxt-link :to="`/elements/${vehicle.id}-rent`" class="tabheader-item tabheader-item-active" >Rent terms</nuxt-link>
            </div>
            <div class="tabcontainer">
                <div class="tabcontent">
                    <div class="tabcontent__text text" v-if="vehicle">
                        {{ vehicle.term_text }}
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <div class="tabcontent__conditions conditions">
                        <div class="conditions__title title">Additional conditions:</div>
                        <ul class="conditions__list text">
                            <li class="conditions__list-item">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</li>
                            <li class="conditions__list-item">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</li>
                            <li class="conditions__list-item">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="vehicleBlock__info-rent rent">
                <div class="rent__text" v-if="vehicle">Rent for <span>{{ vehicle.rent }}</span>$/h</div>
                <a href="#" class="rent__btn btn"><span>Rent now</span></a>
            </div>
        </div>
    </div>
</template>

<script>
    import vehicles from "./../../api/vehicles.json"
    
    export default {
        name: 'vehicles',
        data () {
            return vehicles
        },
        validate ({ params }) {
            // return /^\d+$/.test(params.id)
            return true
        },
        asyncData ({ params }) {
            var vehicle;
            for(let obj of vehicles){
                if (obj.id === params.id){
                    vehicle = obj;
                }
            }
            return {vehicle}
        },
        methods:{

        }
    }
</script>

<style lang="scss">
    .vehicleBlock{
        background-color: #FCFCFC;
        max-width: 1312px;
        margin: 0 auto;
        display: flex;
        padding: 0px 10px;
        @media (max-width:$md2+px){
            flex-wrap: wrap;
            padding: 0px 46px;
        }
        @media (max-width:$md3+px){
            padding: 0px 20px;
        }
        @media (max-width:$md4+px){
            padding: 0px 16px;
        }
    }
    .vehicleBlock__image { 
        flex: 1 1 118%;
        border-radius: 24px;
        overflow: hidden;
        margin: 0px 0px 56px 0px;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        @media (max-width:$md2+px){
            margin: 0px 0px 30px 0px;
        }
        @media (max-width:$md3+px){
            margin: 0px 0px 22px 0px;
        }
    }
    .vehicleBlock__info { 
        padding: 56px 0px 0px 65px;
        @media (max-width:$md1+px){
            padding: 50px 0px 0px 30px;
        }
        @media (max-width:$md2+px){
            padding: 0px 0px 0px 0px;
        }
    }
    .vehicleBlock__info-title { 
        display: inline-block;
        font-weight: 700;
        font-size: 40px;
        line-height: 120%;
        color: $dark_grey;
        margin: 0px 0px 32px 0px;
        @media (max-width:$md2+px){
            margin: 0px 0px 24px 0px;
            font-size: 34px;
        }
        @media (max-width:$md3+px){
            font-size: 28px;
            margin: 0px 0px 20px 0px;
        }
        @media (max-width:$md4+px){
            margin: 0px 0px 16px 0px;
            font-size: 24px;
        }
    }
    .tabheader { 
        display: flex;
        margin: 0px 0px 32px 0px;
        @media (max-width:$md3+px){
            margin: 0px 0px 20px 0px;
        }
    }
    .tabheader-item { 
        padding: 0px 32px 0px 0px;
        font-weight: 700;
        font-size: 16px;
        line-height: 14px;
        color: #677B8F;
        &:hover{
            color: #4959FF;
        }
        @media (max-width:$md4+px){
            padding: 0px 20px 0px 0px;
        }
    }
    .tabheader-item-active { 
        color: #4959FF;
    }
    .tabcontent__text { 
        margin: 0px 0px 32px 0px;
        p{
            margin: 0px 0px 16px 0px;
            @media (max-width:$md3+px){
                margin: 0px 0px 8px 0px;
            }
        }
        @media (max-width:$md3+px){
            margin: 0px 0px 20px 0px;
        }
    }
    
    .tabcontent__conditions { 
        margin: 0px 0px 78px 0px;
        @media (max-width:$md3+px){
            margin: 0px 0px 56px 0px;
        }
        @media (max-width:$md4+px){
            margin: 0px 0px 32px 0px;
        }
    }
    .conditions__list { 
        list-style: none;
    }
    .conditions__list-item { 
        margin: 0px 0px 16px 0px;
        padding: 0px 0px 0px 24px;
        background: url("/vehicle/Dot.svg") 0 8px no-repeat;
        @media (max-width:$md3+px){
            margin: 0px 0px 8px 0px;
        }
    }
    .rent { 
        background: #F3F4F7;
        border-radius: 16px;
        display: flex;
        align-items:center;
        justify-content:space-between;
        padding: 16px 32px;
        margin: 0px 0px 32px 0px;
        @media (max-width:$md3+px){
            padding: 12px 24px;
        }
    }
    .rent__text { 
        font-weight: 700;
        font-size: 20px;
        line-height: 140%;
        color: $dark_grey;
        span{
            color:#F84AB3;
        }
        @media (max-width:$md4+px){
            font-size: 16px;
        }
    }
    .rent__btn { 
    }
</style>