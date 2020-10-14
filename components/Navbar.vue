<template>
    <div :class="$style.navbar">
        <div :class="$style.logo">
            <a href="/" :class="$style.logo_icons">
                <img :class="$style.logo_icon" src="/header/Logo.svg" alt />
                <img :class="$style.logo_title" src="/header/Pepelane.svg" alt />
            </a>
            <div
                :class="$style.logo_text"
                class="navbar__logo-text"
            >World's first affordable airsharing</div>
        </div>
        <div :class="$style.info">
            <div :class="$style.info_icons">
                <a :class="$style.info_night" href="#">
                    <img src="/header/Vector.svg" class="transform" alt />
                    <span>Night mod</span>
                </a>
                <a :class="$style.info_icon" href="#">
                    <img src="/header/Vector1.svg" class="transform" alt />
                </a>
                <a :class="$style.info_icon" href="#">
                    <img src="/header/Frame.svg" class="transform" alt />
                </a>
            </div>
            <div :class="$style.info_user">
                <div :class="$style.user_name">Bessie Cooper</div>
                <a :class="$style.user_img" href>
                    <img class="transform" src="/header/User.svg" alt />
                </a>
            </div>
        </div>
    </div>
</template>



<style module src="@/modulesScss/navBar.scss" lang="scss">
</style>