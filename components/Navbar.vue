<template>
    <div class="navbar">
        <div class="navbar__logo">
            <div class="navbar__logo-icons logo">
                <img class="logo-icon" src="/header/Logo.svg" alt="">
                <a class="logo-title" href=""><img src="/header/Pepelane.svg" alt=""></a>
            </div>
            <div class="navbar__logo-text">World's first affordable airsharing</div>
        </div>
        <div class="navbar__info">
            <div class="navbar__info__icons">
                <a class="navbar__info__night" href="#"> <img src="/header/Vector.svg" class="transform" alt=""><span>Night mod</span></a>
                <a class="navbar__info__icon" href="#"> <img src="/header/Vector1.svg" class="transform" alt=""></a>
                <a class="navbar__info__icon" href="#"> <img src="/header/Frame.svg" class="transform" alt=""></a>
            </div>
            <div class="navbar__info__user">
                <div class="navbar__info__user-name">Bessie Cooper</div> 
                <a class="navbar__info__user-img" href=""><img class="transform" src="/header/User.svg" alt=""></a>
            </div>
        </div>
    </div>
</template>



<style lang="scss">
    .navbar { 
        display: flex;
        justify-content:space-between;
        align-items:center;
        padding: 44px 64px;
        background-color: #FCFCFC;
        @media (max-width:$md2+px){
            padding: 24px 44px;
        }
        @media (max-width:$md3+px){
            padding: 18px 20px;
        }
        @media (max-width:$md4+px){
            padding: 12px;
        }
        @media (min-width:1440px){
            width: 98vw;
            margin: 0 auto;
        }
        @media (min-width:1920px){
            max-width: 1728px;
            margin: 0px auto;
            padding: 44px 0px;
        }
    }
    .navbar__logo { 
        display: flex;
        justify-content:space-between;
        align-items:center;
        max-width: 490px;
        width: 100%;
    }
    .navbar__logo-icons { 
        display: flex;
        justify-content:space-between;
        align-items:center;
        max-width: 170px;
    }
    .logo-icon { 
        padding: 0px 18px 0px 0px;
        @media (max-width:$md4+px){
            padding: 0px 12px 0px 0px;
            max-width: 44px;
        }
    }
    .logo-title img{
        @media (max-width:$md4+px){
            max-width: 70px;
            padding: 5px 0px 0px 0px;
        }
    }
    .navbar__logo-text { 
        font-weight: 300;
        font-size: 16px;
        line-height: 152%;
        @media (max-width:$md2+px){
            display: none;
        }
    }
    .navbar__info { 
        display: flex;
        justify-content:space-between;
        align-items:center;
        width:100%;
        max-width: 513px;
    }
    .navbar__info__icons { 
        display: flex;
        align-items:center;
        max-width: 323px;
        width: 100%;
        justify-content:flex-end;
        a{
            padding: 0px 29px 0px 0px;
        }
        @media (max-width:$md4+px){
            a{
                padding: 0px 20px 0px 0px;
                &:last-child{
                    padding: 0px 25px 0px 0px;
                }
            }
        }
    }
    .navbar__info__icon img{
        @media (max-width:$md4+px){
            max-width: 18px;
            padding: 5px 0px 0px 0px;
        }
    }
    .navbar__info__night { 
        flex-grow: 1;
        font-weight: 300;
        font-size: 16px;
        line-height: 152%;
        color: #677B8F;
        display: flex;
        align-items:center;
        &:hover{
                color: $dark_grey;
            }
        span{
            display: inline-block;
            padding: 0px 0px 0px 18px;
        }
        img{
            @media (max-width:$md4+px){
                max-width: 17px;
            }
        }
    }
    .navbar__info__user { 
        display: flex;
        align-items:center;
        justify-content:space-between;
        width: 100%;
        max-width: 180px;
        @media (max-width:$md3+px){
            max-width: 56px;
        }
        @media (max-width:$md4+px){
            max-width: 32px;
        }
    }
    .navbar__info__user-name{
        font-weight: 700;
        font-size: 16px;
        line-height: 152%;
        color: $dark_grey;
        @media (max-width:$md3+px){
            display: none;
        }
    }
    .navbar__info__user-img{
        height: 56px;
        overflow: hidden;
        flex: 0 0 56px;
        border-radius: 50%;
        
        @media (max-width:$md4+px){
            flex: 0 0 32px;
            height: 32px;
        }
        
    }
    .navbar__info__user-img img{
        max-width: 100%;
    }
    @media (max-width:1265px){
        .navbar__info__night span{
            display: none;
        }
        .navbar__info__night{flex-grow: 0;}
    }

.transform{
    @include anim(0.6s,0s);
}
.transform:hover{
    transform: scale(1.15);
}
</style>