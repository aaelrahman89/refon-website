export default ({ $axios, env, i18n }) => {
  $axios.onRequest(config => {
    config.headers.common['Lang'] = i18n.locale;
  });
}
