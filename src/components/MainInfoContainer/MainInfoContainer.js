import React from 'react';

const MainInfoContainer = ({children, className}) => {
    return <header className={className}>{children}</header>;
};

MainInfoContainer.defaultProps = {
    className: 'defaultHero'
};

export default MainInfoContainer;
