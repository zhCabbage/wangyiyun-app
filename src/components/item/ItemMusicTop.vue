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
    <!-- 中间部分 -->
    <div class="itemMusicContent">
        <div class="contentLeft">
            <img :src="playlist.coverImgUrl" alt="">
            <div class="playCount">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-gl-play-copy"></use>
                </svg>
                <span>{{ changeCount(playlist.playCount) }}</span>
            </div>
        </div>
        <div class="contentRight">
            <p class="rightP_one">{{ playlist.name }}</p>
            <div class="right_img">
                <img :src="playlist.creator.backgroundUrl" alt="">
                <span>{{ playlist.creator.nickname }}</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-youjiantou1"></use>
                </svg>
            </div>
            <p class="rightP_two">
                <span>{{ playlist.description }}</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-youjiantou1"></use>
                </svg>
            </p>
        </div>
    </div>
    <!-- 脚部部分 -->
    <div class="itemTopFooter">
        <div class="footerItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-pinglun"></use>
            </svg>
            <span>{{ playlist.commentCount }}</span>
        </div>
        <div class="footerItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fenxiang"></use>
            </svg>
            <span>{{ playlist.shareCount }}</span>
        </div>
        <div class="footerItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiazai-wenjianxiazai-07"></use>
            </svg>
            <span>下载</span>
        </div>
        <div class="footerItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xuanze-duoxuan-tianchong"></use>
            </svg>
            <span>多选</span>
        </div>
    </div>
</template>

<script>
export default {
    setup(props) {
        // console.log(props);
        //通过props进行传值，判断如果数据拿不到，就获取sessionStore中的
        if ((props.playlist.creator = "")) {
            props.playlist.creator = JSON.parse(sessionStorage.getItem().playlist).creator
        }
        function changeCount(num) {
            if (num >= 100000000) {
                return (num / 100000000).toFixed(1) + "亿"
            } else if (num >= 10000) {
                return (num / 10000).toFixed(1) + "万"
            }
        }
        return { changeCount }
    },
    props: ['playlist']
}
</script>

<style lang="less" scoped>


.itemMusicTop {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    // padding: .2rem;
    .itemLeft,
    .itemRight {
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 .2rem;

        span {
            font-size: .4rem;
            color: #fff;
        }

        .icon {
            fill: #fff;
        }
    }

    .bgimg {
        width: 100%;
        height: 11rem;
        position: fixed;
        z-index: -1;
        filter: blur(30px);
    }
}

.itemMusicContent {
    display: flex;
    margin-top: .4rem;
    padding: .2rem;
    color: #fff;

    .contentLeft {
        width: 35%;
        height: 2.4rem;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            border-radius: .4rem;
        }

        .playCount {
            position: absolute;
            top: .2rem;
            right: .1rem;
            display: flex;
            align-items: center;
        }
    }

    .contentRight {
        width: 65%;
        margin-left: .2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .right_img {
            width: 100%;
            display: flex;
            align-items: center;

            img {
                width: .5rem;
                height: .5rem;
                border-radius: 50%;
            }

            span {
                margin-left: .2rem;
                color: #ccc;
                font-size: .28rem;
            }

            .icon {
                fill: #ccc;
                width: .2rem;
                height: .2rem;
                margin-left: .2rem;
            }
        }

        .rightP_two {
            // padding: 0 .2rem;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            span {
                color: #ccc;
                font-size: .24rem;
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden; //溢出内容隐藏
                text-overflow: ellipsis; //文本溢出部分用省略号表示
                display: -webkit-box; //特别显示模式
                -webkit-line-clamp: 2; //行数
                line-clamp: 2;
                -webkit-box-orient: vertical; //盒子中内容竖直排列
            }

            .icon {
                fill: #ccc;
                width: .4rem;
                height: .4rem;
            }
        }
    }
}
.itemTopFooter{
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 0 .8rem;
    .footerItem{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: .3rem 0;
        .icon{
            fill: #fff;
            margin-bottom: .2rem;
        }
    }
}
</style>