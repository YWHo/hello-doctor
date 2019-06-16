import React from 'react';
import { connect } from 'react-redux';
import selectors from '../../state/selectors'

export function AppointmentPage(props) {
  const { schedules = [] } = props
  const nameList = Array.from(schedules).map((item, idx) => {
    return (
      <div key={idx}>
        <div>Name: {item.Name}</div>
        <div>Title: {item.Title}</div>
        <br />
      </div>
    );
  });

  return (
    <div>
      { nameList }
    </div>
  ) 
}

const mapStateToProps = (state) => {
  return {
    schedules : selectors.getSchedules(state)
  }
}

function mapDispatchToProps (dispatch) {
  return { }
}


export default connect(mapStateToProps, mapDispatchToProps)(AppointmentPage);