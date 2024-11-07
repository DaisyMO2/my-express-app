const my_bibi = request('../models/my_bibi');

//function getting all students 
const get_students =() =>{
    console.log("getting here:",my_bibi);
    return my_bibi.students;
}

//this index is getting student by id
const get_student_by_id = (resquest) =>{

    for(i = 1; i < 5; i++){

        if(request.params.studentid == my_bibi.students[i].id){

            return students[i];
        }
        console.log(students[i]);
    }
    return "nothing";
};

module.exports = {get_students, get_student_by_id, get_student};