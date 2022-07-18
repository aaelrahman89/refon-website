export const state = () => ({
  pages: [],
  page: [],
})

export const getters = {
  allPages: state => state.pages,
  page: state => state.page,
};

export const actions = {
  // fetchPages
  async fetchPages({ commit }) {
    const response = await this.$axios.$post( `pages/list`, null );
    commit('setPages', response.data.pages_list);
  },

    // fetch Page
    async fetchPage({ commit }, id) {
      const response = await this.$axios.$post( `pages/${id}/details`, null );
      commit('setPage', response.data.page_details);
    },

};

export const mutations = {
  setPages: (state, pages) => (state.pages = pages),
  setPage: (state, page) => (state.page = page),
};

