import axios from "axios"
axios.defaults.baseURL ="http://60.205.215.60:7777"
// axios.defaults.baseURL ="http://localhost:7777"
export default{
    gethome({commit},url){
        axios.get(url)
            .then(res=>{
                return res.data;
            })
            .then(json=>{
                
               commit("gethome",json)
            })
    },
    getCommit({commit},url){
        axios.get(url)
            .then(res=>{
                return res.data;
            })
            .then(json=>{
                commit("getCommit",json)
            })

    },
    gethomedetail({commit},url){
        axios.get(url)
           .then(res=>{
               return res.data;
           })
           .then(json=>{
               commit("gethomedetail",json)
           })
    },
    getmytuwen({commit},url){
        axios.get(url)
           .then(res=>{
               return res.data;

           })
           .then(json=>{
               commit("getmytuwen",json)
           })
    },
    mytuwendelete({commit},url){
        axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            commit("mytuwendelete",json)
        })
    },
    getallbanner({commit},url){
        axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            commit("getallbanner",json)
        })
    },
    getallcontent({commit},url){
        axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            commit("getallcontent",json)
        })
    },
    addtocommit({commit},url){
        axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            commit("addtocommit",json)
        })
    },
    addpraisenum({commit},url){
        axios.get(url)
          .then(res=>{
              return res.data
          })
          .then(json=>{
              commit("addpraisenum",json)
          })

    }

}