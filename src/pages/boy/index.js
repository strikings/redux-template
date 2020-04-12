import React from 'react'

// 导入 静态图 还需要导入gif动图

import defaultImg from '../../assets/image/launch.png';
import sendImg from '../../assets/image/launch_active2.gif';

import { connect } from 'react-redux'

class Boy extends React.Component {
    // 定义 UI 级别的 state
    state = {
        isSend: false
    }
    handleClick = () => {
        let { isSend } = this.state;
        // 这里需要取反，因为我们的默认状态是false，显示的是 发送爱心，所以当我们点击的时候，取到的这个状态还没有更新的状态，所以我们需要取反
        isSend ? this.props.stopLove() : this.props.sendLove();
        this.setState({
            isSend: !isSend
        })
    }
    render() {
        return (
            <div>
                <img src={this.state.isSend ? sendImg : defaultImg} alt="" style={{ width: '100px', height: '100px' }} />
                <div>
                    <button onClick={this.handleClick}>{this.state.isSend ? "停止发射" : "发射爱心"}</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendLove: () => {
            // 利用 dispatch 发送一个 action
            // 传递 action 对象，我们要定义type属性
            dispatch({
                type: 'send_love'
            })
        },
        stopLove: () => {
            // 利用 dispatch 发送一个 action
            // 传递 action 对象，我们要定义type属性
            dispatch({
                type: 'stop_love'
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(Boy)