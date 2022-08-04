import React from "react";

const jumbo = {
    title: "A Warm Welcome!",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.",
    buttonj: "Call to action!"
}

//create your first component
const Jumbotron = () => {
	return (
        <div className="bg-light p-5 rounded">
            <h1>{jumbo.title}</h1>
            <p>{jumbo.description}</p>
            <a class="btn btn-lg btn-primary" href="#" role="button">{jumbo.buttonj}</a>
        </div>
	);
};


export default Jumbotron;