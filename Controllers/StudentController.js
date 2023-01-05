
const Student= require("../Models/StudentModel")

class STUDENT {

  createStudent = async (req) => {

    let student= req
    console.log(student)
    try {
      const res= await new Student(student).save();
      return res;
    } catch (error) {
       throw new Error(error);
  }
  };
  


  updateUser =  (req) => {
    let data= req
    console.log(data)
    try {
      return User.findByIdAndUpdate(data._id, data.user, {
    new: true,
  })
    .then((user) => {
        console.log("USER SUCCESS", user)
      return user;
    })
    .catch((err) => {
      console.log("ERROR", err)
      return false;
    });

    
    } catch (error) {
       throw new Error(error);
  }
  };
  
  
  deleteStudent =  (req) => {
    let data= req
    console.log(data)
    try {
      return Student.remove({_id: data._id })
    .then((student) => {
      console.log("USER SUCCESS", student)
      return student;
    })
    .catch((err) => {
      console.log("ERROR", err)
      return false;
    });


    } catch (error) {
       throw new Error(error);
  }
  };

  

}

module.exports = new STUDENT();
