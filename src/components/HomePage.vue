<template>
  <div class="row">
    <div class="col-md-4 col-buttons">
      <div class="flex-grid">
        <div class="sideButtons">
          <card>
              <button class="carD" @click="displayJournal()">
                <h4>Journal</h4>
              </button>
          </card>
          <card>
              <button class="carD" @click="displayContact()">
                <h4>Contact</h4>
              </button>
          </card>
          <card>
              <button class="carD" @click="displayKeyboard()">
                <h4>Telephone</h4>
              </button>
          </card>
        </div>
        <!--Fin Col1-->
      </div>
    </div>
    <div class="col-md-4 col-content">
      <div class="grid-child">
        <div class="keyboard">
          <KeyboardComp @journal="displayContact()" v-if="keyb"></KeyboardComp>
        </div>
      </div>
      <div class="grid-child contact" v-if="contact">
        <Contact></Contact>
      </div>
      <div class="grid-child contact" v-if="callJournal">
        <Calls></Calls>
      </div>
    </div>
  </div>
  <!--FinGrid-->
</template>

<script>
import KeyboardComp from './Keyboard.vue';
import Contact from './Contact.vue';
import Calls from './CallJournal.vue';
import EventBus from '../service/eventBus';

export default {
  name: 'HelloWorld',
  data() {
    return { keyb: false, contact: false, callJournal: false };
  },
  methods: {
    displayKeyboard() {
      this.reset();
      this.keyb = !this.keyb;
    },
    displayContact() {
      this.reset();
      this.contact = !this.contact;
    },
    displayJournal() {
      this.reset();
      this.callJournal = !this.callJournal;
    },
    reset() {
      this.keyb = false;
      this.contact = false;
      this.callJournal = false;
    },
  },
  props: {
    msg: String,
  },
  mounted() {
    const thisInstance = this;
    EventBus.$on('journal', () => {
      thisInstance.showJournal();
    });
  },
  components: {
    KeyboardComp,
    Contact,
    Calls,
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped >
.row {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 2px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 0;
}

.col-md-4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  text-align: center;
  height:70vh;
  box-shadow: 0 0px 30px 0 rgba(0, 0, 0, 0.19);
  border-radius: 12px;
  border: 3px solid rgb(230, 126, 29);
}
.flex-grid{
  display: flex;
  justify-content: center;
  padding-top: 10vh;
}

.carD {
  display:flex;
  justify-content: center;
padding:0.3em 1.2em;
margin:0 0em 8.1em 0;
border:0.16em solid rgba(255,255,255,0);
border-radius:2em;
box-sizing: border-box;
text-decoration:none;
font-family:'Roboto',sans-serif;
font-weight:900;
background-color: #d0f3f0 ;
color:#f08437;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
min-width: 15em;
text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
text-align:center;
transition: all 0.2s;
}
.cardD:hover{
 border-color: rgba(255,255,255,1);
}
@media all and (max-width:30em){
  .cardD{
display:block;
margin:0.2em auto;
}
}
</style>
