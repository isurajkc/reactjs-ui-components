import React, {PropTypes} from 'react';
import cn from "classnames";
import style from "./title.css";

const Title = ({children, size, uppercase, pageTitle, light}) => {

    const themeClass = {
        [style[light]]: !!light,
        [style[uppercase]]: !!uppercase
    };

    if (pageTitle) 
        return <h1 className={cn(style.title,light ? style.light : "",uppercase ? style.uppercase : "")}>{children}</h1>
    else 
        return <h2>{children}</h2>
};

Title.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.string,
    uppercase: PropTypes.boolean,
    pageTitle: PropTypes.boolean,
    light: PropTypes.boolean
}

export default Title;