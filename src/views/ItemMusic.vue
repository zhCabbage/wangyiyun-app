<template>
    <div>
        <ItemMusicTopVue :playlist="state.playlist" />
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { onMounted, reactive } from 'vue'
import { getMusicItemList } from '@/request/api/item'
import ItemMusicTopVue from '@/components/item/ItemMusicTop.vue'
export default {
    setup() {
        const state = reactive({
            playlist: {}
        })
        onMounted(async () => {
            let id = useRoute().query.id
            console.log(id);
            let res = await getMusicItemList(id)
            console.log(res);
            state.playlist = res.data.playlist
            //防止页面刷新，数据丢失，将数据保存到sessionStorage中
            sessionStorage.setItem('itemDatail',JSON.stringify(state))
        })
        return { state }
    },
    components: {
        ItemMusicTopVue
    }
}
</script>

<style lang="less" scoped>

</style>