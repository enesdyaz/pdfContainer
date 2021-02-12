<template>
  <section class="pdf-content">
        <invoice />
  </section>
</template>

<script>
import invoice from '../components/invoice'
export default {
  components:{
    invoice
  },
  data() {
    return {
    }
  },

  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.$emit("domRendered");
      }, 1000);
    });
  },
}
</script>

<style lang="scss" scoped>
.pdf-content {
  width: 100%;
  background: #fff;
  padding: 35px 5px 5px 10px;
}
</style>