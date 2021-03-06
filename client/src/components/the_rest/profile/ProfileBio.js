import React from 'react';

const fillSkillList = skills => {
    const skillsArray = [];

    skills.forEach(skill => {
        skillsArray.push(
            <div class="p-3">
                <i class="fa fa-check"></i> {skill}
            </div>
        )
    })
    return skillsArray;
}

const ProfileBio = props => {
    const {profile} = props;

    const body = (
        <div class="card card-body bg-light mb-3">
                <h3 class="text-center" style={{color: '#297c6c'}}>{profile.user.name}'s Bio</h3>
                {profile.bio ? <p class='lead'>{profile.bio}</p> : <p class='lead text-center'>No content to show</p>}
                <hr />

                <h3 class="text-center" style={{color: '#297c6c'}}>Skill Set</h3>

                    <div class='d-flex justify-content-around overflow-auto'>
                        {fillSkillList(profile.skills)}
                    </div>

        </div>
    );

    return (
                <div class="row">
                    <div class="col-md-12">
                        {body}
                    </div>
                </div>
    );
};

export default ProfileBio;
