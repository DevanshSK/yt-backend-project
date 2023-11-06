// Use functins as a callback
// const asyncHandler = () => {};
// const asyncHandler = (func) => () => {};
// const asyncHandler = (func) => async () => {};

// Try Catch method
// Here the async handler returns the entire async function which handle the error handling
/*
const asyncHandler = (fn) => async (req, res, next) => {
  try {
    // execute the callback function
    await fn(req, res, next);
  } catch (error) {
    res.status(error.code || 500).json({
      success: false,
      message: error.message,
    });
  }
};
*/

// Handle same functionality using Promises
const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
