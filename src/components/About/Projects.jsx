import React from 'react';
import Carditems from '../Carditems';

const Projects = ({ isBlogVisible }) => {
  return (
    <div className='mt-20 flex flex-wrap justify-center space-x-4' isBlogVisible={isBlogVisible}>
      <Carditems />
      <Carditems />
      <Carditems />
      
    </div>
  );
};

export default Projects;
