import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const counter = {
  state : {
    count: 0,
    click: 0,
    maxClick: 25
  },

  getters : {
    IsEvenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
    IsClickLimitDone: state => state.click >= state.maxClick ? true : false,
    IsPrimeCounter: state => {
      let primeFlag = true;
      for (let i = 2; i <= Math.sqrt(state.count); i++) {
        if(state.count % i == 0) primeFlag = false;
      }

      return primeFlag && (state.count > 1);
    }
  },

  mutations : {
    increment (state) {
      state.count++;
      state.click++;
    },
    decrement (state) {
      state.count--;
      state.click++;
    },
    reset (state) {
      state.count = 0;
      state.click = 0;
    }
  },

  actions : {
    increment: ({commit}) => commit('increment'),
    decrement: ({commit}) => commit('decrement'),
    incrementIfOdd: ({commit, state}) => {
      if((state.count + 1) % 2 === 0) {
        commit('increment');
      }
    },
    incrementAsync: ({ commit }) => {
      return new Promise((response, reject) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 1000)
      })
    },
    enableButtons: ({commit, state}) => {
      commit('reset')
    }
  }
}

export default new Vuex.Store({
  modules: {
    counter: counter
  }
})