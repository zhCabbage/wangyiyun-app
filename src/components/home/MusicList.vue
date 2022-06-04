<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">更多</div>
    </div>
    <div class="musicContent">
      <van-swipe :loop="false" :width="150" :show-indicators="false" class="my-swipe">
        <van-swipe-item v-for="item in state.musicList" :key="item">
          <router-link :to="{ path:'/itemMusic',query:{id:item.id}}">
            <img :src="item.picUrl" alt="">
            <span class="playCount">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gl-play-copy"></use>
              </svg>
              {{ changeCount(item.playCount) }}
            </span>
            <span class="name">{{ item.name }}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { getMusicList } from "@/request/api/home";
import { reactive, onMounted } from "vue";
export default {
  // data() {
  //   return {
  //     musicList: [],
  //   };
  // },
  // methods: {
  //   async getGnedan() {
  //     let res = await getMusicList();
  //     console.log(res.data.result);
  //     this.musicList = res.data.result
  //   },
  //   changeCount: function (num) {
  //     if (num >= 100000000) {
  //       return (num / 100000000).toFixed(1) + "亿"
  //     } else if (num >= 10000) {
  //       return (num / 10000).toFixed(1) + "万"
  //     }
  //   }
  // },
  // mounted() {
  //   this.getGnedan();
  //   console.log(this.musicList);
  // },
  // vue3
  setup() {
    const state = reactive({
      musicList: [],
    })
    function changeCount(num) {
      if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + "亿"
      } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + "万"
      }
    }
    onMounted(async () => {
      let res = await getMusicList();
      console.log(res);
      state.musicList = res.data.result
    })
    return { state, changeCount }
  }
};
</script>

<style lang="less" scoped>
.musicList {
  width: 100%;
  height: 5rem;
  padding: 0.2rem;

  .musicTop {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;

    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }

    .more {
      border: 1px solid #ccc;
      text-align: center;
      line-height: 0.6rem;
      padding: 0 0.2rem;
      border-radius: 4rem;
    }
  }

  .musicContent {
    width: 100%;
    height: 4rem;

    .my-swipe {
      height: 100%;
      position: relative;

      .van-swipe-item {
        padding-right: .2rem;

        img {
          width: 100%;
          height: 3rem;
          border-radius: .4rem;
        }

        .playCount {
          position: absolute;
          top: .2rem;
          right: .4rem;
          display: flex;
          align-items: center;
          color: #fff;

          svg {
            width: .4rem;
            height: .4rem;
            margin-right: .1rem;
          }
        }
      }
    }
  }
}
</style>
