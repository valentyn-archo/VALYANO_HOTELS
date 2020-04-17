import React from 'react';
import {Link} from 'react-router-dom';
import MainInfoContainer from '../components/MainInfoContainer/MainInfoContainer';
import Banner from '../components/Banner/Banner';

const Error = () => {
    return (
        <MainInfoContainer>
            <Banner title="404" subtitle="Page Not Found">
                <Link to="/" className="btn-primary">
                    Return Home
                </Link>
            </Banner>
        </MainInfoContainer>
    );
};

export default Error;
