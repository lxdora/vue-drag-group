<template>
  <div id="app">
   <vue-drag-group ref="dragGroup" :list="list" direction="vertical" :gap="10" :w="1000" :h="1000"
    :classArr="['drag-group']"
    @updateList="updateList"
    @clickItem="clickItem"
   >
   </vue-drag-group>
  </div>
</template>

<script>
import VueDragGroup from './components/VueDragGroup.vue'

export default {
  name: 'App',
  components: {
    VueDragGroup
  },
  data(){
    return {
      list: [
        {
          "group": false,
          children: null,
          "group_name": null,
          "app": {
            id: 1,
            name:'视频',
            icon: require('@/assets/video.webp')
          },
          "group_id": 1,
          "top": 0,
          "left": 0
        },
        {
          "group": false,
          "children": null,
          "group_name": null,
          "app": {
            "id": 2,
            "name": "相册",
            "icon": null,
          },
          "group_id": null,
          "top": 0,
          "left": 0
        },
        {
          "group": false,
          "children": null,
          "group_name": null,
          "app": {
            "id": 3,
            "name": "相机",
            "icon": null,
          },
          "group_id": null,
          "top": 0,
          "left": 0
        },
        {
          "group": false,
          "children": null,
          "group_name": null,
          "app": {
            "id": 4,
            "name": "日历",
            "icon": null,
          },
          "group_id": null,
          "top": 0,
          "left": 0
        },
        {
          "group": false,
          "children": null,
          "group_name": null,
          "app": {
            "id": 5,
            "name": "时钟",
            "icon": null,
          },
          "group_id": null,
          "top": 0,
          "left": 0
        },
        {
          "group": false,
          "children": null,
          "group_name": null,
          "app": {
            "id": 6,
            "name": "footBook",
            "icon": null,
          },
          "group_id": null,
          "top": 0,
          "left": 0
        },
        {
          "group": false,
          "children": null,
          "group_name": null,
          "app": {
            "id": 7,
            "name": "welove",
            "icon": null,
          },
          "group_id": null,
          "top": 0,
          "left": 0
        },
        {
          "group": false,
          "children": null,
          "group_name": null,
          "app": {
            "id": 8,
            "name": "抖手",
            "icon": null,
          },
          "group_id": null,
          "top": 0,
          "left": 0
        },
        {
          "group": false,
          "children": null,
          "group_name": null,
          "app": {
            "id": 9,
            "name": "快剪啊",
            "icon": null,
          },
          "group_id": null,
          "top":  0,
          "left": 0
        },
        {
          "group": false,
          "children": null,
          "group_name": null,
          "app": {
            "id": 10,
            "name": "阿逗比",
            "icon": null,
          },
          "group_id": null,
          "top": 0,
          "left": 0
        },
        {
          "group": false,
          "children": null,
          "group_name": null,
          "app": {
            "id": 11,
            "name": "联盟荣耀",
            "icon": null,
          },
          "group_id": null,
          "top": 0,
          "left": 0
        },
        {
          "group": false,
          "children": null,
          "group_name": null,
          "app": {
            "id": 12,
            "name": "CS Come",
            "icon": null,
          },
          "group_id": null,
          "top": 0,
          "left": 0
        },
        {
          "group": false,
          "children": null,
          "group_name": null,
          "app": {
            "id": 13,
            "name": "XX直播",
            "icon": null,
          },
          "group_id": null,
          "top": 0,
          "left": 0
        },
        {
          "group": false,
          "children": null,
          "group_name": null,
          "app": {
            "id": 14,
            "name": "音乐",
            "icon": null,
          },
          "group_id": null,
          "top": 0,
          "left": 0
        }
      ]
    }
  },
  methods: {
    updateList(list){
      this.list = list;
    },
    clickItem(item){
      console.log({item});
    }
  }
}
</script>

<style lang="scss">
.drag-group{
  background-color: rgba($color: #000000, $alpha: 0.5);
  color: #fff;
}
</style>
