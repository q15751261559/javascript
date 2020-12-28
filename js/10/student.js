export class student{
  constructor(name,id) {
    this.name=name;
    this.id=id;
  }
  toString(){
    return "学生姓名:"+this.name+" 学生学号:"+this.id;
  }
}
