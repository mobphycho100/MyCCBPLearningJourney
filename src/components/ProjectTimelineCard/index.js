// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {data} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = data

  return (
    <>
      <div>
        <img src={imageUrl} alt="project" className="project-img" />
        <div className="course-header">
          <h1>{projectTitle}</h1>
          <div className="duration">
            <AiFillCalendar />
            <p>{duration}</p>
          </div>
        </div>
        <p>{description}</p>
        <a href={projectUrl} rel="noreferrer" target="_blank">
          Visit
        </a>
      </div>
    </>
  )
}

export default ProjectTimelineCard
