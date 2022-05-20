import React from 'react';

import CV from './view/cv';
import Projects from './view/projects';

const Content = ({ projects, startLoading }) => (
  <>
    <Projects startLoading={startLoading} projects={projects} />
    <CV />
  </>

);

export default Content;
