import React, { Component } from 'react'
import {NoticeContext} from "../context"
import Loading from "./Loading"
import Notice from "../Components/Notices"
import Title from "./Title";
export default class SingleNotice extends Component {
    static contextType=NoticeContext
    render() {
        let { loading, singleNotice:notices}=this.context;
        notices = notices.map(notice=> {
            return <Notice key={notice.id} notice={notice}/>
        })
        return (
            <section className="featured-rooms">
            <Title title="featured Notice"/>
                <div className="featured-rooms-center">
                    {loading?<Loading/>:notices}
                </div>
            </section>
        )
    }
}
