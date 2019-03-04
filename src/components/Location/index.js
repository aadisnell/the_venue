import React from 'react';

const Location = (props) => {
    return (
      <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126801.8325876242!2d-1.7094532489191612!3d6.701622614483054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbebb4b5f69744773!2sAbuakwa!5e0!3m2!1sen!2sgh!4v1551677966219"
             width="100%" height="500px" 
             frameBorder="0"  
             allowFullscreen>
             </iframe>

             <div className="location_tag">
                <div>Location</div>
             </div>
      </div>
    );
};

export default Location;