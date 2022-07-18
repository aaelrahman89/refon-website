export const state = () => ({
  categories: [],
  menuItems: [],
  menuItem: {},
  homeMenuItems: [],
  subCategories: {},
})

export const getters = {
  allCategories: state => state.categories,
  allMenuItems: state => state.menuItems,
  menuItem: state => state.menuItem,
  homeMenuItems: state => state.homeMenuItems,
  allSubCategories: state => state.subCategories,
};

export const actions = {
  // fetchCategories
  async fetchCategories({ commit }) {
    const response = await this.$axios.$post( 'menu/all' );
    commit('setCategories', response.data.categories);
  },

    // fetch menu items by subCategoryId
    async fetchMenuItems({ commit }, subCategoryId) {
      const response = await this.$axios.$post( `menu/${subCategoryId}/products`, null );
      commit('setMenuItems', response.data.sub_category_products);
    },

  // fetch menu item by id
    async fetchMenuItem({ commit }, id) {
      const response = await this.$axios.$post( `menu/products/${id}/details`, null );
      commit('setMenuItem', response.data.product_details);
    },

  // fetch home menu items
  async fetchHomeMenuItems({ commit }) {
    const response = await this.$axios.$post( 'menu/random/products' );
    commit('setHomeMenuItems', response.data.random_products);
  },

      // fetch subcategories by categoryId
      async fetchSubCategories({ commit }, categoryId) {
        const response = await this.$axios.$post( `menu/categories/${categoryId}/subs`, null );
        commit('setSubCategories', response.data);
      },

};

export const mutations = {
  setCategories: (state, categories) => (state.categories = categories),
  setMenuItems: (state, menuItems) => (state.menuItems = menuItems),
  setMenuItem: (state, menuItem) => (state.menuItem = menuItem),
  setHomeMenuItems: (state, homeMenuItems) => (state.homeMenuItems = homeMenuItems),
  setSubCategories: (state, subCategories) => (state.subCategories = subCategories),
};

