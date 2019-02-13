<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <button class="btn btn-default" @click="fruits.push('berries')">Add fruit</button>
        <p>{{ text | toUppercase | to-lowercase }}</p>
        <hr>
        <input v-model="filterText">
        <ul>
          <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
        <hr>
        <list></list>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./List.vue";
import { fruitMixin } from "./fruitMixin.js";

export default {
  mixins: [fruitMixin],
  components: {
    List
  },
  data() {
    return {
      text: "Hello There"
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  }
};
</script>

<style>
</style>
