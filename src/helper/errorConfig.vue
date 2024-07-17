
import Vue from 'vue';

Vue.config.errorHandler = function (err, vm, info) {
  // Log the error
  console.error(`Error: ${err.toString()}\nInfo: ${info}`);

  // Optionally, send the error details to a server
  fetch('/log-error', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      error: err.toString(),
      info: info,
      component: vm.$options.name || vm.$options._componentTag,
    }),
  }).catch(serverError => {
    console.error('Failed to send error details to the server:', serverError);
  });
};
