<template>
    <div class="wrapper">
        <Navbar />
        <main>
            <div class="container">
                <Nuxt />
            </div>
        </main>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
    components: {
        Navbar
    }
};
</script>

<style lang="scss">
.wrapper {
    background-color: #fcfcfc;
}
* {
    padding: 0px;
    margin: 0px;
    border: 0px;
}
*,
*:before,
*:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
a:focus,
a:active {
    outline: none;
}
html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
    min-width: $minwidth;
    position: relative;
    width: 100%;
    color: #677b8f;
}
body {
    font-size: 100%;
    line-height: 1;
    font-size: 14px;
    font-family: $fontfamily;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;

    &.lock {
        overflow: hidden;

        @media (max-width: $md3+px) {
            width: 100%;
            position: fixed;
            overflow: hidden;
        }
    }
}
a,
a:visited {
    text-decoration: none;
}

a:hover {
    text-decoration: none;
}
.text {
    font-weight: 300;
    font-size: 14px;
    line-height: 146%;
    margin: 0px 0px 32px 0px;
}
.title {
    font-size: 24px;
    line-height: 21px;
    color: $dark_grey;
    margin: 0px 0px 32px 0px;
    @media (max-width: $md3+px) {
        margin: 0px 0px 20px 0px;
        font-weight: 700;
    }
    @media (max-width: $md4+px) {
        font-size: 20px;
    }
}
.btn {
    display: inline-block;
    min-width: 136px;
    height: 48px;
    background: #4959ff;
    border-radius: 12px;
    padding: 0px 32px;
    font-weight: 700;
    color: #fcfcfc;
    font-size: 16px;
    line-height: 48px;
    text-align: center;
    @include anim(0.5s, 0s);

    &:hover {
        background: #f84ab3;
    }

    @media (max-width: $md4+px) {
        padding: 0px 24px;
        font-size: 14px;
        width: 111px;
        height: 44px;
        line-height: 44px;
    }
}
.show {
    display: block;
}

.hide {
    display: none;
}

.fade {
    animation-name: fade;
    animation-duration: 1.5s;
}

@keyframes fade {
    from {
        opacity: 0.1;
    }

    to {
        opacity: 1;
    }
}
.transform {
    @include anim(0.6s, 0s);
}
.transform:hover {
    transform: scale(1.15);
}
.tabheader__item {
    padding: 0px 32px 0px 0px;
    font-weight: 700;
    font-size: 16px;
    line-height: 14px;
    color: #677b8f;

    &:hover {
        color: #4959ff;
    }

    @media (max-width: $md4+px) {
        padding: 0px 20px 0px 0px;
    }
}
.item_active {
    color: #4959ff;
}
.rent {
    background: #f3f4f7;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 32px;
    margin: 0px 0px 32px 0px;
    position: relative;
    z-index: 4;

    &:before {
        content: "";
        position: absolute;
        top: -34px;
        left: 0;
        width: 100%;
        height: 34px;
        background: -moz-linear-gradient(
            bottom,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0) 100%
        );
        background: -webkit-linear-gradient(
            bottom,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0) 100%
        );
        background: linear-gradient(
            to top,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0) 100%
        );
    }

    @media (max-width: $md3+px) {
        padding: 12px 24px;
    }
}

.rent-fixed {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0px;
    z-index: 10;
}
.whiteblock {
    display: none;
    // display: block;
    position: fixed;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 34px;
    background-color: #4959ff;
}
</style>
