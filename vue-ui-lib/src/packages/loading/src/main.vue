<template>
  <div 
    v-show="visible"
    class="loading-mask"
    :class="[customClass, {'is-fullscreen': fullscreen}]"
    :style="{backgroundColor: background || ''}" >
    <div class="loading-spinner">
       <svg  class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none"/>
        </svg>
        <p v-if="text" class="loading-text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
import {trim, cameCase, addClass, removeClass, getStyle, setStyle} from '../../../utils/dom'
  export default {
    data() {
      return {
        text: '',
        fullscreen: true,
        visible: false,
        customClass: '',
        background: null
      };
    },
    mounted() {
       setTimeout(() => {
          const dom = this.$el
          console.log(dom)
          // console.log(trim(' ab cd '))
          // console.log(cameCase('background-color'), cameCase('border-radius'), cameCase('backgroundColor'))

          // addClass(dom, 'testClass')
          // removeClass(dom, 'hehe')
          // setTimeout(() => {
          //   removeClass(dom, 'testClass')
          //   addClass(dom, 'testClass1 testClass2')
          //   setTimeout(()=>{
          //     removeClass(dom, 'testClass1')
          //   }, 2000)
          // }, 2000);
        
          console.log(getStyle(dom, 'left'), getStyle(dom, 'background-color'))
          // console.log(setStyle(dom, 'backgroundColor', 'rgba(0,0,0,.3)'), setStyle(dom, {fontSize: '18px' }))
      }, 0);
     
    }
  };
</script>
<style lang="scss">
  .loading-mask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: hsla(0,0%,100%,.9);
    transition: opacity .3s;
    z-index: 2000;
    &.is-fullscreen {
      position: fixed;
    }

    .loading-spinner {
      top: 50%;
      width: 100%;
      transform: translateY(-50%);
      text-align: center;
      position: absolute;
      .circular {
        height: 40px;
        width: 40px;
        animation: loading-rotate 2s linear infinite;
      }
      .path {
        animation: loading-dash 1.5s ease-in-out infinite;
        stroke-dasharray: 90,150;
        stroke-dashoffset: 0;
        stroke-width: 2;
        stroke: #409eff;
        stroke-linecap: round;
      }
      .loading-text {
        color: #888;
      }
    }
  }
  @keyframes loading-rotate {
    100% {
      transform: rotate(1turn);
    }
  }
  @keyframes loading-dash {
    0% {
      stroke-dasharray: 1,200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90,150;
      stroke-dashoffset: -40px;
    }

    100% {
      stroke-dasharray: 90,150;
      stroke-dashoffset: -120px;
    }
  }
</style>