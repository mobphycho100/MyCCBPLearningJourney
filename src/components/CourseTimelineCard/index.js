// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {data} = props
  const {courseTitle, description, duration, tagsList} = data

  return (
    <>
      <div>
        <div className="course-header">
          <h1>{courseTitle}</h1>
          <div className="duration">
            <AiFillClockCircle />
            <p>{duration}</p>
          </div>
        </div>
        <p>{description}</p>
        <ul className="list-item-container">
          {tagsList.map(each => (
            <li key={each.id}>
              <p className="list-item">{each.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default CourseTimelineCard
