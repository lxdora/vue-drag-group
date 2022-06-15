<template>
  <div
    class="vue-drag-group"
    :style="{
      'flex-direction': direction === 'horizon' ? 'row' : 'column',
      gap: gap + 'px',
      width: w + 'px',
      height: h + 'px',
    }"
    :class="classArr"
  >
    <div
      v-for="(item, index) in groupList"
      :key="getKey(item)"
      class="app-item"
      :class="{ 'app-group': item.group }"
      :title="item.group ? item.group_name : item.app.name"
      :id="getKey(item)"
      @mousedown.stop="onMouseDown($event, item, index)"
      @mouseup="onMouseUp($event, item, index)"
      :style="{
        top: item.top + 'px',
        left: item.left + 'px',
      }"
    >
      <app-icon v-if="!item.group" :app="item.app"></app-icon>
      <div class="img-box-group" v-if="item.group">
        <div
          class="img-box-item"
          v-for="child in item.children"
          :key="child.id"
        >
          <app-icon
            :width="20"
            :height="20"
            :app="child"
            :borderRadius="4"
            :font="{ size: 12 }"
          ></app-icon>
        </div>
      </div>
      <div class="app-name">
        {{ item.group ? item.group_name : item.app.name }}
      </div>
    </div>
    <group-dialog
      :appGroup="appGroup"
      :show.sync="showAppGroupDialog"
      @clickItem="clickItem"
      @updateAppGroup="updateAppGroup"
    ></group-dialog>
  </div>
</template>

