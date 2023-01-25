<template>
  <div id="main" role="main">

<div class="element custom">
  <div class="element-header">
    <h2>Calls</h2>
  </div>
  <div class="element-content">
    <ul class="list">
      <li id='index-${user}' data-group="work"
      v-for="call in $store.state.calls" :key="call.phone">
      {{ call }}
    </li>
    </ul>
  </div>
</div>
</div>
</template>

<script>
import EventBus from '../service/eventBus';

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

#main {
display: flex;
}

.element.custom {
  width: 35vw;
  margin: 0 auto;
}

.element {
  background-color: #f3f3f3;
  position: relative;
  overflow: hidden;
  -webkit-box-shadow: 0px 1px 5px 0px #000;
  -moz-box-shadow: 0px 1px 5px 0px #000;
  box-shadow: 0px 1px 5px 0px #000;

  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

/* === Header ==================== */
.element .element-header {
  background: #d0f3f0 ;
  border: 1px solid #37598a;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.3) inset;
  height: 5vh;
  position: relative;
  z-index: 2;

  -webkit-border-top-left-radius: 5px;
  -webkit-border-top-right-radius: 5px;
  -moz-border-radius-topleft: 5px;
  -moz-border-radius-topright: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.element .element-header h2 {
  color: #4503F8;
  font-weight: bold;
  font-size: 18px;
  text-shadow: 0 1px 0 #37598a;
  position: absolute;
  margin: 0;
}

/* === Content ==================== */
.element .element-content {
  position: relative;
  height: 45vh;
}
li{
  border: 1px solid #f08437;
  list-style: none;
}
.element .element-content:before {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  content: '';
  height: 5px;
  position: absolute;
  right: -1px;
  top: -5px;
  left: -1px;
  z-index: 1;
}

#new-user{
  display: flex;
  justify-content: end;
  color: green;
}
.flex-container {
    display: flex;
}

.flex-child {
  flex: 0 0 65%;
  color: #f08437 !important;
  font-weight: bolder;
}

.flex-child:first-child {
  flex: 1;
}
</style>
