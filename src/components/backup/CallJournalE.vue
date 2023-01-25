<template>
  <div class="journal-container" v-for="call in $store.state.calls" :key="call.phone">
    {{ call }}
  </div>
</template>

<script>
import EventBus from '../../service/eventBus';

export default {
  name: 'CallsBook',
  data() {
    return { callRecords: [] };
  },
  props: {},
  mounted() {
    const thisInstance = this;
    EventBus.$on('caller', () => {
      thisInstance.addCall();
    });
  },
  components: {},
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.journal-container {
  margin: auto;
  width: 50%;
  border: 3px solid rgb(230, 126, 29);
  padding: 10px;
}</style>
