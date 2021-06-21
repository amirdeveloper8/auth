<template>
  <div>
    <div v-if="user" class="container-fluid" id="user-details">
      <h1 class="px-4" style="text-align:center">اطلاعات ثبت شده</h1>
      <div class="row">
        <div
          v-for="(users, name, index) in user"
          :key="users"
          class="col-sm-12 col-md-3 mt-4 box"
          :class="name"
        >
          <div
            class="d-flex justify-content-center align-items-center boxes"
            :class="'boxes' + index"
          >
            <div class="content">
              <h4>
                {{ name }}
              </h4>
              <p>
                {{ users }}
              </p>
            </div>
            <div class="icon px-2">
              <i class="fas fa-user"></i>
            </div>
          </div>
        </div>
        <div>
          {{ user }}
        </div>
      </div>
    </div>
    <div v-else class="container">
      <h2 class="text-center bg-secondary text-white p-4">
        لطفا با حساب کاربری خود وارد شوید
      </h2>
      <div class="text-center">
        <router-link class="btn btn-primary" to="/login">ورود</router-link>
      </div>
      <div class="text-center">
        <router-link class="btn btn-primary mt-2" to="/register"
          >ثبت نام</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  computed: {
    ...mapGetters(["user"]),
  },

  async created() {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.get("user");
      this.$store.dispatch("user", response.data);
    }
  },
};
</script>

<style>
#user-details {
  width: 85%;
  margin: 0;
}

.boxes {
  direction: rtl;
}

.icon i {
  font-size: 28px;
  color: rgba(46, 46, 46, 0.514);
}

.content {
  text-align: right;
  width: 80%;
}

.content h4,
.content p {
  margin: 3% 2%;
}

.boxes {
  background-color: rgb(155, 155, 155);
  border-radius: 8px;
  border-left: 8px solid;
}

.box.id,
.box.type,
.box.created_at,
.box.updated_at {
  display: none;
}

.boxes2 {
  border-color: rgb(0, 128, 100);
}
.boxes3 {
  border-color: rgb(197, 49, 30);
}
.boxes4 {
  border-color: rgb(0, 92, 128);
}
.boxes5 {
  border-color: rgb(70, 0, 128);
}
.boxes6 {
  border-color: rgb(0, 128, 100);
}
.boxes7 {
  border-color: rgb(197, 49, 30);
}
.boxes8 {
  border-color: rgb(0, 92, 128);
}
.boxes11 {
  border-color: rgb(70, 0, 128);
}
.boxes12 {
  border-color: rgb(0, 128, 100);
}
</style>
