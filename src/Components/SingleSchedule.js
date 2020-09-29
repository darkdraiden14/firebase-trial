import React, { Component } from 'react'
import {ScheduleContext} from "../context1"
import Loading from "./Loading"
import Schedule from "./Schedules"
import Title from "./Title";
export default class SingleSchedule extends Component {
    static contextType=ScheduleContext
    render() {
        let { loading, singleSchedule:schedules}=this.context;
        schedules = schedules.map(schedule=> {
            return <Schedule key={schedule.id} schedule={schedule}/>
        })
        return (
            <section className="featured-rooms">
            <Title title="featured Schedule"/>
                <div className="featured-rooms-center">
                    {loading?<Loading/>:schedules}
                </div>
            </section>
        )
    }
}
