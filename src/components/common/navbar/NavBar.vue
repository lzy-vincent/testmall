<template>
    <div class="navbar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
    name:'NavBar'
}
</script>

<style scoped>
.navbar {
    width: 100%;
    display: flex;
    height: 44px;
    text-align: center;
    align-items: center;
}
.center {

    flex: 1;
   
}
.left {
    width: 60px;
}
.right {
    width: 60px;
}
</style>