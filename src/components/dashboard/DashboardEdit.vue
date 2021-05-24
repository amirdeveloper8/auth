<template>
  <div id="complete-details">
    <h1 class="text-center py-2">تکمیل اطلاعات</h1>
    <div class="complete-form">
      <form @submit.prevent="onCompelete">
        <div class="input">
          <label for="name">نام</label>
          <input type="name" id="name" v-model="user.name" />
          <p class="error text-right py-2" v-if="nameVal === 'invalid'">
            نام خود را وارد کنید
          </p>
        </div>

        <div class="input">
          <label for="email">ایمیل</label>
          <input type="email" id="email" v-model="user.email" />
          <p class="error text-right py-2" v-if="emailVal === 'invalid'">
            ایمیل خود را وارد کنید
          </p>
        </div>

        <div class="input">
          <label for="nationalid">کد ملی</label>
          <input
            type="number"
            id="nationalid"
            v-model.number="user.nationalid"
          />
          <p class="error text-right py-2" v-if="nationalidVal === 'invalid'">
            کد ملی خود را وارد کنید
          </p>
          <p class="error text-right py-2" v-if="nationalidVal === 'incorrect'">
            کد ملی خود را به درستی وارد کنید
          </p>
        </div>

        <div class="input">
          <label for="postalcode">کد پستی</label>
          <input
            type="number"
            id="postalcode"
            v-model.number="user.postalcode"
          />
          <p class="error text-right py-2" v-if="postalcodeVal === 'invalid'">
            کدپستی خود را وارد کنید
          </p>
          <p class="error text-right py-2" v-if="postalcodeVal === 'incorrect'">
            کدپستی خود را به درستی وارد کنید
          </p>
        </div>

        <div class="input">
          <label for="filenumber">شماره پرونده</label>
          <input
            type="number"
            id="filenumber"
            v-model.number="user.filenumber"
          />
          <p class="error text-right py-2" v-if="filenumberVal === 'invalid'">
            شماره پرونده خود را وارد کنید
          </p>
        </div>

        <div class="input">
          <label for="adress">آدرس</label>
          <textarea
            name="adress"
            id="adress"
            cols="4"
            v-model="user.adress"
          ></textarea>
        </div>

        <div class="input">
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="user.groupsname"
          >
            <option value="def">لطفا گروه خود را انتخاب کنید</option>
            <option value="جوشکار">
              جوشکار
            </option>
            <option value="کارگر">
              کارگر
            </option>
            <option value="برق کار">
              برق کار
            </option>
          </select>
          <p class="error text-right py-2" v-if="user.groupVal === 'invalid'">
            گروه خود را انتخاب کنید
          </p>
        </div>
        <div class="submit">
          <button type="submit">ثبت</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      name: null,
      email: null,
      nationalid: null,
      postalcode: null,
      filenumber: null,
      adress: null,
      groupsname: "def",
      nameVal: "valid",
      emailVal: "valid",
      nationalidVal: "valid",
      postalcodeVal: "valid",
      filenumberVal: "valid",
      groupVal: "valid",
      error: "",
      //   sub: 0,
    };
  },

  computed: {
    ...mapGetters(["user"]),
  },

  methods: {
    async onCompelete() {
      try {
        const response = await axios.post("updateuser", this.user);
        // const response = await axios.post("updateuser", {
        //   name: this.name,
        //   email: this.email,
        //   nationalid: this.nationalid,
        //   postalcode: this.postalcode,
        //   filenumber: this.filenumber,
        //   groupsname: this.groupsname,
        //   adress: this.adress,
        //   token: this.$route.params.token,
        // });
        console.log(response);
        this.$router.push("/dashboard-info");
      } catch (error) {
        console.log("ERRRR:: ", error.response.data);
      }
    },

    // validateName() {
    //   if (this.name === "") {
    //     this.nameVal = "invalid";
    //   } else {
    //     this.nameVal = "valid";
    //   }
    // },

    // validateEmail() {
    //   if (this.email === "") {
    //     this.emailVal = "invalid";
    //   } else {
    //     this.emailVal = "valid";
    //   }
    // },

    // validateNationalid() {
    //   if (this.nationalid === "") {
    //     this.nationalidVal = "invalid";
    //   } else {
    //     this.nationalidVal = "valid";
    //   }
    // },

    // validatePostalcode() {
    //   if (this.postalcode === "") {
    //     this.postalcodeVal = "invalid";
    //   } else {
    //     this.postalcodeVal = "valid";
    //   }
    // },

    // validateFilenumber() {
    //   if (this.filenumber === "") {
    //     this.filenumberVal = "invalid";
    //   } else {
    //     this.filenumberVal = "valid";
    //   }
    // },

    // validateGroup() {
    //   if (this.groupsname === "def") {
    //     this.groupVal = "invalid";
    //   } else {
    //     this.groupVal = "valid";
    //   }
    // },
  },
};
</script>

<style scoped>
#complete-details {
  width: 85%;
  margin: 0;
}

* {
  text-align: right;
}

textarea {
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  color: white;
}

.complete-form {
  width: 400px;
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
  background: #3e3e3e;
}

.input {
  margin: 10px auto;
  position: relative;
}

.input label {
  display: block;
  margin-bottom: 6px;
  text-align: center;
  color: white;
  font-weight: 700;
}

.input.inline label {
  display: inline;
}

.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  color: white;
}

.input.inline input {
  width: auto;
}

.input input:focus {
  outline: none;
  border: 1px solid #521751;
  background-color: transparent;
}

.input input:active {
  background: transparent;
}

.input select {
  border: 1px solid #ccc;
  font: inherit;
}

.hobbies button {
  border: 1px solid #521751;
  background: #521751;
  color: white;
  padding: 6px;
  font: inherit;
  cursor: pointer;
}

.hobbies button:hover,
.hobbies button:active {
  background-color: #8d4288;
}

.hobbies input {
  width: 90%;
}

.submit button {
  border: 1px solid #521751;
  color: #521751;
  padding: 10px 20px;
  font: inherit;
  cursor: pointer;
}

.submit button:hover,
.submit button:active {
  background-color: #521751;
  color: white;
}

.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active {
  border: 1px solid #ccc;
  background-color: transparent;
  color: #ccc;
  cursor: not-allowed;
}

.error {
  color: white;
  font-size: 14px;
  background: #ff000061;
  padding: 2px 10px;
  margin-bottom: 0;
  border-radius: 10px;
}

.fa-times-circle {
  color: red;
}

.fa-check-circle {
  color: green;
}

.far {
  position: absolute;
  top: 42px;
  left: 10px;
}

.group-jop label {
  padding: 0 2%;
}

select,
option {
  text-align-last: right;
  direction: rtl;
}
</style>
