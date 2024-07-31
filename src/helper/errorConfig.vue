
import Vue from 'vue';


/**
 * Custom error handler for Vue.js applications.
 * 
 * This function is configured to handle errors globally within Vue components. It logs the error details to the console
 * and optionally sends the error information to a remote server for logging or monitoring purposes.
 * 
 * @param {Error} err - The error object containing details about the error that occurred.
 * @param {Vue} vm - The Vue instance where the error occurred. This instance contains information about the component
 *                    and its context.
 * @param {string} info - A string containing additional information about the error, such as the lifecycle hook
 *                         where the error was captured.
 * 
 * @returns {void}
 *
 * 
 * @see {@link https://vuejs.org/v2/guide/instance.html#errorHandler}
 * 
 * This custom error handler is useful for capturing and tracking errors in a Vue.js application, especially in production
 * environments where monitoring and logging are crucial for maintaining application stability and diagnosing issues.
 */

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
