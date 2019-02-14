import React from 'react';

import Navbar_secondary from './Navbar_secondary';
import Footer_main from './Footer_main';

class AddEducation extends React.Component {
    render() {
        return (
            <div class='main_wrapper'>
                <Navbar_secondary/>

                <div class="section add-experience">
                    <div class="container">
                    <div class="row">
                        <div class="col-md-8 mt-4 mr-auto mb-auto ml-auto">
                            <a href="Dashboard" class="btn btn-light">
                                Go Back
                            </a>
                            <h1 class="display-4 text-center">Add Your Experience</h1>
                            <p class="lead text-center">Add any developer/programming positions that you have had in the past</p>
                            <small class="d-block pb-3">* = required field</small>
                            <form action="add-education.html">
                                <div class="form-group">
                                <input type="text" class="form-control form-control-lg" placeholder="* Job Title" name="title" required />
                                </div>
                                <div class="form-group">
                                <input type="text" class="form-control form-control-lg" placeholder="* Company" name="company" required />
                                </div>
                                <div class="form-group">
                                <input type="text" class="form-control form-control-lg" placeholder="Location" name="location" />
                                </div>
                                <h6>From Date</h6>
                                <div class="form-group">
                                <input type="date" class="form-control form-control-lg" name="from" />
                                </div>
                                <h6>To Date</h6>
                                <div class="form-group">
                                <input type="date" class="form-control form-control-lg" name="to" />
                                </div>
                                <div class="form-check mb-4">
                                <input class="form-check-input" type="checkbox" name="current" value="" id="current" />
                                <label class="form-check-label" for="current">
                                    Current Job
                                </label>
                                </div>
                                <div class="form-group">
                                <textarea class="form-control form-control-lg" placeholder="Job Description" name="description"></textarea>
                                <small class="form-text text-muted">Some of your responsabilities, etc</small>
                                </div>
                                <button type="submit" class="mt-2 btn main_color white_text">Submit</button>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>

                <Footer_main/>
            </div>
        )
    }
}

export default AddEducation;