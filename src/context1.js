import React, { Component } from 'react'
import items from './data'
import { recomposeColor } from '@material-ui/core';
const  ScheduleContext = React.createContext();
//<ScheduleContext.Provider value={'hello'}
class ScheduleProvider extends Component {
    state={
        Schedules:[],
        featuredSchedule :[],
        loading:true
        }

    componentDidMount(){
        let Schedules = this.formatData(items)
        let singleSchedule =Schedules.filter(Schedules=>Schedules.featured===true);
        this.setState({
            Schedules, singleSchedule,loading:false
        });
    }

    formatData(items){
        let tempItems = items.map(item=> {
            let id = item.sys.id
            

            let Schedule={...item.fields,id}
            return Schedule;
        });
        return tempItems;
    }
    render() {
        return (
            <ScheduleContext.Provider value={{...this.state }}>
                {this.props.children}
            </ScheduleContext.Provider>
        )
    }
}

const ScheduleConsumer =ScheduleContext.Consumer;

export{ScheduleProvider,ScheduleConsumer, ScheduleContext}