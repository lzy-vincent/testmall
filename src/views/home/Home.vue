<template>
    <div class="home">
        <nav-bar class="home-nav">
            <template #left></template>
            <template #center>
                购物街
            </template>
            <template #right></template>
        </nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommend="recommend"></recommend-view>
        <feature/>
        <tab-control :title="['流行', '新款', '精选']" class="tabcontrol"></tab-control>
        <goods :goods="goods['pop'].list"></goods>
        <ul>
            <li>列表1</li>
            <li>列表2</li>
            <li>列表3</li>
            <li>列表4</li>
            <li>列表5</li>
            <li>列表6</li>
            <li>列表7</li>
            <li>列表8</li>
            <li>列表9</li>
            <li>列表10</li>
            <li>列表11</li>
            <li>列表12</li>
            <li>列表13</li>
            <li>列表14</li>
            <li>列表15</li>
            <li>列表16</li>
            <li>列表17</li>
            <li>列表18</li>
            <li>列表19</li>
            <li>列表20</li>
            <li>列表21</li>
            <li>列表22</li>
            <li>列表23</li>
            <li>列表24</li>
            <li>列表25</li>
            <li>列表26</li>
            <li>列表27</li>
            <li>列表28</li>
            <li>列表29</li>
            <li>列表30</li>
            <li>列表31</li>
            <li>列表32</li>
            <li>列表33</li>
            <li>列表34</li>
            <li>列表35</li>
            <li>列表36</li>
            <li>列表37</li>
            <li>列表38</li>
            <li>列表39</li>
            <li>列表40</li>
            <li>列表41</li>
            <li>列表42</li>
            <li>列表43</li>
            <li>列表44</li>
            <li>列表45</li>
            <li>列表46</li>
            <li>列表47</li>
            <li>列表48</li>
            <li>列表49</li>
            <li>列表50</li>
            <li>列表51</li>
            <li>列表52</li>
            <li>列表53</li>
            <li>列表54</li>
            <li>列表55</li>
            <li>列表56</li>
            <li>列表57</li>
            <li>列表58</li>
            <li>列表59</li>
            <li>列表60</li>
            <li>列表61</li>
            <li>列表62</li>
            <li>列表63</li>
            <li>列表64</li>
            <li>列表65</li>
            <li>列表66</li>
            <li>列表67</li>
            <li>列表68</li>
            <li>列表69</li>
            <li>列表70</li>
            <li>列表71</li>
            <li>列表72</li>
            <li>列表73</li>
            <li>列表74</li>
            <li>列表75</li>
            <li>列表76</li>
            <li>列表77</li>
            <li>列表78</li>
            <li>列表79</li>
            <li>列表80</li>
            <li>列表81</li>
            <li>列表82</li>
            <li>列表83</li>
            <li>列表84</li>
            <li>列表85</li>
            <li>列表86</li>
            <li>列表87</li>
            <li>列表88</li>
            <li>列表89</li>
            <li>列表90</li>
            <li>列表91</li>
            <li>列表92</li>
            <li>列表93</li>
            <li>列表94</li>
            <li>列表95</li>
            <li>列表96</li>
            <li>列表97</li>
            <li>列表98</li>
            <li>列表99</li>
            <li>列表100</li>
        </ul>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import {getHomeMultidata, getHomeGoodsdata} from 'network/home.js'
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import Feature from './childComps/Feature.vue'
import TabControl from '../../components/content/TabControl.vue'
import Goods from '../../components/content/goods/Goods.vue'



export default {
    name:'home',
    data(){
        return {
            num: 1,
            banners:[],
            dKeyword:[],
            recommend: [],
            keywords: [],
            goods:{
                    'pop':{page:0, list:[]},
                    'new':{page:0, list:[]},
                    'sell':{page:0, list:[]},
                }
        }
    },
    components:{
        NavBar,
        HomeSwiper,
        RecommendView,
        Feature,
        TabControl,
        Goods,
    },

    created() {
        this._getHomeMultidata()

        this._getHomeGoodsdata('pop')
        this._getHomeGoodsdata('new')
        this._getHomeGoodsdata('sell')
        
    },
    methods: {
        _getHomeMultidata() {
            getHomeMultidata().then(res =>{
            this.banners = res.data.banner.list,
            this.recommend = res.data.recommend.list,
            this.dKeyword = res.data.dKeyword.list,
            this.keywords = res.data.keywords.list
            }
        )
        },
        _getHomeGoodsdata(type) {
            const page = this.goods[type].page + 1
            getHomeGoodsdata(type, page).then(res => {
            const newlist = res.data.list
            this.goods[type].list.push(...newlist)
            this.goods[type].page += 1
        })
        }
    }
}
</script>

<style scoped>
.home {
    height: 100vh;
    overflow: scroll;
}
.home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    z-index: 5;
}
.home-swiper {
    padding-top: 44px;
}
.tabcontrol{
    position: sticky;
    top: 44px;
    background-color: #fff;
}
</style>