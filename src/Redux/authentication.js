// authMiddleware.js

const authMiddleware = store => next => action => {
    // Check if the action type requires authentication
    if (action.meta && action.meta.requiresAuth) {
      // Check if the user is authenticated (you need to implement this)
      const isAuthenticated = window.localStorage.getItem('token');
  
      if (!isAuthenticated) {
        // Handle the case when the user is not authenticated
        console.log('User is not authenticated');
        // You can dispatch a different action or perform other actions as needed
      } else {
        // User is authenticated, let the action proceed
        return next(action);
      }
    }
  
    // If the action does not require authentication, let it proceed
    return next(action);
  };
  
  export default authMiddleware;
  