<template>
  <div class="app-icon">
    <div class="img-box" :style="{
      width: width +'px',
      height: height +'px',
      'border-radius': borderRadius + 'px'
    }"  >
      <img width="100%" height="100%" v-if="getIcon(app)" :src="getIcon(app)" alt draggable="false" />
      <div v-else class="app-word-item"
        :style="{
          width: width +'px',
          height: height +'px',
          'line-height': height +'px',
        }"
      >
        <div class="word" :style="{
          'font-size': font.size + 'px',
          'font-weight': font.weight
        }">{{getFirstName(app.name)}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppIcon',
  props: {
    app:{
      type: Object,
      default: ()=>{}
    },
    width:{
      type: Number,
      default: 64
    },
    height:{
      type: Number,
      default: 64
    },
    borderRadius:{
      type: Number,
      default: 16
    },
    font: {
      type: Object,
      default: ()=>({
        size: 36,
        weight: 400
      })
    }
    },
  data(){
    return {
    }
  },
  methods: {
    getIcon (item) {
      let { icon } = item
      return icon
    },
    getFirstName (name) {
      if(name){
        let _nameArr = name.split('')
        if (/^[0-9A-Za-z]/.test(_nameArr[0] + _nameArr[1])) {
          return _nameArr[0] + _nameArr[1]
        } else {
          return _nameArr[0]
        }
      }
    },
  }
}
</script>

<style lang='scss' scoped>
.app-icon{
  overflow: hidden;
  .img-box{
    overflow: hidden;
    margin: 0 auto;
  }
  .app-word-item{
    user-select: none;
    text-align: center;
    color: #FFF;
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);;
  }
}

</style>