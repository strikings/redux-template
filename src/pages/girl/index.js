import React from 'react'
import { connect } from 'react-redux'
// 导入 静态图 还需要导入gif动图

import getImg from '../../assets/image/get3.jpg';
import sendImg from '../../assets/image/receve.gif';

class Girl extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.status ? sendImg : getImg} alt="" style={{ width: '200px', height: '200px' }} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Girl);