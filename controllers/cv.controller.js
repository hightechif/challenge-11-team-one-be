const createCv = (req, res) => {
  const uid = req.user.id
  // const personalData = {
  //   firstName: req.body.firstName,
  //   lastName: req.body.lastName,
  //   email: req.body.email,
  //   phone: req.body.phone,
  //   address: req.body.address,
  //   address2: req.body.address2,
  //   city: req.body.city,
  //   state: req.body.state,
  //   zipCode: req.body.zipCode,
  //   webLinks: req.body.webLinks,
  //   webLinks2: req.body.webLinks2,
    
  //   profSummary: req.body.profSummary,
  //   educationSchool: req.body.educationSchool,
  //   educationDegree:req.body.educationDegree,
  //   educationDesciption: req.body.educationDesciption,
  //   educationStart: req.body.educationStart,
  //   educationTo:req.body.educationTo,

  //   experienceCompany: req.body.experienceCompany,
  //   experiencePosition: req.body.experiencePosition,
  //   experienceDescription:req.body.experienceDescription,
  //   experienceStart: req.body.experienceStart,
  //   experienceTo: req.body.experienceTo,

  //   checkInDate: req.body.checkInDate,
  //   checkOutDate: req.body.checkOutDate,

  // };
  res.status(200).json(req.user.id)
}

module.exports = {
  createCv
};
