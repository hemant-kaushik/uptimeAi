import React from 'react';

export const Placeholder = ({ icon, title, description }) => {
    return (
        <div className="tab-content-placeholder">
            {icon}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};