import Link from 'next/link';
const DoctorCard = ({doctor}) =>{
    const {name, specialization,availability, image} = doctor;
    return(
        <div className="doctorCardContainer">
            <img src={image} alt={name} className="doctorImage" />
            <h2 className="doctorName">{name}</h2>
            <p className="doctorSpecialization">specialization: {specialization}</p>
            <p className="doctorAvailability">Availability: {availability}</p>
            <Link href={`/doctor/${doctor.id}`}>
        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          View Details
        </button>
      </Link>
        </div>
    )

}

export default DoctorCard;