<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";

const data = ref();

const fetchData = async () => {
    const response = await fetch(`/weatherforecast`);
    const responseData = await response.json();
    data.value = responseData;
};
</script>

<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
    <button @click="fetchData">Fetch data</button>
    <div>
        <ul>
            <li v-for="x in data">Temperature: {{ x.temperatureC }}, Summary: {{ x.summary }}</li>
        </ul>
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
