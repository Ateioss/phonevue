<template>
  <div class="wrapper">
    <div class="phone">
      <div class="phone-container">
        <label for="numberInput">
        <input type="text" maxlength="11" class="number-input"
        id="numberInput" placeholder="" v-model="inputVal">

      </label>
      <p v-if="user"> {{ user.name }}</p>
        <div class="keyboard">
          <div class="number">
            <span @click="addDigit('1')" @keypress="addDigit('1')"><i>1</i></span>
            <span @click="addDigit('2')" @keypress="addDigit('2')"><i>2</i></span>
            <span @click="addDigit('3')" @keypress="addDigit('3')"
            ><i>3</i></span>
            <span @click="addDigit('4')" @keypress="addDigit('4')"
            ><i>4</i></span>
            <span @click="addDigit('5')" @keypress="addDigit('5')"
            ><i>5</i></span>
            <span @click="addDigit('6')" @keypress="addDigit('6')"
            ><i>6</i></span>
            <span @click="addDigit('7')" @keypress="addDigit('7')"
            ><i>7</i></span>
            <span @click="addDigit('8')" @keypress="addDigit('8')"
            ><i>8</i></span>
            <span  @click="addDigit('9')" @keypress="addDigit('9')"
            ><i>9</i></span>
            <span @click="call()" @keypress="call()">
              <i>
                <font-awesome-icon icon="fa-solid fa-phone" size="lg"/>
              </i>
            </span>
              <span @click="addDigit('0')" @keypress="addDigit('0')"
            ><i>0</i></span>
              <span @click="deleteEntry()" @keypress=" deleteEntry()">
                <i><font-awesome-icon icon="fa-solid fa-delete-left" size="lg"/></i></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Users } from '../models/users';

export default {
  name: 'KeyboardComp',
  data() {
    return {
      inputVal: '',
      users: Users,
      user: '',
      contactClicked: 0,
    };
  },
  methods: {
    showJournal() {
      this.contactClicked = 1;
      this.$emit('journal');
    },
    call() {
      this.$store.commit('addCall', this.inputVal);
      this.$notify({ type: 'success', text: `Calling: ${this.inputVal}` });
      this.inputVal = '';
    },
    addDigit(num) {
      this.inputVal += num;
      if (this.inputVal.length > 9) {
        this.isRegistered(this.inputVal);
      }
    },
    routage() {
      this.$router.push({ path: '/addUser' });
    },
    isRegistered(phone) {
      this.user = this.users.find((o) => o.phone === phone);
    },
    deleteEntry() {
      this.inputVal = this.inputVal.substring(0, this.inputVal.length - 1);
      this.user = '';
    },
  },

  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
}
input {
  font-size:20px;
  color:#2557d6;
  font-weight:400;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
  &.number-input {
    width:100%;
    height:55px;
    line-height:55px;
    text-align:center;
    padding:0 20px;
    border-radius:10px;
    border:1px solid #fd7e48;;
    -webkit-box-shadow: 0px 0px 17px -1px rgba(243, 226, 226, 0.825);
    -moz-box-shadow: 0px 0px 17px -1px rgba(243, 226, 226, 0.825);
    box-shadow: 0px 0px 17px -1px rgba(243, 226, 226, 0.825);
    color: #4134db;
  }
}

.wrapper {
  width:100%;
  .phone {
    width:350px;
    margin:40px auto 0 auto;
    position: relative;
    span.title {
      font-weight:700;
      letter-spacing: 2px;
      display:block;
      text-align:center;
    }
    .phone-container {
      width:100%;
      margin-top:30px;
      .keyboard {
        width:90%;
        margin-left:5%;
        margin-top:40px;
        .number {
          width:100%;
          font-size:0;
          text-align:center;
          &.aling-right {
            text-align:right;
            width:100%;
          }
          i{
            background-color: #d0f3f0 !important;
          }
          span {
            font-size:24px;
            color:#fd7e48;
            display:inline-block;;
            width:33%;
            text-align:center;
            margin-bottom:25px;

            &.call-button {
              opacity:0;
              transition:250ms;
              &.show {
                opacity:1;
              }
              img {
                display:inline-block;
                vertical-align:middle;
              }
            }

            i {
              display:inline-block;
              width:80px;
              height:80px;
              line-height:80px;
              background:white;
              cursor:pointer;
              border-radius:100%;
              transition:250ms;
               -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

              -webkit-box-shadow: 8px 8px 24px 0px rgba(132,132,132,0.09);
              -moz-box-shadow: 8px 8px 24px 0px rgba(132,132,132,0.09);
               box-shadow: 8px 8px 24px 0px rgba(132,132,132,0.09);
              &.delete {
                background:transparent;
                box-shadow:0 0 0 0;
                -webkit-box-shadow:0 0 0 0;
                -moz-box-shadow:0 0 0 0;
                -ms-box-shadow:0 0 0 0;
                color:#E4BF88;
                img {
                  display:inline-block;
                  vertical-align:middle;
                }
              }
            }
             &:hover {
              i {
                color:black;
              }
            }
            &:active {
              i {
              transform: translateY(1px);

              -webkit-box-shadow: 5px 5px 24px 0px rgba(132,132,132,0.18);
-moz-box-shadow: 5px 5px 16px 0px rgba(132,132,132,0.18);
box-shadow: 5px 5px 16px 0px rgba(132,132,132,0.18);
                &.delete {
                  box-shadow:0 0 0 0;
                  -webkit-box-shadow:0 0 0 0;
                  -moz-box-shadow:0 0 0 0;
                  -ms-box-shadow:0 0 0 0;
                  transform: translateY(0px);
                  img {
                    transtiion: 250ms;
                  }
                  &:active {
                    img {
                      transform: translateY(2px);

                    }
                  }

                }
              }
          }
        }
      }
    }
  }
  .key-buttons{
  background-color: transparent;
  border: none;
  }
}
}
</style>
