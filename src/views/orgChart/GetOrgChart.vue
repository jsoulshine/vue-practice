<template>
    <div id="people"></div>
</template>

<script>
import { getOrgChart } from "jollychic-getorgchart";
import "jollychic-getorgchart/dist/getorgchart.css";
export default {
  name: "GetOrgChart",
  data() {
    return {
        dataSource: [
            {
            id: 1,    //必须放在第一位
            parentId: null, //必须放在第二位
            name: "Amber McKenzie Amber McKenzie",
            title: "CEO",
            phone: "678-772-470",
            mail: "lemmons@jourrapide.com",
            adress: "Atlanta, GA 30303",
            // image: "static/js-plugins/GetOrgChart/images/f-11.jpg"
            },
            {
            id: 2,
            parentId: 1,
            name: "Ava Field",
            title: "Paper goods machine setter",
            phone: "937-912-4971",
            mail: "anderson@jourrapide.com",
            image: "static/js-plugins/GetOrgChart/images/f-10.jpg"
            },
            {
            id: 3,
            parentId: 1,
            name: "Evie Johnson",
            title: "Employer relations representative",
            phone: "314-722-6164",
            mail: "thornton@armyspy.com",
            image: "static/js-plugins/GetOrgChart/images/f-9.jpg"
            },
            {
            id: 4,
            parentId: 1,
            name: "Paul Shetler",
            title: "Teaching assistant",
            phone: "330-263-6439",
            mail: "shetler@rhyta.com",
            // image: "static/js-plugins/GetOrgChart/images/f-5.jpg"
            },
            {
            id: 5,
            parentId: 2,
            // secondManager: 1,
            name: "Rebecca Francis",
            title: "Welding machine setter",
            phone: "408-460-0589",
            image: "static/js-plugins/GetOrgChart/images/f-4.jpg"
            },
            {
            id: 6,
            parentId: 2,
            name: "Rebecca Randall",
            title: "Optometrist",
            phone: "801-920-9842",
            mail: "JasonWGoodman@armyspy.com",
            image: "static/js-plugins/GetOrgChart/images/f-8.jpg"
            },
            {
            id: 7,
            parentId: 2,
            name: "Spencer May",
            title: "System operator",
            phone: "Conservation scientist",
            mail: "hodges@teleworm.us",
            image: "static/js-plugins/GetOrgChart/images/f-7.jpg"
            },
            {
            id: 8,
            parentId: 6,
            name: "Max Ford",
            title: "Budget manager",
            phone: "989-474-8325",
            mail: "hunter@teleworm.us",
            image: "static/js-plugins/GetOrgChart/images/f-6.jpg"
            },
            {
            id: 9,
            parentId: 7,
            name: "Riley Bray",
            title: "Structural metal fabricator",
            phone: "479-359-2159",
            image: "static/js-plugins/GetOrgChart/images/f-3.jpg"
            },
            {
            id: 10,
            parentId: 7,
            name: "Callum Whitehouse",
            title: "Radar controller",
            phone: "847-474-8775",
            image: "static/js-plugins/GetOrgChart/images/f-2.jpg"
            }
        ],
        options: {
            primaryFields: ["name", "title", "phone", "mail"],
            // photoFields: ["image"],
            theme: 'myTheme',
            // theme: 'deborah',
            color: "blue",
            enableEdit: false,
            enableZoom: false,
            enableSearch: false,
            enableMove: false,
            enableGridView: true,
            enableDetailsView: false,
            enablePrint: true,
            enableZoomOnNodeDoubleClick: false,
            enableExportToImage: true,
            scale: 0.4,
            linkType: "M",
            orientation: getOrgChart.RO_TOP,
            primaryFields: ["name", "title"],
            // photoFields: ['image'],
            idField: "id",
            secondParentIdField: 'secondManager',
            levelSeparation: 200,
            siblingSeparation: 100,
            subtreeSeparation: 100,
            separationMixedHierarchyNodes: 200,
            embededDefinitions: '',
            customize: {
                "1": { color: "black" },
            },
            expandToLevel: 2,//默认展开几层
            boxSizeInPercentage: {
                minBoxSize: {
                    width: 5,
                    height: 5
                },
                boxSize: {
                    width: 30,
                    height: 30
                },
                maxBoxSize: {
                    width: 100,
                    height: 100
                }
            },
            
        },
        orgChart: '',
    };
  },
  computed: {},
  methods: {
        initChart(){
            let peopleElement = document.getElementById("people");
            this.orgChart = new getOrgChart(peopleElement, {
                //options
                ...this.options,
                //data
                dataSource: this.dataSource,
                //methods:
                clickNodeEvent: this.handleClick,
                renderNodeEvent: this.onInitRender,
                removeNodeEvent: this.handleRemove,
                //updateNodeEvent
                //insertNodeEvent
                //createNodeEvent
                //updatedEvent
            });
        },
        handleClick(sender, args){
            console.log(args.node.id)
        },
        onInitRender(sender, args){
            // console.log(sender);
        },
        handleRemove(sender, args){
            if (args.id == 1){
                  return false;
            }
        },
  },
  created() {},
  mounted() {
      getOrgChart.themes.myTheme =
            {
            size: [400, 200],  //整体宽高，可以通过此来改变各个节点的上下左右距离
            toolbarHeight: 46, //整体距离顶部的nav的距离
            textPoints: [
                { x: 150, y: 50, width: 250 },
                { x: 150, y: 90, width: 250 }
            ],
            textPointsNoImage: [
                { x: 130, y: 150, width: 250 },
                { x: 130, y: 190, width: 250 }
            ],
            expandCollapseBtnRadius: 20,
            defs: '<filter id="f1" x="0" y="0" width="200%" height="200%"><feOffset result="offOut" in="SourceAlpha" dx="5" dy="5" /><feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" /><feBlend in="SourceGraphic" in2="blurOut" mode="normal" /></filter>',
            box: '<rect x="0" y="0" height="200" width="400" rx="10" ry="10" class="myCustomTheme-box" filter="url(#f1)"  />',
            text: '<text text-anchor="middle" width="[width]" class="get-text get-text-[index]" x="[x]" y="[y]">[text]</text>',
            image: '<clipPath id="getMonicaClip"><circle cx="135" cy="255" r="85" /></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#getMonicaClip)" xlink:href="[href]" x="50" y="150" height="190" width="170"/>',
        };

      this.initChart();
    //   document.body.onclick = () => {
    //       this.dataSource.find(item => item.id === 5).secondManager = 1;
    //       this.initChart();
    //   }
        setTimeout(() => {
            // this.orgChart.insertNode(3, {name: "New Node" })
        }, 2000);
        setTimeout(() => {
            // this.orgChart.expandOrCollapse(2);
            // this.orgChart.expand(this.orgChart.nodes["10"], () => {console.log('展开到10')})
            // this.orgChart.highlightNode(10);
            // this.orgChart.exportToImage()
        }, 3000);
  }
};
</script>

<style>
    .myCustomTheme-box{
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap
    }
    .get-text{
        
    }
</style>

