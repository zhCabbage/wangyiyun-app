<template>
    <div class="itemMusicTop">
        <img :src="playlist.coverImgUrl" alt="" class="bgimg">
        <div class="itemLeft">
            <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                <use xlink:href="#icon-zuojiantou"></use>
            </svg>
            <span>歌单</span>
        </div>
        <div class="itemRight">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-31liebiao"></use>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    setup(props){
        console.log(props);
    },
    props: ['playlist']
}
</script>

<style lang="less" scoped>


.itemMusicTop{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding: .2rem;
    .itemLeft,.itemRight{
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 .2rem;
        span{
            font-size: .4rem;
            color: #fff;
        }
        .icon{
            fill:#fff;
        }
    }
    .bgimg{
        width: 100%;
        height: 11rem;
        position:fixed;
        z-index: -1;
        filter: blur(30px);
    }
}
</style>