
export const state = () => ({
  token: '',
  isLoggedIn: false
})

export const getters = {
  token: state => state.token,
  isLoggedIn: state => state.isLoggedIn
};

export const actions = {
  // Login
  async login({ commit }, data) {
    const response = await this.$axios.$post(
      'https://reqres.in/api/login',
      data
    );

    // store token in localstorage
    localStorage.setItem('token', response.token);

    commit('newLogin', response);
  },

  // Logout
  async logout({ commit }) {
    localStorage.clear();
    commit('newLogout');
  },

};

export const mutations = {
  // new login
  newLogin: (state, response) => {
    state.token = response.token;

    // if token exists make isLoggedIn = true
    if(!!localStorage.getItem('token')){
        state.isLoggedIn = true;
    }
  },

  // new logout
  newLogout: (state) => {
    state.isLoggedIn = false;
  }

};

