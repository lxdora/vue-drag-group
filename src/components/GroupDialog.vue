<template>
  <div class="app-group-dialog">
    <el-dialog
      title=""
      :visible.sync="show"
      width="470px"
      :destroy-on-close="true"
      :before-close="cancel"
    >
      <div class="app-group">
        <div
          class="app-group-name"
          @mouseenter="mouseEnter"
          @mouseleave="mouseLeave"
        >
          <el-input
            ref="groupNameInput"
            v-model="appGroup.group_name"
            @change="changeGroupName(appGroup)"
            @focus="onFocus"
            @blur="onBlur"
          >
          </el-input>
          <div
            class="app-group-name-edit"
            @click.stop="groupNameFocus"
            v-if="showEdit"
          >
            <img width="18px" height="18px" src="@/assets/group_name_edit.png" alt="" />
          </div>
        </div>
        <div class="app-group-content">
          <slot>
            <div
              v-for="(item, index) in appGroup.children"
              :key="item.id"
              class="app-item"
              :title="item.name"
              :id="item.id"
              draggable
              @click="clickItem(item)"
              @dragstart="onDragStart(item, index)"
            >
            <app-icon :app="item"></app-icon>
              <div class="app-name">
                {{ item.name}}
              </div>
            </div>
          </slot>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import AppIcon from './AppIcon.vue'
export default {
  name: "GroupDialog",
  components: {AppIcon},
  props: ["appGroup", "show"],
  data() {
    return {
      canDrop: false, //拖动的app是否可以放置
      dragIndex: null,
      dragItem: null,
      showEdit: false,
      isFocus: false,
    };
  },
  methods: {
    cancel() {
      this.$emit("update:show", false);
    },
    clickItem(item){
      this.$emit('clickItem', item);
    },
    groupNameFocus() {
      this.showEdit = false;
      this.$refs["groupNameInput"].focus();
    },
    mouseEnter() {
      if (this.isFocus) {
        this.showEdit = false;
      } else {
        this.showEdit = true;
      }
    },
    mouseLeave() {
      this.showEdit = false;
    },
    onFocus() {
      this.showEdit = false;
      this.isFocus = true;
    },
    onBlur() {
      this.isFocus = false;
    },
    updateAppGroup(item, index, x, y) {
      this.$emit("updateAppGroup", item, index, x, y);
    },
    onDragStart(item, index){
      this.dragIndex = index
      this.dragItem = item
      const that = this
      const groupAreaElement = document.querySelector('.app-group-content').getBoundingClientRect()
      function getMousePosition(event) {
        const e = event || window.event;
        const scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
        const scrollY = document.documentElement.scrollTop || document.body.scrollTop;
        const x = e.pageX || e.clientX + scrollX;
        const y = e.pageY || e.clientY + scrollY;
        return { 'x': x, 'y': y };
      }
      //判断鼠标的位置是否在app组的区域中
      function mouseInArea(event){
        const {x:mouseX,y:mouseY} = getMousePosition(event)
        const {x,y,width,height} = groupAreaElement
        if(mouseX>x&&mouseX<(x+width)&&mouseY>y&&mouseY<(y+height)){
          return true
        }
        return false
      }
      document.ondragover = function(ev){
        const event = ev || window.event
        event.preventDefault()
        that.canDrop = !mouseInArea(event)
      }
      document.ondrop = (event)=>{
        const {x,y} = event
        console.log({x,y});
        if(that.canDrop){
          that.$emit('updateAppGroup', that.dragItem, that.dragIndex, x, y)
        }
        document.ondragover = null
        document.ondrop = null
      }
    },
    changeGroupName(group){
      this.$emit('changeGroupName', group)
    }
  },
};
</script>

<style lang='scss' scoped>
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  }
::-webkit-scrollbar-track {
  width: 6px;
  background-color: rgba(204,204,204, 0.1);
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
  }
::-webkit-scrollbar-thumb {
  background-color: rgba(204,204,204, 0.5);
  background-clip: padding-box;
  min-height: 28px;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
  }
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(204,204,204, 1);
  }
.el-dialog__wrapper {
  background: rgba($color: #000, $alpha: 0.2);
  backdrop-filter: blur(8px);
}
.el-dialog__wrapper ::v-deep .el-dialog {
  background: transparent;
  box-shadow: none;
  .el-dialog__header,
  .el-dialog__footer {
    display: none;
  }
  .el-dialog__body {
    padding: 0;
    .app-group {
      height: 100%;
      .app-group-name {
        .el-input {
          position: relative;
          .el-input__inner {
            background-color: transparent;
            border: none;
            font-size: 28px;
            line-height: 28px;
            color: #fff;
            text-align: center;
            &:focus {
              background-color: rgba($color: #000, $alpha: 0.3);
            }
          }
        }
        .app-group-name-edit{
          position: absolute;
          top: 10px;
          right: 30px;
          width: 18px;
          height: 18px;
          cursor: pointer;
        }
      }
      .app-group-content {
        height: 442px;
        margin-top: 30px;
        background: rgba($color: #fff, $alpha: 0.1);
        border-radius: 24px;
        box-shadow: 0px 2px 12px 4px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        padding: 15px;
        gap: 15px;
        overflow-y: auto;
        .app-item{
         color: #fff;
        }
      }
    }
  }
}
</style>