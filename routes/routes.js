const appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });
    app.post("/gettime",function(req,res){
        
        const {username}=req.body;
        console.log(username);
        let datetime=new Date;
        res.json({ time: datetime,username:username});
    })
  }
  
module.exports = appRouter;