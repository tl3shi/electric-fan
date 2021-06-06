<template>
  <div id="app">
    <h3 :title="description">
      {{ title }}
      <br />
      <small>
        {{ description }}
      </small>
    </h3>

    <fan></fan>

    <div class="footer">
      <div style="margin: 1rem">
      <!-- rm ad
        <el-button>
          <a :href="adImageLink" target="_blank"
            ><span class="animate-logo">{{ adText }}</span></a
          >
        </el-button>
    -->
      </div>
      <a href="https://t.1yb.co/s0vS"> 说明书(附源码) </a> 

      <a href="http://ac.coderstone.cn/#/"> 戳这里吹空调 </a>
    </div>
  </div>
</template>

<script lang="ts">
import Fan from "./components/Fan.vue";
import VueAboutMe from "vue-about-me/sfc";
import { defineComponent } from "@vue/runtime-core";


export default defineComponent({
  name: "app",
  data() {
    return {
      title: "夏日清凉小风扇",
      description: "除了没有风，什么都好！",
      copyright: {
        name: "",
        repo: "",
        author: "",
        logo: "",
        link: "",
      },
      // 原作者 yunyoujun, 请查看 github 源头
      links: [
        {
          name: "wechat",
          color: "#1AAD19",
          icon: "ri:wechat-2-line",
          label: "公众号：程序猿石头",
          href:
            "http://www.tanglei.name/resources/qrcode-tangleithu-3.jpeg",
        },
      ],
    };
  },
  components: {
    Fan,
    VueAboutMe,
  },
});
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app > .footer {
  margin-top: 460px;
}
</style>
