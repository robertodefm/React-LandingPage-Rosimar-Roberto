import React from 'react'

const jumbotron = {
  title:"A Warm Welcome!",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.",
  buttonj: "Call to action!"
}

const Jumbotron = () => {
  return (
    <div className="bg-light p-5 rounded">
      <h1>{jumbotron.title}</h1>
      <p>{jumbotron.description}</p>
      <a href='#' className='btn btn-lg btn-primary' role='button'>{jumbotron.buttonj}</a>

    </div>
  );
};

export default Jumbotron;