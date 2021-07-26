<template>
    <div class="tab-control">
        <div v-for="item,index in title" :key="index" class="itemControl" :class="{active: index === currentIndex}" @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'TabControl',
    props:{
        title:{
            type:Array,
            default() {
                return []
            }
        }
    },
    data () {
        return {
            currentIndex: 0
        }
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index
        }
    }
}
</script>

<style scoped>
.tab-control {
    display: flex;
    text-align: center;
}
.itemControl{
    flex:1;
    height: 44px;
    line-height: 44px;
}
.active span{
    padding: 5px;
    color: var(--color-high-text);
    border-bottom: solid 3px;
}

</style>