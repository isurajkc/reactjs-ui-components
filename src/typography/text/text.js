import React, {PropTypes} from 'react';
import cn from "classnames";
import style from "./text.css";

const Text = ({children}) => {
    return (
        <p className={cn(style.text)}>{children}</p>
    );
};

export default Text;