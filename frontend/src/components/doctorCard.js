import Link from 'next/link';

const DoctorCard = ({ doctor }) => {
  const { name, specialization, availability, image } = doctor;

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={image} alt={name} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text"><strong>Specialization:</strong> {specialization}</p>
          <p className="card-text"><strong>Availability:</strong> {availability}</p>
          <Link href={`/doctor/${doctor.id}`} className="btn btn-primary mt-2">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
