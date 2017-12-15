

var date=new Date();

 var year=date.getFullYear();
var  month=date.getMonth()+1;
 var day=date.getDate();

export default{
    footList:[
        {name:"home",txt:"ONE",icon:"&#xe63b;",path:"/index/home"},
        {name:"all",txt:"ALL",icon:"&#xe629;",path:"/index/all"},
        {name:"my",txt:"ME",icon:"&#xe604;",path:"/index/my"},
    ],
    year:year,
    month:month,
    day:day,
    home:[],
    homecommit1:[],
    homedetail:"",
    homedetails:"",
    username:localStorage.username,
    mytuwendata:[],
    allbanner:[],
    allcontent:[],
    close:true,
    result1:""

}