import axios from "axios";

export default {
  state: {
    counter: 0,
    history: [0],
  },
  getters: {
    getCounter: (state) => state.counter,
    getHistory: (state) => state.history,
    activeIndexes: (state) => (payload) => {
      let indexes = [];
      state.history.forEach((number, index) => {
        if (number === payload) {
          indexes.push(index);
        }
      });
      return indexes;
    },
  },
  mutations: {
    addToCounter(state, payload) {
      state.counter += payload;
      state.history.push(state.counter);
    },
    subtractFromCounter(state, payload) {
      state.counter -= payload;
      state.history.push(state.counter);
    },
  },
  actions: {
    async addRandomNumber(context) {
      let data = await axios.get("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new");
      console.log( data.data);
      context.commit("addToCounter", Math.abs(data.data));
    },
  },
};
