<template>
  <div class="wrapper-page">
    <div class="left-container" style="background-image:none"></div>
    <div class="center-container">
      <Menu :menuTab="8"></Menu>
      <div id="container-s" class="container-box"></div>
    </div>
    <div class="right-container" style="background-image:none"></div>
  </div>
</template>
<script>
//参考https://antv-g6.gitee.io/zh  一般图>力导向图布局 组件
import G6 from "@antv/g6";
import Menu from "@/components/bi/menu/menu";
const width = 500;
const height = 500;
export default {
  props: ["innerWidth", "innerHeight"],
  components: {
    Menu,
  },
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      //动画
      G6.registerNode(
        "background-animate",
        {
          afterDraw(cfg, group) {
            let r = cfg.size / 2;
            if (isNaN(r)) {
              r = cfg.size[0] / 2;
            }
            // 第一个背景圆
            const back1 = group.addShape("circle", {
              zIndex: -3,
              attrs: {
                x: 0,
                y: 0,
                r,
                fill: "rgba(186,231,255,0.3)",
                opacity: 0.4,
              },
              // must be assigned in G6 3.3 and later versions. it can be any value you want
              name: "circle-shape1",
            });
            // 第二个背景圆
            const back2 = group.addShape("circle", {
              zIndex: -2,
              attrs: {
                x: 0,
                y: 0,
                r,
                fill: "rgba(186,231,255,0.3)", // 为了显示清晰，随意设置了颜色
                opacity: 0.4,
              },
              // must be assigned in G6 3.3 and later versions. it can be any value you want
              name: "circle-shape2",
            });
            // 第三个背景圆
            const back3 = group.addShape("circle", {
              zIndex: -1,
              attrs: {
                x: 0,
                y: 0,
                r,
                fill: "rgba(186,231,255,0.3)",
                opacity: 0.4,
              },
              // must be assigned in G6 3.3 and later versions. it can be any value you want
              name: "circle-shape3",
            });
            group.sort(); // 排序，根据 zIndex 排序

            // 第一个背景圆逐渐放大，并消失
            //动画方法
            back1.animate(
              {
                r: r + 30, //圆半径
                opacity: 0.7,
              },
              {
                repeat: true, // 循环，是否重复执行动画
                duration: 3000, //动画执行时间
                easing: "easeSinOut", //d3.js 反向正弦缓动
                delay: 0, // 无延迟，动画执行的延迟时间
              }
            );

            // 第二个背景圆逐渐放大，并消失
            back2.animate(
              {
                r: r + 30,
                opacity: 0.7,
              },
              {
                repeat: true, // 循环
                duration: 3000,
                easing: "easeSinOut",
                delay: 1000, // 1 秒延迟
              }
            ); // 1 秒延迟

            // 第三个背景圆逐渐放大，并消失
            back3.animate(
              {
                r: r + 30,
                opacity: 0.7,
              },
              {
                repeat: true, // 循环
                duration: 3000,
                easing: "easeSinOut",
                delay: 2000, // 2 秒延迟
              }
            );
          },
        },
        "circle"
      );
      G6.registerNode(
        "background-citymanagement",
        {
          afterDraw(cfg, group) {
            let r = cfg.size / 2;
            if (isNaN(r)) {
              r = cfg.size[0] / 2;
            }
            // 第一个背景圆
            const back1 = group.addShape("circle", {
              zIndex: -3,
              attrs: {
                x: 0,
                y: 0,
                r,
                fill: "rgba(145,213,255,0.3)",
                opacity: 0.4,
              },
              // must be assigned in G6 3.3 and later versions. it can be any value you want
              name: "circle-shape1",
            });
            // 第二个背景圆
            const back2 = group.addShape("circle", {
              zIndex: -2,
              attrs: {
                x: 0,
                y: 0,
                r,
                fill: "rgba(145,213,255,0.3)", // 为了显示清晰，随意设置了颜色
                opacity: 0.4,
              },
              // must be assigned in G6 3.3 and later versions. it can be any value you want
              name: "circle-shape2",
            });
            // 第三个背景圆
            const back3 = group.addShape("circle", {
              zIndex: -1,
              attrs: {
                x: 0,
                y: 0,
                r,
                fill: "rgba(145,213,255,0.3)",
                opacity: 0.4,
              },
              // must be assigned in G6 3.3 and later versions. it can be any value you want
              name: "circle-shape3",
            });
            group.sort(); // 排序，根据 zIndex 排序

            // 第一个背景圆逐渐放大，并消失
            //动画方法
            back1.animate(
              {
                r: r + 30, //圆半径
                opacity: 0.7,
              },
              {
                repeat: true, // 循环，是否重复执行动画
                duration: 3000, //动画执行时间
                easing: "easeSinOut", //d3.js 反向正弦缓动
                delay: 0, // 无延迟，动画执行的延迟时间
              }
            );

            // 第二个背景圆逐渐放大，并消失
            back2.animate(
              {
                r: r + 30,
                opacity: 0.7,
              },
              {
                repeat: true, // 循环
                duration: 3000,
                easing: "easeSinOut",
                delay: 1000, // 1 秒延迟
              }
            ); // 1 秒延迟

            // 第三个背景圆逐渐放大，并消失
            back3.animate(
              {
                r: r + 30,
                opacity: 0.7,
              },
              {
                repeat: true, // 循环
                duration: 3000,
                easing: "easeSinOut",
                delay: 2000, // 2 秒延迟
              }
            );
          },
        },
        "circle"
      );
      G6.registerNode(
        "contingency-management",
        {
          afterDraw(cfg, group) {
            let r = cfg.size / 2;
            if (isNaN(r)) {
              r = cfg.size[0] / 2;
            }
            // 第一个背景圆
            const back1 = group.addShape("circle", {
              zIndex: -3,
              attrs: {
                x: 0,
                y: 0,
                r,
                fill: "rgba(105,192,255, 0.3)",
                opacity: 0.4,
              },
              // must be assigned in G6 3.3 and later versions. it can be any value you want
              name: "circle-shape1",
            });
            // 第二个背景圆
            const back2 = group.addShape("circle", {
              zIndex: -2,
              attrs: {
                x: 0,
                y: 0,
                r,
                fill: "rgba(105,192,255, 0.3)", // 为了显示清晰，随意设置了颜色
                opacity: 0.4,
              },
              // must be assigned in G6 3.3 and later versions. it can be any value you want
              name: "circle-shape2",
            });
            // 第三个背景圆
            const back3 = group.addShape("circle", {
              zIndex: -1,
              attrs: {
                x: 0,
                y: 0,
                r,
                fill: "rgba(105,192,255, 0.3)",
                opacity: 0.4,
              },
              // must be assigned in G6 3.3 and later versions. it can be any value you want
              name: "circle-shape3",
            });
            group.sort(); // 排序，根据 zIndex 排序

            // 第一个背景圆逐渐放大，并消失
            //动画方法
            back1.animate(
              {
                r: r + 30, //圆半径
                opacity: 0.7,
              },
              {
                repeat: true, // 循环，是否重复执行动画
                duration: 3000, //动画执行时间
                easing: "easeSinOut", //d3.js 反向正弦缓动
                delay: 0, // 无延迟，动画执行的延迟时间
              }
            );

            // 第二个背景圆逐渐放大，并消失
            back2.animate(
              {
                r: r + 30,
                opacity: 0.7,
              },
              {
                repeat: true, // 循环
                duration: 3000,
                easing: "easeSinOut",
                delay: 1000, // 1 秒延迟
              }
            ); // 1 秒延迟

            // 第三个背景圆逐渐放大，并消失
            back3.animate(
              {
                r: r + 30,
                opacity: 0.7,
              },
              {
                repeat: true, // 循环
                duration: 3000,
                easing: "easeSinOut",
                delay: 2000, // 2 秒延迟
              }
            );
          },
        },
        "circle"
      );
      G6.registerNode(
        "economical-operation",
        {
          afterDraw(cfg, group) {
            let r = cfg.size / 2;
            if (isNaN(r)) {
              r = cfg.size[0] / 2;
            }
            // 第一个背景圆
            const back1 = group.addShape("circle", {
              zIndex: -3,
              attrs: {
                x: 0,
                y: 0,
                r,
                fill: "rgba(0,58,140, 0.3)",
                opacity: 0.4,
              },
              // must be assigned in G6 3.3 and later versions. it can be any value you want
              name: "circle-shape1",
            });
            // 第二个背景圆
            const back2 = group.addShape("circle", {
              zIndex: -2,
              attrs: {
                x: 0,
                y: 0,
                r,
                fill: "rgba(0,58,140, 0.3)", // 为了显示清晰，随意设置了颜色
                opacity: 0.4,
              },
              // must be assigned in G6 3.3 and later versions. it can be any value you want
              name: "circle-shape2",
            });
            // 第三个背景圆
            const back3 = group.addShape("circle", {
              zIndex: -1,
              attrs: {
                x: 0,
                y: 0,
                r,
                fill: "rgba(0,58,140, 0.3)",
                opacity: 0.4,
              },
              // must be assigned in G6 3.3 and later versions. it can be any value you want
              name: "circle-shape3",
            });
            group.sort(); // 排序，根据 zIndex 排序

            // 第一个背景圆逐渐放大，并消失
            //动画方法
            back1.animate(
              {
                r: r + 30, //圆半径
                opacity: 0.7,
              },
              {
                repeat: true, // 循环，是否重复执行动画
                duration: 3000, //动画执行时间
                easing: "easeSinOut", //d3.js 反向正弦缓动
                delay: 0, // 无延迟，动画执行的延迟时间
              }
            );

            // 第二个背景圆逐渐放大，并消失
            back2.animate(
              {
                r: r + 30,
                opacity: 0.7,
              },
              {
                repeat: true, // 循环
                duration: 3000,
                easing: "easeSinOut",
                delay: 1000, // 1 秒延迟
              }
            ); // 1 秒延迟

            // 第三个背景圆逐渐放大，并消失
            back3.animate(
              {
                r: r + 30,
                opacity: 0.7,
              },
              {
                repeat: true, // 循环
                duration: 3000,
                easing: "easeSinOut",
                delay: 2000, // 2 秒延迟
              }
            );
          },
        },
        "circle"
      );
      G6.registerNode(
        "huaiyin-overview",
        {
          afterDraw(cfg, group) {
            let r = cfg.size / 2;
            if (isNaN(r)) {
              r = cfg.size[0] / 2;
            }
            // 第一个背景圆
            const back1 = group.addShape("circle", {
              zIndex: -3,
              attrs: {
                x: 0,
                y: 0,
                r,
                fill: "rgba(64,169,255, 0.3)",
                opacity: 0.4,
              },
              // must be assigned in G6 3.3 and later versions. it can be any value you want
              name: "circle-shape1",
            });
            // 第二个背景圆
            const back2 = group.addShape("circle", {
              zIndex: -2,
              attrs: {
                x: 0,
                y: 0,
                r,
                fill: "rgba(64,169,255, 0.3)", // 为了显示清晰，随意设置了颜色
                opacity: 0.4,
              },
              // must be assigned in G6 3.3 and later versions. it can be any value you want
              name: "circle-shape2",
            });
            // 第三个背景圆
            const back3 = group.addShape("circle", {
              zIndex: -1,
              attrs: {
                x: 0,
                y: 0,
                r,
                fill: "rgba(64,169,255, 0.3)",
                opacity: 0.4,
              },
              // must be assigned in G6 3.3 and later versions. it can be any value you want
              name: "circle-shape3",
            });
            group.sort(); // 排序，根据 zIndex 排序

            // 第一个背景圆逐渐放大，并消失
            //动画方法
            back1.animate(
              {
                r: r + 30, //圆半径
                opacity: 0.7,
              },
              {
                repeat: true, // 循环，是否重复执行动画
                duration: 3000, //动画执行时间
                easing: "easeSinOut", //d3.js 反向正弦缓动
                delay: 0, // 无延迟，动画执行的延迟时间
              }
            );

            // 第二个背景圆逐渐放大，并消失
            back2.animate(
              {
                r: r + 30,
                opacity: 0.7,
              },
              {
                repeat: true, // 循环
                duration: 3000,
                easing: "easeSinOut",
                delay: 1000, // 1 秒延迟
              }
            ); // 1 秒延迟

            // 第三个背景圆逐渐放大，并消失
            back3.animate(
              {
                r: r + 30,
                opacity: 0.7,
              },
              {
                repeat: true, // 循环
                duration: 3000,
                easing: "easeSinOut",
                delay: 2000, // 2 秒延迟
              }
            );
          },
        },
        "circle"
      );
      G6.registerNode(
        "ecological-environment",
        {
          afterDraw(cfg, group) {
            let r = cfg.size / 2;
            if (isNaN(r)) {
              r = cfg.size[0] / 2;
            }
            // 第一个背景圆
            const back1 = group.addShape("circle", {
              zIndex: -3,
              attrs: {
                x: 0,
                y: 0,
                r,
                fill: "rgba(24,144,255, 0.3)",
                opacity: 0.4,
              },
              // must be assigned in G6 3.3 and later versions. it can be any value you want
              name: "circle-shape1",
            });
            // 第二个背景圆
            const back2 = group.addShape("circle", {
              zIndex: -2,
              attrs: {
                x: 0,
                y: 0,
                r,
                fill: "rgba(24,144,255, 0.3)", // 为了显示清晰，随意设置了颜色
                opacity: 0.4,
              },
              // must be assigned in G6 3.3 and later versions. it can be any value you want
              name: "circle-shape2",
            });
            // 第三个背景圆
            const back3 = group.addShape("circle", {
              zIndex: -1,
              attrs: {
                x: 0,
                y: 0,
                r,
                fill: "rgba(24,144,255, 0.3)",
                opacity: 0.4,
              },
              // must be assigned in G6 3.3 and later versions. it can be any value you want
              name: "circle-shape3",
            });
            group.sort(); // 排序，根据 zIndex 排序

            // 第一个背景圆逐渐放大，并消失
            //动画方法
            back1.animate(
              {
                r: r + 30, //圆半径
                opacity: 0.7,
              },
              {
                repeat: true, // 循环，是否重复执行动画
                duration: 3000, //动画执行时间
                easing: "easeSinOut", //d3.js 反向正弦缓动
                delay: 0, // 无延迟，动画执行的延迟时间
              }
            );

            // 第二个背景圆逐渐放大，并消失
            back2.animate(
              {
                r: r + 30,
                opacity: 0.7,
              },
              {
                repeat: true, // 循环
                duration: 3000,
                easing: "easeSinOut",
                delay: 1000, // 1 秒延迟
              }
            ); // 1 秒延迟

            // 第三个背景圆逐渐放大，并消失
            back3.animate(
              {
                r: r + 30,
                opacity: 0.7,
              },
              {
                repeat: true, // 循环
                duration: 3000,
                easing: "easeSinOut",
                delay: 2000, // 2 秒延迟
              }
            );
          },
        },
        "circle"
      );
      G6.registerNode(
        "health-care",
        {
          afterDraw(cfg, group) {
            let r = cfg.size / 2;
            if (isNaN(r)) {
              r = cfg.size[0] / 2;
            }
            // 第一个背景圆
            const back1 = group.addShape("circle", {
              zIndex: -3,
              attrs: {
                x: 0,
                y: 0,
                r,
                fill: "rgba(9,109,217, 0.3)",
                opacity: 0.4,
              },
              // must be assigned in G6 3.3 and later versions. it can be any value you want
              name: "circle-shape1",
            });
            // 第二个背景圆
            const back2 = group.addShape("circle", {
              zIndex: -2,
              attrs: {
                x: 0,
                y: 0,
                r,
                fill: "rgba(9,109,217, 0.3)", // 为了显示清晰，随意设置了颜色
                opacity: 0.4,
              },
              // must be assigned in G6 3.3 and later versions. it can be any value you want
              name: "circle-shape2",
            });
            // 第三个背景圆
            const back3 = group.addShape("circle", {
              zIndex: -1,
              attrs: {
                x: 0,
                y: 0,
                r,
                fill: "rgba(9,109,217, 0.3)",
                opacity: 0.4,
              },
              // must be assigned in G6 3.3 and later versions. it can be any value you want
              name: "circle-shape3",
            });
            group.sort(); // 排序，根据 zIndex 排序

            // 第一个背景圆逐渐放大，并消失
            //动画方法
            back1.animate(
              {
                r: r + 30, //圆半径
                opacity: 0.7,
              },
              {
                repeat: true, // 循环，是否重复执行动画
                duration: 3000, //动画执行时间
                easing: "easeSinOut", //d3.js 反向正弦缓动
                delay: 0, // 无延迟，动画执行的延迟时间
              }
            );

            // 第二个背景圆逐渐放大，并消失
            back2.animate(
              {
                r: r + 30,
                opacity: 0.7,
              },
              {
                repeat: true, // 循环
                duration: 3000,
                easing: "easeSinOut",
                delay: 1000, // 1 秒延迟
              }
            ); // 1 秒延迟

            // 第三个背景圆逐渐放大，并消失
            back3.animate(
              {
                r: r + 30,
                opacity: 0.7,
              },
              {
                repeat: true, // 循环
                duration: 3000,
                easing: "easeSinOut",
                delay: 2000, // 2 秒延迟
              }
            );
          },
        },
        "circle"
      );
      G6.registerNode(
        "good-governance",
        {
          afterDraw(cfg, group) {
            let r = cfg.size / 2;
            if (isNaN(r)) {
              r = cfg.size[0] / 2;
            }
            // 第一个背景圆
            const back1 = group.addShape("circle", {
              zIndex: -3,
              attrs: {
                x: 0,
                y: 0,
                r,
                fill: "rgba(0,80,179, 0.3)",
                opacity: 0.4,
              },
              // must be assigned in G6 3.3 and later versions. it can be any value you want
              name: "circle-shape1",
            });
            // 第二个背景圆
            const back2 = group.addShape("circle", {
              zIndex: -2,
              attrs: {
                x: 0,
                y: 0,
                r,
                fill: "rgba(0,80,179, 0.3)", // 为了显示清晰，随意设置了颜色
                opacity: 0.4,
              },
              // must be assigned in G6 3.3 and later versions. it can be any value you want
              name: "circle-shape2",
            });
            // 第三个背景圆
            const back3 = group.addShape("circle", {
              zIndex: -1,
              attrs: {
                x: 0,
                y: 0,
                r,
                fill: "rgba(0,80,179, 0.3)",
                opacity: 0.4,
              },
              // must be assigned in G6 3.3 and later versions. it can be any value you want
              name: "circle-shape3",
            });
            group.sort(); // 排序，根据 zIndex 排序

            // 第一个背景圆逐渐放大，并消失
            //动画方法
            back1.animate(
              {
                r: r + 30, //圆半径
                opacity: 0.7,
              },
              {
                repeat: true, // 循环，是否重复执行动画
                duration: 3000, //动画执行时间
                easing: "easeSinOut", //d3.js 反向正弦缓动
                delay: 0, // 无延迟，动画执行的延迟时间
              }
            );

            // 第二个背景圆逐渐放大，并消失
            back2.animate(
              {
                r: r + 20,
                opacity: 0.7,
              },
              {
                repeat: true, // 循环
                duration: 3000,
                easing: "easeSinOut",
                delay: 1000, // 1 秒延迟
              }
            ); // 1 秒延迟

            // 第三个背景圆逐渐放大，并消失
            back3.animate(
              {
                r: r + 10,
                opacity: 0.7,
              },
              {
                repeat: true, // 循环
                duration: 3000,
                easing: "easeSinOut",
                delay: 2000, // 2 秒延迟
              }
            );
          },
        },
        "circle"
      );
      const width = document.getElementById("container-s").scrollWidth;
      const height = document.getElementById("container-s").scrollHeight || 500;
      const graph = new G6.Graph({
        container: "container-s",
        width,
        height,
        // plugins: [menu],
        layout: {
          type: "force",
          preventOverlap: true,
          //节点作用力，正数代表节点之间的引力作用，负数代表节点之间的斥力作用。
          //可以使用回调函数的形式对不同对节点定义不同节点作用力（如示例 2）
          nodeStrength: (d) => {
            if (d.isLeaf) {
              return -50;
            }
            return -10;
          },
          //边的作用力，默认根据节点的出入度自适应
          edgeStrength: (d) => {
            if (
              d.source.id === "node0" ||
              d.source.id === "node1" ||
              d.source.id === "node2" ||
              d.source.id === "node3" ||
              d.source.id === "node4" ||
              d.source.id === "node5" ||
              d.source.id === "node6" ||
              d.source.id === "node7"
            ) {
              return 0.7;
            }
            return 0.1;
          },
          // 防止圆环超出cavans边界
          onTick: () => {
            const nodeItems = graph.getNodes();
            const height = graph.get("height");
            const width = graph.get("width");
            const padding = 100;
            nodeItems.forEach((item) => {
              const model = item.getModel();
              if (model.x > width - padding) model.x = width - padding;
              else if (model.x < padding) model.x = padding;

              if (model.y > height - padding) model.y = height - padding;
              else if (model.y < padding) model.y = padding;
            });
          },
        },
        defaultNode: {
          color: "rgba(255,255,255,0.5)",
          style: {
            fill: "rgba(255,255,255,0.5)",
          },
          labelCfg: {
            position: "center",
            offset: 10,
            style: {
              // ... 文本样式的配置
              fontSize: 20,
              fill: "#ffffff",
              fontStyle: "bold",
            },
          },
        },
        defaultEdge: {
          size: 1,
          color: "#e2e2e2",
        },
      });

      const data = {
        nodes: [
          {
            id: "node0",
            size: width / 20,
            label: "智能预警",
            type: "background-animate",
            x: 200,
            y: 350,
          },
          {
            id: "node1",
            size: width / 20,
            label: "城市管理",
            type: "background-citymanagement",
            x: 350,
            y: 50,
          },
          {
            id: "node2",
            size: width / 20,
            label: "应急管理",
            type: "contingency-management",
            x: 400,
            y: 600,
          },
          {
            id: "node3",
            size: width / 20,
            label: "经济运行",
            type: "economical-operation",
            x: 200,
            y: 550,
          },
          {
            id: "node4",
            size: width / 20,
            label: "槐荫总览",
            type: "huaiyin-overview",
            x: 60,
            y: 350,
          },
          {
            id: "node5",
            size: width / 20,
            label: "生态环境",
            type: "ecological-environment",
            x: 0,
            y: 100,
          },
          {
            id: "node6",
            size: width / 20,
            label: "康养医疗",
            type: "health-care",
            x: 500,
            y: 500,
          },
          {
            id: "node7",
            size: width / 20,
            label: "优政善政",
            type: "good-governance",
            x: 460,
            y: 300,
          },
        ],
        edges: [
          { source: "node0", target: "node0" },
          { source: "node1", target: "node1" },
          { source: "node2", target: "node2" },
          { source: "node3", target: "node3" },
          { source: "node4", target: "node4" },
          { source: "node5", target: "node5" },
          { source: "node6", target: "node6" },
          { source: "node7", target: "node7" },
        ],
      };
      const nodes = data.nodes;
      graph.data({
        nodes,
        edges: data.edges.map(function (edge, i) {
          edge.id = "edge" + i;
          return Object.assign({}, edge);
        }),
      });
      graph.render();
      //拖拽方法
      graph.on("node:dragstart", function (e) {
        graph.layout();
        refreshDragedNodePosition(e);
      });
      graph.on("node:drag", function (e) {
        refreshDragedNodePosition(e);
      });
      graph.on("node:dragend", function (e) {
        e.item.get("model").fx = null;
        e.item.get("model").fy = null;
      });
      function refreshDragedNodePosition(e) {
        const model = e.item.get("model");
        model.fx = e.x;
        model.fy = e.y;
      }

      // 点击节点
      graph.on("node:click", (e) => {
        // 先将所有当前是 click 状态的节点置为非 click 状态
        const clickNodes = graph.findAllByState("node", "click");
        clickNodes.forEach((cn) => {
          graph.setItemState(cn, "click", false);
        });
        const nodeItem = e.item; // 获取被点击的节点元素对象
        graph.setItemState(nodeItem, "click", true); // 设置当前节点的 click 状态为 true
        if (nodeItem._cfg.id === "node0") {
          window.open(
            "http://www.baidu.com",
            "newwindow",
            "height=" +
              window.screen.height +
              ",width=" +
              window.screen.width / 2 +
              ",top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no"
          );
        } else if (nodeItem._cfg.id === "node1") {
          window.open(
            "http://www.baidu.com/",
            "newwindow",
            "height=" +
              window.screen.height +
              ",width=" +
              window.screen.width / 2 +
              ",top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no"
          );
        } else if (nodeItem._cfg.id === "node2") {
        } else if (nodeItem._cfg.id === "node3") {
        } else if (nodeItem._cfg.id === "node4") {
        } else if (nodeItem._cfg.id === "node5") {
        } else if (nodeItem._cfg.id === "node6") {
        } else if (nodeItem._cfg.id === "node7") {
        }
      });
      // 监听鼠标点击节点
      graph.on("edge:click", (e) => {
        // 先将所有当前有 click 状态的边的 click 状态置为 false
        const clickEdges = graph.findAllByState("edge", "click");
        clickEdges.forEach((ce) => {
          graph.setItemState(ce, "click", false);
        });
        const edgeItem = e.item;
        // 设置目标边的 click 状态 为 true
        graph.setItemState(edgeItem, "click", true);
      });
    },
  },
};
</script>
<style scoped>
.container-box {
  width: 100%;
  height: 100%;
  pointer-events: auto;
}
</style>
