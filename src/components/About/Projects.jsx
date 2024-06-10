import React from 'react';
import Carditems from '../Carditems';
import portfolio from '../../data/portfolio';
const Projects = ({ isBlogVisible }) => {
  return (
    <div className='mt-20 p-5 grid  grid-cols-3  justify-center gap-10' isBlogVisible={isBlogVisible}>
         {portfolio.map((item) => (
        <Carditems key={item.id} data={item} />
      ))}
    
      
    </div>
  );
};

export default Projects;
