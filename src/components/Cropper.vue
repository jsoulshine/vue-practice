<template>
  <div>
    <div class="cropper" style="width: 200px;height: 200px; border: 1px solid blue; float: right">
        <img id="cropimg1" alt="">
    </div>

    <div id="preview1" style="width: 200px;height: 200px; border: 1px solid red"></div>
    <input type="file" accept="image/png, image/jpeg, image/gif, image/jpg" @change="handleChange1" id="fileinput1" class="fileinput" />
    <label class="filelabel" for="fileinput1">选择图片</label>      

    <button class="btn btn-warning" @click="toHome">SKILLS</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Cropper from 'cropperjs';

export default {
  name: "skills",
  data() {
    return {
        cropper1: {},
    };
  },
  methods: {
      handleChange1 (e) {
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.onload = () => {
                this.cropper1.replace(reader.result);
                reader.onload = null;
            };
            reader.readAsDataURL(file);
      },
      toHome(){
        this.$router.push('/')
      }
  },
  computed: {
    ...mapGetters([
      'doubleCounter'
    ])
  },
  mounted () {
    let img1 = document.getElementById('cropimg1');
    this.cropper1 = new Cropper(img1, {
        // dragMode: 'move',
        preview: '#preview1',
        restore: false,
        center: false,
        highlight: false,
        cropBoxMovable: false,
        toggleDragModeOnDblclick: false
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
