// 1.import area

const express = require('express')
const app = express()



app.get('/',function(req,res){
    res.send("hello world")

})

app.get('/s',function(req,res){
    res.send("good morning")

})
app.get('/A',function(req,res){
    res.send("shekhar rajesh shinde")
}

)
app.get('/B',function(req,res){
    res.send("Baramati")
}

)
app.get('/c',function(req,res){
    res.send("Chennai")

}

)
app.get('/D',function(req,res){
res.send("Dombivali")
}
)
app.get('/E',function(req,res){
    res.send("Elephont")

}

)
app.get('/F',function(req,res){
    res.send("Fattepur")
})
app.get('/g',function(req,res){
    res.send("Gorakhpur")
})




app.listen(4000);