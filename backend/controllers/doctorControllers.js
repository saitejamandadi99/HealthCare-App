const express = require('express');
const doctors = require('../data/doctors');

const getAllDoctorsList = (req, res) =>{
    const previewDoctors = doctors.map(eachDoctor=>({
        id:eachDoctor.id, 
        name: eachDoctor.name, 
        specialization:eachDoctor.specialization,
    }));
    try {
       return res.status(200).json({message:'Doctors list fetched successfully', doctorsList:previewDoctors}); //200 = success code
    } catch (error) {
       return res.status(500).json({message: 'Internal Server Error'}); //500 = server error code
    }
}

const getDoctorDetails = (req,res) =>{
    const doctorId = req.params.id;
    const doctor = doctors.find(eachDoctor => eachDoctor.id === doctorId);
    try{
        if(!doctor){
            return res.status(404).json({message:'Doctor not found'}) //404 = not found code
        }
        return res.status(200).json({message:'Doctors details fetched successfully', doctorDetails: doctor}); //200 = ok or success code
    }
    catch(error){
       return  res.status(500).json({message: 'Internal Server Error'}); //500 = server error code
    }
}

module.exports = {getAllDoctorsList, getDoctorDetails};
