<template>
    <div class="recommend-view">
        <div v-for="item, index in recommend" :key="index" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:'RecommendView',
    props: {
        recommend: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
    
</script>

<style scoped>
.recommend-view {
    display: flex;
    flex-direction: row;
    width: 100%;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: solid 8px #eee;
}
.recommend-item {
    flex: 1;
}
a img {
    height: 80px;
    width: 80px;
}
</style>