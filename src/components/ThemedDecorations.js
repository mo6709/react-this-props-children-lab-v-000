import React from 'react';

class ThemedDecorations extends React.Component {

    render(){
        //get the children and map them with a calback function that singn in to them a className with the them.
        const chikldrnWithExtrClassNameProp = React.Children.map(this.props.children,
            (child) => {
                return React.cloneElement(child, {
                    //1)how to assign a className to each child?
                    //2)how to get the prop theme from the componnet  
                    className: this.props.theme
                });
            } 
        );
        return(
            <div className="decoration">
                {chikldrnWithExtrClassNameProp}
            </div>
        );
    }
}

export default ThemedDecorations; 