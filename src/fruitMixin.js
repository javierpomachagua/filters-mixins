export const fruitMixin = {
  data() {
    return {
      text: "Hello There",
      fruits: ["orange", "banana", "melon", "mango"],
      filterText: ""
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(fruit => {
        return fruit.match(this.filterText);
      });
    }
  },
  created() {
    console.log('Created');
  }
}