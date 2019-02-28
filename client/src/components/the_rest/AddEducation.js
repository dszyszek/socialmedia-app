import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Navbar_secondary from './Navbar_secondary';
import Footer_main from './Footer_main';
import TextareaComponent from '../common/TextareaComponent';
import {getCurrentProfile, setEducation} from '../../actions/profileActions';

class AddEducation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            school: '',
            degree: '',
            fieldofstudy: '',
            from: '',
            to: '',
            current: '',
            description: '',
            errors: {}
        };

        this.changeValueOfInput = this.changeValueOfInput.bind(this);
        this.submitEducation = this.submitEducation.bind(this);
    }

    componentWillMount() {
        this.props.getCurrentProfile();
    }

    changeValueOfInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitEducation(e) {
        e.preventDefault();
        this.props.setEducation(this.state);
    }

    render() {
        const {errors} = this.state;

        return (
            <div class='main_wrapper'>
                <Navbar_secondary/>

                <div class="add-education">
                    <div class="container">
                    <div class="row">
                        <div class="col-md-8 mt-4 mr-auto mb-auto ml-auto">
                        <Link to="Dashboard" class="btn btn-light">
                            Go Back
                        </Link>
                        <h1 class="display-4 text-center">Add Your Education</h1>
                        <p class="lead text-center">Add any school, bootcamp, etc that you have attended</p>
                        <small class="d-block pb-3">* = required field</small>
                        <form action="login.html">

                            <div class="form-group">
                            <input type="text" class="form-control form-control-lg" placeholder="* School Or Bootcamp" name="school" onChange={this.changeValueOfInput} required />
                            </div>

                            <div class="form-group">
                            <input type="text" class="form-control form-control-lg" placeholder="* Degree Or Certificate" name="degree" onChange={this.changeValueOfInput} required />
                            </div>

                            <div class="form-group">
                            <input type="text" class="form-control form-control-lg" placeholder="Field Of Study" name="fieldofstudy" onChange={this.changeValueOfInput} />
                            </div>

                            <h6>From Date</h6>

                            <div class="form-group">
                            <input type="date" class="form-control form-control-lg" name="from" onChange={this.changeValueOfInput} />
                            </div>

                            <h6>To Date</h6>

                            <div class="form-group">
                            <input type="date" class="form-control form-control-lg" name="to" onChange={this.changeValueOfInput} />
                            </div>

                            <div class="form-check mb-4">
                            <input class="form-check-input" type="checkbox" name="current" value="" id="current" onChange={this.changeValueOfInput} />
                            <label class="form-check-label" for="current">
                                Current Job
                            </label>
                            </div>

                            <TextareaComponent
                                info="Tell us about your experience and what you learned" 
                                aria_describe='descriptionInfo' 
                                name='description' 
                                placeholder={'Program Description...'} 
                                value={this.state.description} 
                                onChange={this.changeValueOfInput}  
                                error={errors.description}
                            />

                            <button type="submit" class="mt-2 btn main_color white_text" onClick={this.submitEducation}>Submit</button>

                        </form>
                        </div>
                    </div>
                    </div>
                </div>

                <Footer_main/>
            </div>
        );
    }
}

AddEducation.propTypes = {
    errors: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps =  state => ({
    errors: state.errors,
    profile: state.profile
});

export default connect(mapStateToProps, {getCurrentProfile, setEducation})(AddEducation);