// find the routes that can be achieved from a table row 1 column 1 to row 4, column 4 (last cell)
// Write css for nested div
// write custom allsettled
// how do you make an operation when certain APIs have been called
// how to save user logs for example, need to save user, and which route they're in

// solution:

// import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

// const LogRouteChange = ({ user }) => {
//   const location = useLocation();

//   useEffect(() => {
//     const logData = {
//       user: user.username, // Assume user object has a username property
//       route: location.pathname,
//       timestamp: new Date().toISOString(),
//     };

//     // Send log data to server
//     axios.post('/api/logs', logData).catch((error) => {
//       console.error('Error logging route change:', error);
//     });
//   }, [location, user]);

//   return null; // This component doesn't render anything
// };

// const App = ({ user }) => (
//   <Router>
//     <LogRouteChange user={user} />
//     {/* Other routes and components */}
//   </Router>
// );

// export default App;


// Async function