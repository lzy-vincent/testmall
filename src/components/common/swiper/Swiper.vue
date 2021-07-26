<template>
    <div id="hy-swiper">
        <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
            <slot></slot>
        </div>
        <div class="indicator">
            <slot name="indicator" v-if="showIndicator && slideCount>1">
                <div v-for="(item, index) in slideCount" :key="index" 
                class="indicator-item" :class="{active: index === currentIndex - 1}"></div>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'Swiper',
    props: {
        showIndicator: {
            type: Boolean,
            default: true
        },
        interval: {
            type: Number,
            default: 3000
        },
        animDuration: {
            type: Number,
            default: 300
        },
        moveRatio: {
            type: Number,
            default: 0.25
        },
    },
    data() {
        return {
            slideCount: 0,
            currentIndex: 1,
            swiperStyle:{},
            scrolling: false,
            totalWidth:0
        }
    },
    mounted: function() {
        setTimeout(() => {
            this.handleDom();

            this.startTimer();
        }, 100)
    },
    methods: {
            handleDom: function() {
                let swiperEls = document.querySelector('.swiper')
                let slidesEls = swiperEls.getElementsByClassName('slide')

                this.slideCount = slidesEls.length

                if(this.slideCount > 1){
                    const firstNode = slidesEls[0].cloneNode(true)
                    const lastNode = slidesEls[this.slideCount - 1].cloneNode(true)
                    swiperEls.insertBefore(lastNode, slidesEls[0])
                    swiperEls.appendChild(firstNode)
                    this.totalWidth = swiperEls.offsetWidth
                    this.swiperStyle = swiperEls.style
                    

                }
                this.setTransform(-this.totalWidth)
            },

            setTransform(position) {
                this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
                this.swiperStyle[`-webkit-transfrom`] = `translate3d(${position}px), 0, 0`;
                this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
            },

            startTimer: function() {
                this.playTimer = window.setInterval(() => {
                    this.currentIndex++;
                    this.scrollContent(-this.currentIndex * this.totalWidth)
                }, this.interval)
            },
            scrollContent: function(currentPosition) {
                this.scrolling = true
                
                this.swiperStyle.transition ='transform '+ this.animDuration + 'ms';
                console.log(this.swiperStyle.transition);
                this.setTransform(currentPosition)

                this.checkPosition()

                this.scrolling = false
            },
            checkPosition: function () {
                window.setTimeout(() => {
                // 1.校验正确的位置
                this.swiperStyle.transition = '0ms';
                if (this.currentIndex >= this.slideCount + 1) {
                    this.currentIndex = 1;
                    this.setTransform(-this.currentIndex * this.totalWidth);
                } else if (this.currentIndex <= 0) {
                    this.currentIndex = this.slideCount;
                    this.setTransform(-this.currentIndex * this.totalWidth);
                }

                // 2.结束移动后的回调
                this.$emit('transitionEnd', this.currentIndex-1);
                }, this.animDuration)
            },
            stopTimer: function () {
                window.clearInterval(this.playTimer);
            },

            // 以下是鼠标拖动的实现
            touchStart: function(e) {
                if(this.scrolling) return;
                this.stopTimer();
                this.startX = e.touches[0].pageX

            },

            touchMove: function(e) {
                this.currentX = e.touches[0].pageX
                this.distance = this.currentX - this.startX
                let currentPosition = -this.currentIndex * this.totalWidth
                let moveDistance = this.distance + currentPosition
                this.setTransform(moveDistance)

            },

            touchEnd(e) {
                let currentMove = Math.abs(this.distance)
                if(this.distance >= 0 && currentMove > this.totalWidth * this.moveRatio){
                    this.currentIndex--;
                }else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio){
                    this.currentIndex++;
                }
                this.scrollContent(-this.currentIndex * this.totalWidth)

                this.startTimer()
                console.log('touchend:', e);
            },

            previous() {
                this.changeItem(-1)
            },
            next() {
                this.changeItem(1)
            },

            changeItem(num) {
                this.stopTimer();
                this.currentIndex += num;
                this.scrollContent(-this.currentIndex * this.totalWidth)

                this.startTimer();
            }
        }
}
</script>

<style scoped>
#hy-swiper {
    overflow:hidden;
    position: relative;
}
.swiper {
    display: flex;
}
.indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
    z-index: 5;
}
.indicator-item {
   box-sizing: border-box;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin: 0 5px; 
}
.indicator-item.active {
    background-color: rgba(212, 62, 46, 1.0);
}
</style>