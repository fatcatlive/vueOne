export default{
    gethome(state,data){
        state.home=data;
        console.log(data)
    },
    getCommit(state,data){
        state.homecommit1=data;
        console.log(data);
    },
    gethomedetail(state,data){
        state.homedetail=data;
        console.log(data)
        var [a]=data;
        state.homedetails=a;
    },
    getmytuwen(state,data){
        state.mytuwendata=data;
        console.log(data);
    },
    mytuwendelete(state,data){
        state.mytuwendata=data;
        console.log(data);
    },
    getallbanner(state,data){
        state.allbanner=data;
        console.log(data)
    },
    getallcontent(state,data){
        state.allcontent=data
        console.log(data)
    },
    addtocommit(state,data){
        state.homecommit1=data;
        console.log(data)
    },
    addpraisenum(state,data){
        state.homecommit1=data;
    }


}