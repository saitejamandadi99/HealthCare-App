const DoctorCard = ({doctor}) =>{
    const {name, specilization,availability, image} = doctor;
    return(
        <div className="doctorCardContainer">
            <img src={image} alt={name} className="doctorImage" />
            <h2 className="doctorName">{name}</h2>
            <p className="doctorSpecialization">Specialization: {specilization}</p>
            <p className="doctorAvailability">Availability: {availability}</p>
            <button className="viewDetailsButton" onClick={() => alert(`Viewing details for ${name}`)}>View Details</button>
        </div>
    )

}

export default DoctorCard;