import {student} from "./student.js";
export let Class={
  studentList:[new student("石振宇","2002922215")]
}
function addStudent(student){
  Class.studentList.push(student)
}
function selectStudent(studentId){
  for (let i=0;i<Class.studentList.length;i++)
  {
    if (Class.studentList[i].id===studentId)
    {
      alert(Class.studentList[i].toString())
    }
    if (i === Class.studentList.length - 1&&Class.studentList[i].id!==studentId)
    {
      alert("未查找到")
    }
  }
}
function delStudent(studentId){
  for (let i=0;i<Class.studentList.length;i++)
  {
    if (Class.studentList[i].id===studentId)
    {
      Class.studentList.splice(i,1)
      alert("删除成功")
      break
    }
    if (i === Class.studentList.length - 1&&Class.studentList[i].id!==studentId)
    {
      alert("未查找到")
    }
  }
}
export {addStudent,delStudent,selectStudent}
