<template>
  <div>
    <transition name="slide-fade" appear>
      <div id="box1" v-if="show"></div>
    </transition>
    <Button type="primary" @click="handleShow">Show</Button>
  </div>
</template>

<script>
export default {
  name: "echarts",
  data() {
    return {
      show: true
    };
  },
  methods: {
    handleShow() {
      this.show = !this.show;
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang="" scoped>
#box1 {
  width: 400px;
  height: 300px;
  border: 1px solid cyan;
}
#box2 {
  width: 400px;
  height: 300px;
  background: cadetblue;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>