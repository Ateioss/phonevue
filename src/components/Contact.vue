<template>
  <div id="main" role="main">

    <div class="element custom">
      <div class="element-header">
        <h2>Contacts</h2>
      </div>
      <div class="element-content">
        <ul class="list">
          <li v-for="user in $store.state.contacts" :key="user.phone"
          id='index-${user}' data-group="work">
          <div style="flex-container">
            <a href="#">{{ user.name }} <span class="flex-child">{{ user.phone }}</span></a>
            <i @click="call(user.name)"
             @keypress="call(user.name)" class="flex-child">
          <font-awesome-icon icon="fa-solid fa-phone" /></i>
        </div>

          </li>
        </ul>

        <div class="element-sidebar">
          <a href="#">#</a>
          <a href="#">A</a>
          <a href="#">B</a>
          <a href="#">C</a>
          <a href="#">D</a>
          <a href="#">E</a>
          <a href="#">F</a>
          <a href="#">G</a>
          <a href="#">H</a>
          <a href="#">I</a>
          <a href="#">J</a>
          <a href="#">K</a>
          <a href="#">L</a>
          <a href="#">M</a>
          <a href="#">N</a>
          <a href="#">O</a>
          <a href="#">P</a>
          <a href="#">Q</a>
          <a href="#">R</a>
          <a href="#">S</a>
          <a href="#">T</a>
          <a href="#">U</a>
          <a href="#">V</a>
          <a href="#">W</a>
          <a href="#">X</a>
          <a href="#">Y</a>
          <a href="#">Z</a>
        </div>
      </div>
      <button  @click="addNewUser()" class="buttoncontact">add User</button>
    </div>

  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Users } from '../models/users';

export default {
  name: 'ContactComp',
  data() {
    return {
      users: Users,
    };
  },
  methods: {
    call(caller) {
      this.$store.commit('addCall', caller);
      this.$notify({ type: 'success', text: `Calling: ${caller}` });
    },
    addNewUser() {
      this.$router.push('/addUser');
    },
  },
  props: {
    msg: String,
  },
  components: { FontAwesomeIcon },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 12px;
}

:focus {
  outline: none;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  -ms-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  -webkit-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

#main {
display: flex;
}

.element.custom {
  width: 300px;
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
  height: 387px;
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
.buttoncontact{
  margin-bottom: 40px;
  padding: 10px;
  background-color:#9cc9cb;
  border: none;
}
.buttoncontact:hover{
  background-color: #37598a;
}
.flex-child {
  flex: 0 0 65%;
  color: #4503F8!important;
  font-weight: bolder;
}

.flex-child:first-child {
  flex: 1;
}

/* === Sidebar ==================== */
.element .element-sidebar {
  background-color: #dedede;
  border-left: 1px solid #c8c8c8;
  width: 17px;
  padding: 3px 0;
  text-align: center;

  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
}

.element .element-sidebar a {
  display: block;
  color: #aaa;
  text-decoration: none;
  line-height: 14px;
  font-size: 11px;
}

.element .element-sidebar a:hover {
  color: #888;
  text-decoration: underline;
}

/* === List ==================== */
.element .list {
  margin: 0;
  padding: 0 0 353px 0;
  height: 386px;
  list-style: none;
  overflow: auto;

  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.element .list li[data-group] {
  border-left: 3px solid #ddd;
}

.element .list li[data-group="work"] {
  border-left-color: #9cc9cb;
}

.element .list li {
  background: #f0f0f0;
  background: -moz-linear-gradient(top, #f0f0f0 1%, #eeeeee 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(1%, #f0f0f0),
      color-stop(100%, #eeeeee));
  background: -webkit-linear-gradient(top, #f0f0f0 1%, #eeeeee 100%);
  background: -o-linear-gradient(top, #f0f0f0 1%, #eeeeee 100%);
  background: -ms-linear-gradient(top, #f0f0f0 1%, #eeeeee 100%);
  background: linear-gradient(top, #f0f0f0 1%, #eeeeee 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f0f0f0',
      endColorstr='#eeeeee', GradientType=0);

  border-bottom: 1px solid #d4d4d4;
  border-top: 1px solid #fff;
}

.element .list li:first-child {
  border-top: 0;
}

.element .list li a {
  display: block;
  padding: 8px;
  color: #727272;
  font-size: 13px;
  font-weight: bold;
  text-decoration: none;
  text-shadow: 0 1px 0 #fff;
}

.element .list li a:hover {
  background: #f5f5f5;
  color: #555;
}

.element .list li a span {
  display: block;
  color: #b5b5b5;
  font-size: 11px;
  font-weight: normal;
  text-decoration: none;
}

.element .list li .add-new {
  display: block;
  color: #787878;
  font-size: 12px;
  font-weight: normal;
  text-align: center;
}
</style>
