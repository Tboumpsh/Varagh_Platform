type ErrorDetails = {
  message: string;
  stack?: string;
};

/**
 * @typedef {Object} ErrorDetails
 * @property {string} message - A descriptive message about the error.
 * @property {string} [stack] - An optional stack trace of the error, providing additional details about the error's origin.
 */

/**
 * Logs error details to the console.
 * 
 * This function prints the error message and, if available, the stack trace to the console. It is used to provide 
 * detailed information about an error for debugging purposes.
 * 
 * @param {ErrorDetails} error - An object containing the error message and optionally the stack trace.
 * @returns {void}
 * 
 * @example
 * // Example usage:
 * logError({
 *   message: 'An unexpected error occurred',
 *   stack: 'Error at function XYZ in file abc.js: line 23'
 * });
 */


// A function to log error details
function logError(error: ErrorDetails): void {
  console.error(`Error: ${error.message}`);
  if (error.stack) {
    console.error(`Stack trace: ${error.stack}`);
  }
}

// A function to check for errors
function checkErrors(callback: () => void): void {
  try {
    callback();
  } catch (error) {
    const errorDetails: ErrorDetails = {
      message: (error as Error).message,
      stack: (error as Error).stack,
    };
    logError(errorDetails);
  }
}
