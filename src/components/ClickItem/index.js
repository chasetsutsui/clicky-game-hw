
import React from "react";

function ClickItem(props) {
    return (
        <div
            role="img"
            aria-label="click item"
            onClick={() => props.handleClick(props.id)}
        />
    );
}

export default ClickItem;