<script>
import AppIcon from "./AppIcon.vue";
import GroupDialog from "./GroupDialog.vue";
export default {
  name: "vue-drag-group",
  components: { AppIcon, GroupDialog },
  props: {
    list: {
      type: Array,
      default: () => {},
    },
    direction: {
      type: String,
      default: "vertical",
      validator: function (t) {
        return t === "horizon" || t === "vertical";
      },
    },
    gap: {
      type: Number,
      default: 10,
    },
    w: {
      type: Number,
      default: () => {
        return (
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth
        );
      },
    },
    h: {
      type: Number,
      default: () => {
        return (
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight
        );
      },
    },
    menuList: {
      type: Array,
      default: () => [],
    },
    classArr: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      appGroup: {},
      showAppGroupDialog: false,
      perNum: 6,
      vueDragGroup: null,
      groupList: this.list,
      dragItem: null,
    };
  },
  computed: {
    desktopAppIds() {
      const ids = [];
      if (this.groupList.length) {
        this.groupList.map((item) => {
          if (item.group) {
            item.children.map((child) => {
              ids.push(child.id);
            });
          } else {
            ids.push(item.app.id);
          }
        });
      }
      return ids;
    },
    mockList() {
      const data = [];
      const length = this.groupList.length + 1;
      for (let i = 0; i < length; i++) {
        data.push({ id: i, top: null, left: null });
      }
      const app = document.querySelector(".app-item");
      const { width, height } = app.getBoundingClientRect();
      let row = 0;
      let column = 0;
      for (let i = 0; i < data.length; i++) {
        if (this.direction === "vertical") {
          //竖向排列
          column = Math.floor(i / this.perNum); //表示第几列，一列显示6行
          row = i % this.perNum; //表示位于第几行
        } else {
          row = Math.floor(i / this.perNum); //表示第几行
          column = i % this.perNum; //表示位于第几列
        }
        const top = (height + this.gap) * row; //不带单位px的
        const left = (this.gap + width) * column;
        data[i].top = top;
        data[i].left = left;
      }
      return data;
    },
  },
  mounted() {
    //计算一列能放多少个元素
    this.vueDragGroup = document.querySelector(".vue-drag-group");
    const { height } = this.vueDragGroup.getBoundingClientRect();
    const app = document.querySelector(".app-item");
    const { height: appHeight } = app.getBoundingClientRect();
    this.perNum = Math.floor(height / (appHeight + this.gap));
    this.initAppItemPosition();
  },
  methods: {
    async initAppItemPosition() {
      const appList = this.groupList;
      for (let i = 0; i < appList.length; i++) {
        const top = this.mockList[i].top;
        const left = this.mockList[i].left;
        appList[i].top = top;
        appList[i].left = left;
        const element = document.getElementById(this.getKey(appList[i]));
        element.style.top = `${top}px`;
        element.style.left = `${left}px`;
      }
      this.$emit("updateList", appList);
    },
    getKey(group) {
      if (group.group) {
        return group.group_id;
      }
      return group.app.id;
    },
    clickItem(item) {
      this.$emit("clickItem", item);
    },
    onMouseDown(downEvent, item, index) {
      //鼠标按下时鼠标的位置
      const { x: mouseDownX, y: mouseDownY } = downEvent;
      this.dragItem = item;
      this.dragIndex = index;
      this.dragId = this.getKey(item);
      const dragElement = document.getElementById(this.dragId);
      //鼠标按下时元素的位置
      const dragElementX = dragElement.offsetLeft;
      const dragElementY = dragElement.offsetTop;
      this.vueDragGroup.onmousemove = (event) => {
        let { x, y } = event;
        if (mouseDownX === x && mouseDownY === y) {
          return;
        }
        this.isMove = true;
        this.isMoved = true;
        dragElement.style.opacity = "0.5";
        dragElement.style.zIndex = "-1";
        let moveTop = y - (mouseDownY - dragElementY);
        let moveLeft = x - (mouseDownX - dragElementX);
        if (moveTop > this.h - dragElement.clientHeight) {
          moveTop = this.h - dragElement.clientHeight;
        }
        if (moveTop < 0) {
          moveTop = 0;
        }
        if (moveLeft > this.w - dragElement.clientWidth) {
          moveLeft = this.w - dragElement.clientWidth;
        }
        if (moveLeft < 0) {
          moveLeft = 0;
        }
        dragElement.style.top = `${moveTop}px`;
        dragElement.style.left = `${moveLeft}px`;
        item.top = moveTop;
        item.left = moveLeft;
      };
      this.vueDragGroup.onmouseup = () => {
        dragElement.style.opacity = "1";
        dragElement.style.zIndex = "unset";
        this.vueDragGroup.onmousemove = null;
        this.dragItem = null;
        this.dragIndex = null;
        this.dragElement = null;
        this.isMove = false;
      };
      this.vueDragGroup.onmouseleave = () => {
        if (this.isMove) {
          this.updateDesktopApps(this.groupList);
        }
        dragElement.style.opacity = "1";
        dragElement.style.zIndex = "unset";
        this.vueDragGroup.onmousemove = null;
        this.dragItem = null;
        this.dragIndex = null;
        this.dragElement = null;
        this.isMove = false;
      };
    },
    onMouseUp(event, item, index) {
      if (event.button === 0) {
        if (this.isMove) {
          const id = this.getKey(item);
          if (this.dragId === id) {
            return;
          }
          if (item.group && !this.dragItem.group) {
            //拖动的元素不是组，目标是组
            const childrenIds = item.children.map((item) => item.id);
            if (!childrenIds.includes(this.dragItem.id)) {
              this.groupList.splice(this.dragIndex, 1);
              item.children.push(this.dragItem.app);
            }
          } else if (!item.group && !this.dragItem.group) {
            //拖动的元素和目标都不是组
            this.groupList.splice(this.dragIndex, 1);
            const finalIndex = index < this.dragIndex ? index : index - 1;
            this.$set(this.groupList, finalIndex, {
              group: true,
              group_id: Math.floor(Math.random() * 100000000),
              children: [item.app, this.dragItem.app],
              group_name: "文件夹",
            });
            this.$set(this.groupList[finalIndex], "top", item.top);
            this.$set(this.groupList[finalIndex], "left", item.left);
            this.updateDesktopApps(this.groupList);
          }
        } else {
          if (item.group) {
            this.showAppGroupDialog = true;
            this.appGroup = item;
            this.activeGroupIndex = index;
          } else {
            this.clickItem(item);
          }
        }
      }
      this.isMove = false;
    },
    async updateDesktopApps(appList) {
      const groupList = [];
      for (let i = 0; i < appList.length; i++) {
        if (appList[i].group) {
          groupList[i] = {
            group_name: appList[i].group_name,
            group: appList[i].group,
            children_app_id: appList[i].children.map((item) => item.id),
            coordinate_top: appList[i].top,
            coordinate_left: appList[i].left,
          };
        } else {
          groupList[i] = {
            group_name: appList[i].app.name,
            group: appList[i].group,
            application_id: appList[i].app.id,
            coordinate_top: appList[i].top,
            coordinate_left: appList[i].left,
          };
        }
      }
      this.$emit("updateList", groupList);
    },
    changeGroupName(group) {
      this.$emit("changeGroupName", group);
    },
    async updateAppGroup(item, index, x, y) {
      const appItem = document.querySelector(".app-item");
      let left = x;
      let top = y;
      //grpup的边界
      const {
        x: groupX,
        y: groupY,
        width,
        height,
      } = this.vueDragGroup.getBoundingClientRect();
      if (left < groupX) {
        left = groupX;
      }
      if (left > groupX + width - appItem.clientWidth) {
        left = groupX + width - appItem.clientWidth;
      }
      if (top < groupY) {
        top = groupY;
      }
      if (top > groupY + height - appItem.clientHeight) {
        top = groupY + height - appItem.clientHeight;
      }
      const app = {
        app: item,
        children: null,
        group: false,
        group_name: null,
        left: left,
        top: top,
      };
      const appIds = this.groupList.map((item) => !item.group && item.app.id);
      if (!appIds.includes(item.id)) {
        this.appGroup.children.splice(index, 1);
        this.groupList.push(app);
        this.showAppGroupDialog = false;
        if (!this.appGroup.children.length) {
          this.groupList.splice(this.activeGroupIndex, 1);
        }
      }
      this.$emit("updateList", this.groupList);
    },
    onContextmenu(event) {
      this.$contextmenu({
        items: this.menuList,
        event,
        minWidth: 230,
      });
      return false;
    },
  },
};
</script>

<style lang="scss">
:where(.vue-drag-group) {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  .app-item {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 96px;
    height: 116px;
    border-radius: 8px;
    text-align: center;
    &:hover {
      background: hsla(0, 0%, 100%, 0.1);
    }
    cursor: pointer;
    .img-box-group {
      width: 46px;
      height: 46px;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
      background-color: rgba(255, 255, 255, 0.1) !important;
      border-radius: 16px;
      overflow: hidden;
      padding: 9px;
      gap: 6px;
      .img-box-item {
        width: 20px;
        height: 20px;
        border-radius: 4px;
        overflow: hidden;
        &:nth-child(n + 5) {
          display: none;
        }
      }
    }
    .app-name {
      max-width: 96px;
      margin: 0 auto;
      font-weight: 500;
      margin-top: 12px;
      white-space: nowrap;
      overflow: hidden;
      user-select: none;
      text-overflow: ellipsis;
    }
  }
  .app-group {
    .app-item {
      position: unset;
    }
  }
}
</style>