<template>
  <section class="pdf-content">
      asdf
  </section>
</template>

<script>
export default {
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
};
</script>

<style lang="scss" scoped>
.pdf-content {
  width: 100%;
  background: #fff;

}
</style>