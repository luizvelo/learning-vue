import Vue from 'vue';
import moment from 'moment';

Vue.filter('dateFormat', function (value) {
  console.log(value);
  if (value) {
    return moment(String(value))
      .format('MM/DD/YYYY hh:mm')
  }
});