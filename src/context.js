import React, { Component } from 'react'
import items from './data'
import { recomposeColor } from '@material-ui/core';
const  NoticeContext = React.createContext();
//<NoticeContext.Provider value={'hello'}
class NoticeProvider extends Component {
    state={
        notices:[],
        featuredNotice :[],
        loading:true
        }

    componentDidMount(){
        let notices = this.formatData(items)
        let singleNotice =notices.filter(notices=>notices.featured===true);
        this.setState({
            notices, singleNotice,loading:false
        });
    }

    formatData(items){
        let tempItems = items.map(item=> {
            let id = item.sys.id
            

            let notice={...item.fields,id}
            return notice;
        });
        return tempItems;
    }
    render() {
        return (
            <NoticeContext.Provider value={{...this.state }}>
                {this.props.children}
            </NoticeContext.Provider>
        )
    }
}

const NoticeConsumer =NoticeContext.Consumer;

export{NoticeProvider,NoticeConsumer, NoticeContext}