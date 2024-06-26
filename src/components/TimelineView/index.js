// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <>
      <div className="main-container">
        <h1 className="main-heading">
          MY JOURNEY OF <br />
          <span className="ccbp-heading">CCBP 4.0</span>
        </h1>
        <div className="chrono-container">
          <Chrono
            mode="VERTICAL_ALTERNATING"
            items={timelineItemsList}
            theme={{
              secondary: 'white',
              titleColor: '#0967d2',
            }}
          >
            {timelineItemsList.map(each => {
              let cardElement
              if (each.categoryId === 'COURSE') {
                cardElement = <CourseTimelineCard key={each.id} data={each} />
              }
              if (each.categoryId === 'PROJECT') {
                cardElement = <ProjectTimelineCard key={each.id} data={each} />
              }
              return cardElement
            })}
          </Chrono>
        </div>
      </div>
    </>
  )
}

export default TimelineView
