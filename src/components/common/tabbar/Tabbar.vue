<template>
    <div class="tabbar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'tabbar',
}
</script>

<style scoped>
.tabbar {
    background-color: #f6f6f6;
    height: 49px;
    border-top: 1px solid #eee;
    box-shadow: 0 -1px 1px rgba(150,150,150,.08);

    display: flex;
    text-align: center;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>