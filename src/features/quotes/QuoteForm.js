import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addQuote } from "./quotesSlice";

function QuoteForm() {
  const [formData, setFormData] = useState({
    // set up a controlled form with internal state
    // look at the form to determine what keys need to go here
    author: "",
    content: "",
  });

  //You will make a dispatch action to Redux using an action you will create called addQuote() that will take a quote as an argument and start the reducer process.
  const dispatch = useDispatch();

  function handleChange(e) {
    // Handle Updating Component State
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    // Handle Form Submit event default

    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state

    e.preventDefault();
    dispatch(
      addQuote({
        ...formData,
        id: uuid(),
        votes: 0,
      })
    );
    setFormData({
      author: "",
      content: "",
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
              <form className="form-horizontal">
                <div className="form-group">
                  <label htmlFor="content" className="col-md-4 control-label">
                    Quote
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      id="content"
                      value={formData.content}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="author" className="col-md-4 control-label">
                    Author
                  </label>
                  <div className="col-md-5">
                    <input
                      className="form-control"
                      type="text"
                      id="author"
                      value={formData.author}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-6 col-md-offset-4">
                    <button type="submit" className="btn btn-default">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;
