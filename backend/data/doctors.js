const doctors = [
  {
    id: '1',
    name: 'Dr. Priya Sharma',
    specialization: 'Cardiologist',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    availability: 'Available Today',
    schedule: [
      { day: 'Monday', time: '10:00 AM - 2:00 PM' },
      { day: 'Wednesday', time: '1:00 PM - 5:00 PM' }
    ]
  },
  {
    id: '2',
    name: 'Dr. Arjun Mehta',
    specialization: 'Dermatologist',
    image: 'https://randomuser.me/api/portraits/men/36.jpg',
    availability: 'Fully Booked',
    schedule: [
      { day: 'Tuesday', time: '11:00 AM - 3:00 PM' },
      { day: 'Thursday', time: '2:00 PM - 6:00 PM' }
    ]
  },
  {
    id: '3',
    name: 'Dr. Sneha Kapoor',
    specialization: 'Pediatrician',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    availability: 'Available Today',
    schedule: [
      { day: 'Monday', time: '9:00 AM - 12:00 PM' },
      { day: 'Friday', time: '2:00 PM - 5:00 PM' }
    ]
  },
  {
    id: '4',
    name: 'Dr. Rohit Verma',
    specialization: 'Orthopedic Surgeon',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
    availability: 'On Leave',
    schedule: []
  },
  {
    id: '5',
    name: 'Dr. Anjali Menon',
    specialization: 'Neurologist',
    image: 'https://randomuser.me/api/portraits/women/72.jpg',
    availability: 'Available Today',
    schedule: [
      { day: 'Tuesday', time: '10:00 AM - 1:00 PM' },
      { day: 'Thursday', time: '3:00 PM - 6:00 PM' }
    ]
  },
  {
    id: '6',
    name: 'Dr. Karan Batra',
    specialization: 'ENT Specialist',
    image: 'https://randomuser.me/api/portraits/men/60.jpg',
    availability: 'Fully Booked',
    schedule: [
      { day: 'Monday', time: '1:00 PM - 4:00 PM' },
      { day: 'Wednesday', time: '10:00 AM - 12:00 PM' }
    ]
  },
  {
    id: '7',
    name: 'Dr. Meera Joshi',
    specialization: 'Gynecologist',
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
    availability: 'Available Today',
    schedule: [
      { day: 'Wednesday', time: '11:00 AM - 3:00 PM' },
      { day: 'Friday', time: '2:00 PM - 6:00 PM' }
    ]
  },
  {
    id: '8',
    name: 'Dr. Sameer Khan',
    specialization: 'Cardiologist',
    image: 'https://randomuser.me/api/portraits/men/74.jpg',
    availability: 'Available Today',
    schedule: [
      { day: 'Tuesday', time: '9:00 AM - 1:00 PM' },
      { day: 'Thursday', time: '2:00 PM - 5:00 PM' }
    ]
  },
  {
    id: '9',
    name: 'Dr. Neha Patil',
    specialization: 'Psychiatrist',
    image: 'https://randomuser.me/api/portraits/women/85.jpg',
    availability: 'On Leave',
    schedule: []
  },
  {
    id: '10',
    name: 'Dr. Raghav Reddy',
    specialization: 'General Physician',
    image: 'https://randomuser.me/api/portraits/men/83.jpg',
    availability: 'Available Today',
    schedule: [
      { day: 'Monday', time: '9:00 AM - 11:00 AM' },
      { day: 'Friday', time: '3:00 PM - 5:00 PM' }
    ]
  }
];

module.exports = doctors;
