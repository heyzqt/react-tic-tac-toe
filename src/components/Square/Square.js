import React from 'react';
import "./Square.css";

// 井字棋的方格
// 组件 1.只有1个render方法 2.不包含state 此时就可以将组件写成函数组件
function Square(props){
    return (
      <button className="square" onClick={() => props.onClick()}>
        {props.value}
      </button>
    );
}

export default Square;
