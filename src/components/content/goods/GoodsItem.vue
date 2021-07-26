<template>
 <div class="goodsitem">
     <img :src="goodsitem.show.img" alt="">
     <div class="goods-info">
         <p>{{goodsitem.title}}</p>
         <span>{{goodsitem.price}}</span>
         <span class="collect">{{goodsitem.cfav}}</span>
     </div>
 </div>
</template>

<script>
export default {
    name:'GoodsItem',
    props:{
        goodsitem:{
            type:Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style scoped>
.goodsitem {
    display: flex;
    flex-direction: column;
  }
  .goods-info {
      padding: 5px;
  }
.goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.goodsitem img {
    border-radius: 5px;
  }
span:nth-of-type(1){
    margin-left: 25%;
}
.collect {
    position: relative;
    margin-left: 10%;
}
.collect::before{
    position: absolute;
    content: '';
    left: -15px;
    top: 2px;
    width: 14px;
    height: 14px;
    background: url("~@/assets/img/common/collect.svg") 0 0/14px 14px;

}
</style>