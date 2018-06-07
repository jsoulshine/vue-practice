<template>
    <div>
        <Button type='success'>111</Button>
        <button class="btn btn-success">SKILLS</button>
    <router-link to="/cropper">Croppers</router-link>    
    <router-view></router-view>    
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "skills",
  data() {
    return {};
  },
  methods: {
  
  },
  computed: {
    ...mapGetters(["doubleCounter"])
  },
  created() {

  },
  watch: {
    $route(to, from) {

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
