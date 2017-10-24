import React, {PropTypes } from "react";
import style from "./container.css";

const Container = ({children,width}) => {

    const containerStyle = {
        maxWidth: width,

    }

    return <div  style={containerStyle} className={style.container}>
        {children}
    </div>
};

Container.propTypes = {
    width: PropTypes.number
}

Container.defaultProps = {
    width: 1300
}

export default Container;
