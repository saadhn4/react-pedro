import React from 'react';
import Job from './Job';

const App = () => {
  return (
   <>
   <Job salary={90000} position="Senior SDE" company="Amazon"/>
   <Job salary={12000} position="Junior SDE" company="Google"/>
   <Job salary={10000} position="Project Manager" company="Netflix"/>
   </>
  );
};

export default App;
