function json(a)
{
    for(var a in person)
    {
      console.log(a  + "  :  " + person[a]);
    }
}


var person={
    "firstName"       :  "Swathi",
    "lastName"        :  "Muneeswaran",
    "dateOfBirth"     :  "25/05/2002",
    "gender"          :  "Female",
    "Country"         :  "India",
    "Phone Number"    :  "9344527223",
    "mail"            :  "swathirajan255@gmail.com",
    "State"           :  "TamilNadu",
    "Qualification"   :  "B.E",
    "Department"      :  "Electronics and Communication Engineering",
    "year"            :  "2019 to 2023",
    "CGPA"            :  "7.8",
    "CollegeName"     :  "Kongu Engineering College",
    "Projects"        :  "3 projects completed",
    "HSC School Name" :  "Vidya Vikashni Matric Higher Secondary School",
    "12th Mark"       :  "444",
    "Marks in %"      :  "96%",
    "12th Group"      :  "Bio-maths",
    "year of 12th"    :  "2019",
    "SSLC School Name":  "Vidya Vikashni Matric Higher Secondary School",
    "10th Mark"       :  "483",
    "Marks in %"      :  "73%",
    "10th Group"      :  "Science",
    "year of 10th"    :  "2017",
    "Skills"          :  "Javascript",
    "Certification"   :  "GUVI-FULLSTACK  (yet to certified)",
    "Soft Skill"      :  "Multitasking, Team Player",

}

json(person);