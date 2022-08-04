import React from "react";

const content ={
    description : "Copyright © Your Website 2022"
}

const Footers = () => {
    return (
        <div className="text-muted py-5">
            <div className="text-center p-3 fixed-bottom bg-dark">
                <p className="text-white">{content.description}</p>
            </div>    
        </div>
    );
}

export default Footers;