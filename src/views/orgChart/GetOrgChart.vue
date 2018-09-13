<template>
    <div id="people"></div>
</template>

<script>
import { getOrgChart } from "jollychic-getorgchart";
import "jollychic-getorgchart/dist/getorgchart.css";
export default {
  name: "GetOrgChart",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {
    var peopleElement = document.getElementById("people");
    var orgChart = new getOrgChart(peopleElement, {
      primaryFields: ["name", "title", "phone", "mail"],
      photoFields: ["image"],
      theme: 'belinda',
      dataSource: [
        {
          id: 1,
          parentId: null,
          name: "Amber McKenzie",
          title: "CEO",
          phone: "678-772-470",
          mail: "lemmons@jourrapide.com",
          adress: "Atlanta, GA 30303",
          image: "static/js-plugins/GetOrgChart/images/f-11.jpg"
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
          image: "static/js-plugins/GetOrgChart/images/f-5.jpg"
        },
        {
          id: 5,
          parentId: 2,
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
      ]
    });
  }
};
</script>

<style scoped>
</style>

