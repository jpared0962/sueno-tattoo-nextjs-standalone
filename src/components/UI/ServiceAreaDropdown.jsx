import React, { useState } from 'react';
import '../../styles/ServiceAreaDropdown.css';

const ServiceAreaDropdown = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const primaryArea = "Laurel, MD";
  const serviceAreas = [
    "Beltsville, MD",
    "College Park, MD", 
    "Greenbelt, MD",
    "Hyattsville, MD",
    "Riverdale Park, MD",
    "New Carrollton, MD",
    "Bladensburg, MD",
    "Cheverly, MD",
    "Mount Rainier, MD",
    "Cottage City, MD",
    "Berwyn Heights, MD",
    "University Park, MD",
    "Takoma Park, MD",
    "Silver Spring, MD",
    "Bowie, MD",
    "Annapolis Junction, MD",
    "Savage, MD",
    "Jessup, MD",
    "Elkridge, MD",
    "Columbia, MD",
    "Burtonsville, MD",
    "Fulton, MD",
    "Highland, MD",
    "Clarksville, MD",
    "Ellicott City, MD",
    "Catonsville, MD",
    "Arbutus, MD",
    "Halethorpe, MD",
    "Linthicum Heights, MD",
    "Glen Burnie, MD",
    "Severn, MD",
    "Odenton, MD",
    "Gambrills, MD",
    "Crofton, MD",
    "Millersville, MD",
    "Severna Park, MD",
    "Pasadena, MD",
    "Glen Burnie, MD",
    "Baltimore, MD",
    "Parkville, MD",
    "Towson, MD",
    "Cockeysville, MD",
    "Hunt Valley, MD",
    "Lutherville, MD",
    "Timonium, MD",
    "Rosedale, MD",
    "Essex, MD",
    "Middle River, MD",
    "White Marsh, MD",
    "Dundalk, MD",
    "Washington, DC",
    "Arlington, VA",
    "Alexandria, VA",
    "Fairfax, VA",
    "Falls Church, VA",
    "Annandale, VA",
    "Springfield, VA",
    "Burke, VA",
    "Lorton, VA",
    "Woodbridge, VA",
    "Dale City, VA",
    "Manassas, VA",
    "Centreville, VA",
    "Chantilly, VA",
    "Herndon, VA",
    "Reston, VA",
    "Tysons Corner, VA",
    "McLean, VA",
    "Great Falls, VA",
    "Vienna, VA",
    "Oakton, VA",
    "Prince Georges County, MD",
    "Montgomery County, MD",
    "Anne Arundel County, MD",
    "Baltimore County, MD",
    "Howard County, MD",
    "Washington DC Metro Area",
    "Northern Virginia",
    "Maryland DMV Area"
  ];

  return (
    <div className={`service-area-dropdown ${className}`}>
      <span className="primary-location">{primaryArea}</span>
      <button 
        className="service-area-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="View all service areas"
      >
        & surrounding areas 
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className="service-area-list">
          <div className="service-area-header">
            <strong>We proudly serve these areas:</strong>
          </div>
          <div className="service-area-list-container">
            {serviceAreas.map((area, index) => (
              <div key={index} className="service-area-item">
                <span className="location-pin">📍</span>
                {area}
              </div>
            ))}
          </div>
          <div className="service-area-footer">
            Don't see your city? <a href="/contact" className="contact-link">Contact us!</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceAreaDropdown;
