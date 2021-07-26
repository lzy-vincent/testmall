<template>
    <div id="tabbaritem" @click="itemclick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
            <div v-else><slot name="item-icon-active"></slot></div>
            <div :class="{active: isActive}"><slot name="item-text"></slot></div>
            </div>
</template>

<script>
export default {
    name:'tabbaritem',
    props: {
        path:{
            type: String 
        },
    },
    data(){
        return {

        }
    },
    methods:{
        itemclick() {
        //    this.isActive = ! this.isActive
           this.$router.replace(this.path)
           console.log(this.isActive);
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
        }
    }
}
</script>

<style scoped>
    #tabbaritem{
        flex: 1;
        font-size: 14px;
    }
    #tabbaritem>>>img{
        height: 24px;
        width: 24px;
        margin-top: 5px;
        vertical-align: middle;
    }
    .active{
        color: red;
    }
</style>