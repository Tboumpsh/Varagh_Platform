type ErrorDetails = {
  message: string;
  stack?: string;
};

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
