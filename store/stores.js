export const state = () => ({
  stores: [],
})

export const getters = {
  allStores: state => state.stores,
};

export const actions = {
  // fetchSliders
  async fetchStores({ commit }) {
    const response = await this.$axios.$post( 'stores/list' );
    commit('setStores', response.data.stores);
  },
};

export const mutations = {
  setStores: (state, stores) => (state.stores = stores)
};

