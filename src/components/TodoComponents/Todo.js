import React from "react";

const Item = props => {
    return (
        <div onClick={() => props.toggleItem(props.item.id)}  >
        <p>{props.item.name}</p>
        </div>
    );
};

export default Item;