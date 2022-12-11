import React from 'react';
import ContactMe from '../ContactMe/ContactMe';
import FindInformation from '../FindInformation/FindInformation';
import FontPage from '../FontPage/FontPage';
import Myself from '../Myself/Myself';


const Home = () => {
    return (
       <div>
        <FontPage></FontPage>
        <FindInformation></FindInformation>
        <Myself></Myself>
       <ContactMe></ContactMe>

       </div>
    );
};

export default Home;