export const state = () => ({
  news: [],
  newsItem: {},
})

export const getters = {
  allNews: state => state.news,
  newsItem: state => state.newsItem,
};

export const actions = {
  // fetchSliders
  async fetchNews({ commit }) {
    const response = await this.$axios.$post( 'news/list' );
    commit('setNews', response.data.news_list);
  },

    // fetch menu item by id
    async fetchNewsItem({ commit }, id) {
      const response = await this.$axios.$post( `news/${id}/details`, null );
      commit('setNewsItem', response.data.news_details);
    },

};

export const mutations = {
  setNews: (state, news) => (state.news = news),
  setNewsItem: (state, newsItem) => (state.newsItem = newsItem),
};

