//higher order component (HOC) - A component(HOC) that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is:{props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return(props) => (   //returning a hoc
        <div>
           {props.isAdmin && <p>this is private info</p>}
            <WrappedComponent {...props} /> //these props will go to Info component
        </div>
    );  
};
const requireAuthentication = (WrappedComponent) => {
    return(props) => (
        <div>
             { props.isAuthenticated? <WrappedComponent {...props} />:<p>log in</p> }
             
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
//ReactDOM.render(<AdminInfo isAdmin={!false} info="there r the details" />,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={!false} info="there r the details" />,document.getElementById('app'));