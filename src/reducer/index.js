
const initState = {
    status: false
};

/**
 * reducer 要接受 action 然后进行逻辑处理
 * 判断 发送过来的action 是不是我们需要的
 * 如果是我们需要的，就应该 return 一个新的state
 * @param {*} state 
 * @param {*} action 
 */

const reducer = (state = initState, action) => {

    switch (action.type) {
        case 'send_love':
            return {
                status: true
            };
        case 'stop_love':
            return {
                status: false
            };
        default:
            return state;
    }
};

module.exports = { reducer }