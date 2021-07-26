<template>
    <swiper class="home-swiper" v-if="banners.length">
            <swiper-item v-for="(item, index) in banners" :key="index" class="item">
                <template #default>
                    <a :href="item.link">
                    <img :src="item.image" alt="" >
                </a>
                </template>
            </swiper-item>
        </swiper>
</template>

<script>
import { Swiper, SwiperItem} from 'components/common/swiper'
export default {
    name:'HomeSwiper',
    data() {
        return {
            isLoaded: false
        }
    },
    props: {
        banners: {
            type:Array,
            required: true
        }
    },
    components:{
        Swiper,
        SwiperItem
    },
    methods: {
        
    }
}
</script>

<style scoped>
.item img {
    width: 100%
}
</style>