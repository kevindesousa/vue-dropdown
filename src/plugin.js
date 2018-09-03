import dropdown from './dropdown.vue';
import dropdownOption from './dropdown-option.vue';

module.exports = {
  install: function (Vue) {
    Vue.component('k-dropdown', dropdown);
    Vue.component('k-dropdown-option', dropdownOption);
  }
};
