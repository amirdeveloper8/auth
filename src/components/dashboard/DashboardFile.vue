<template>
  <div id="complete-details">
    <form @submit.prevent="sendFile" enctype="multipart/form-data">
      <div
        v-if="message"
        class="alert"
        :class="`${error ? 'alert-danger' : 'alert-success'}`"
      >
        <div class="message-body">
          {{ message }}
        </div>
      </div>
      <h1 class="text-center py-2">تکمیل اطلاعات</h1>
      <div class="complete-form">
        <div class="input">
          <label for="name">نام</label>
          <input type="text" id="name" v-model="name" />
        </div>
        <div class="input">
          <label for="file">نام</label>
          <!-- <UploadImages ref="file" @change="selectedFile" /> -->
          <input type="file" id="file" ref="file" @change="selectedFile" />
        </div>
        <div class="submit">
          <button type="submit">ثبت</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
// import UploadImages from "vue-upload-drop-images";
export default {
  //   components: {
  //     UploadImages,
  //   },
  data() {
    return {
      files: "",
      name: "",
      message: "",
      error: "",
    };
  },
  methods: {
    selectedFile() {
      const file = this.$refs.file.files[0];
      this.files = file;
      this.message = "";
      this.error = false;
    },

    async sendFile() {
      const formData = new FormData();
      formData.append("files", this.files);
      formData.append("name", this.name);
      try {
        await axios.post("fileCreate", formData);
        this.message = "فایل شما ارسال شد";
        this.files = "";
        this.name = "";
        this.error = false;
        console.log(this.files);
      } catch (err) {
        console.log(err);
        this.message = "ارسال ناموفق";
        this.error = true;
      }
    },
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
