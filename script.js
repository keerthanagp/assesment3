 //for in

let colors=["red","blue","green","orange"];
for(let key in colors){
    console.log(colors[key]);
}
//for of
for(let color of colors){
    console.log(color)
}

//for each
colors.forEach(element => {
    console.log(element)
});

//for
for(let i=0; i<colors.length; i++){
    console.log(colors[i])
}




///////Own JSON Resume///////////////

let MyResume=[
    Name = "Keerthana",
    Address = "No-E115 Kamaraj Nagar, 13thStreet, Thiruvanmiyur, Chennai-41",
    EmailID = "keerthanaperumal1515@gmail.com",
    MobileNumber = 7305357552,
    CarrerObjectives="To Build carrer in a growing Organisation, Where I can get the opportunity to prove my ability by accepting challenges, fullfilling the organizational goal and climb the career ladder through continue learning and commitments",
    AcademicQualification =[{
        Course:"B.com",
        Institute:"Sathyabama University",
        Year: "2016- 19",
        Percentage: 75
    },
    {
        Course: "HigherSecondary", 
        Institute : "Nellai Nadar Matric Hr Sec School",
        Year : "2016",
        Percentage : 80
    },
    {
        Course : "SSLC",
        Institute : "Nellai Nadar Matric Hr Sec School",
        Year : "2014",
        Percentage :85
    }],
    TechnicalSkill =[
        "Computer basic", 
        "MS office(word and Excel)",
        "tally ERP9",
        "Good Working knowledge in internet"

    ],
    ExtraCurricularActivity=[
    " Achieved the certificate of Guiness World record for Maruvom maartuvom naan oru vevasayi",
    "Volunteer in helping our specially able student(Deaf and dumb)",
  ],
  ProfessionalSkill = [
    "GoodCommunicationSkills", "PositiveAttitude",
  ],
  OrganisationalSkill = [
    "leaderShip",
    "QuickDecisionMaking",
    "TimeManagement",
  ],
  WorkExperience=[
    "Worked as a Process Associate in 'Altrust Customer Management' for 8 months during the period of 11 July to 28Feb 2020",
    "Working as a Process Associate in 'Capgemini Technology' for 2years"
  ],
  MyPersonalDetails={
    Name: "Keerthana P",
    FatherName : "Perumal G",
    DOB : "28-01-1999",
    Gender : "Female",
    Nationality : "Indian",
    MaritalStatus : "Single",
    LanguageKnown : "Tamil and English",
    MotherTongue : "Tamil"
  },
 
] 

for(let i=0; i<MyResume.length; i++){
console.log(MyResume[i]);
}
console.table(AcademicQualification)

let lastLine=[
Declaration= "I have declared that the above information are true to my knowledge"
]
console.log(lastLine)
let datesandtime=[{
    Date:"30-01-23",
    Place : "Chennai"
}]
console.log(datesandtime)

