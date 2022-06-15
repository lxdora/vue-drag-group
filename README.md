<center>vue-drag-group</center>
> 基于Vue2的拖拽分组插件，适合用于在pc端实现类似手机桌面app管理的效果
## 效果

![2022-06-14_2281841392291411365.44.22](https://gitlab.com/lixiangteam/blogImg/uploads/4d323bfb19691039097cd5641e4f528e/2022-06-14_2281841392291411365.44.22.gif)

## 安装

```bash
npm i vue-drag-group --save
```

## 使用

```Vue
<vue-drag-group ref="dragGroup" :list="list" direction="vertical" :gap="10" :w="1000" :h="1000"
    :classArr="['drag-group']"
    @updateList="updateList"
   >
   </vue-drag-group>
```

## 参数

| 参数(param)      | 类型(type) | 实例(example)             |
| ---------------- | ---------- | ------------------------- |
| list             | Array      |                           |
| direction        | String     | 'horizon' \|\| 'vertical' |
| gap              | Number     | 10                        |
| w (means width)  | Number     | 1000                      |
| h (means height) | Number     | 1000                      |

list格式如下

```json
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
        }
  ]
```

## 事件

- `@updateList`:内部元素调整时list会更新，通过此方法更新父组件中的list
- `@clickItem`：点击内部元素触发事件

