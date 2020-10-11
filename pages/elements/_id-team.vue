<template>
    <div class="vehicleBlock">
        <div class="vehicleBlock__image"><img v-if="vehicle" :src="vehicle.image" alt=""></div>
        <div class="vehicleBlock__info">
            <a class="vehicleBlock__info-title" v-if="vehicle">{{ vehicle.name }}</a>
            <div class="tabheader">
                <nuxt-link :to="`/elements/${vehicle.id}`" class="tabheader-item " >Specifications</nuxt-link>
                <nuxt-link :to="`/elements/${vehicle.id}-team`" class="tabheader-item tabheader-item-active" >Team</nuxt-link>
                <nuxt-link :to="`/elements/${vehicle.id}-rent`" class="tabheader-item" >Rent terms</nuxt-link>
            </div>
            <div class="tabcontainer">
                <div class="tabcontent">
                    <div class="tabcontent__text text" v-if="vehicle">
                        {{ vehicle.team_text }}
                    </div>
                    <div class="tabcontent__specialists specialists">
                        <div class="specialists__title title">Qualified specialists</div>
                        <div class="specialists__row">
                            <div class="specialists__item">
                                <div class="specialists__item-image"><img src="/vehicle/Spec1.svg" alt=""></div>
                                <div class="specialists__item-info">
                                    <div class="specialists__item-name">Marvin McKinney</div>
                                    <div class="specialists__item-position">Pilot assistant</div>
                                </div>
                            </div>
                            <div class="specialists__item">
                                <div class="specialists__item-image"><img src="/vehicle/Spec2.svg" alt=""></div>
                                <div class="specialists__item-info">
                                    <div class="specialists__item-name">Savannah Nguyen</div>
                                    <div class="specialists__item-position">Mechanic</div>
                                </div>
                            </div>
                            <div class="specialists__item">
                                <div class="specialists__item-image"><img src="/vehicle/Spec3.svg" alt=""></div>
                                <div class="specialists__item-info">
                                    <div class="specialists__item-name">Courtney Henry</div>
                                    <div class="specialists__item-position">Stewardess</div>
                                </div>
                            </div>
                        </div>
                        <div class="specialists__descr text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
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
    .specialists__row { 
        display: flex;
        margin: 0px -12px;
        @media (max-width:$md1+px){
            margin: 0px -8px;
        }
        @media (max-width:$md2+px){
            flex-wrap: wrap;
            justify-content:center;
        }
    }
    .specialists__item { 
        flex: 0 1 33.333%;
        padding: 0px 12px;
        margin: 0px 0px 32px 0px;
        display: flex;
        flex-direction: column;
        @media (max-width:$md1+px){
            padding: 0px 8px;
        }
        @media (max-width:$md2+px){
            flex: 0 1 50%;
            flex-direction: row;
            margin: 0px 0px 20px 0px;
        }
        @media (max-width:$md3+px){
            flex: 0 1 100%;
        }
    }
    .specialists__item-image { 
        flex: 1 1 100%;
        overflow: hidden;
        border-radius: 16px;
        margin: 0px 0px 16px 0px;
        // height: 96px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        @media (max-width:$md2+px){
            flex: 1 1 50%;
            margin: 0px 0px 0px 0px;
        }
    }
    .specialists__item-info{
        @media (max-width:$md2+px){
            flex: 0 1 75%;
            padding: 17px 0px 0px 20px;
        }
    }
    .specialists__item-name { 
        font-weight: 700;
        font-size: 16px;
        line-height: 14px;
        color: $dark_grey;
        margin: 0px 0px 8px 0px;
    }
    .specialists__item-position { 
        font-weight: 300;
        font-size: 12px;
        line-height: 148%;
    }
    .specialists__descr { 
        margin: 0px 0px 49px 0px;
        @media (max-width:$md3+px){
            margin: 0px 0px 32px 0px;
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