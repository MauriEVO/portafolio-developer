import React from 'react'
import './styles.sass'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'

export const ProjectsComponent = () => {
   return (
      <section className='section_projects'>
         <div className="projects_container">
            <div className="projects_title">
               <h2>Projects</h2>
            </div>
            <div className="projects_items">
               <div className="project_box">
                  <figure><img src={project1} alt="" /></figure>
               </div>
               <div className="project_box">
                  <figure><img src={project2} alt="" /></figure>
               </div>
               <div className="project_box">
                  <figure><img src={project2} alt="" /></figure>
               </div>
               <div className="project_box">
                  <figure><img src={project1} alt="" /></figure>
               </div>
               <div className="project_box">
                  <figure><img src={project2} alt="" /></figure>
               </div>
               <div className="project_box">
                  <figure><img src={project2} alt="" /></figure>
               </div>
            </div>
         </div>
      </section>
   )
}
