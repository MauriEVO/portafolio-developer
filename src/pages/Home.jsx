import React from 'react'
import { BannerHome } from '../components/banners/banner'
import { ProjectsComponent } from '../components/projects/projects'
export const HomePage = () => {
   return (
      <>
         <BannerHome></BannerHome>
         <ProjectsComponent></ProjectsComponent>
      </>
   )
}
