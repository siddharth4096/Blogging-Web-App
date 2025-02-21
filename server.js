const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
let methodOverride = require('method-override')
const multer = require("multer");


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));   //accessible in outside the directory 
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"views")));
app.use(methodOverride('_method'));
app.use("/photos", express.static("photos"));




const storage = multer.diskStorage({       //for storage in photos directories 
  destination: "./photos/",
  filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage: storage });




let posts=[

  {
      id : uuidv4(),
      img : "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title : "My Travels",
      content : "Traveling comes with its own set of challenges. I often struggle to balance a full-time job and finances to keep traveling. Though the idea of being a digital nomad or hitchhiking around the world entices me now and then,  ",
  },

  {
      id : uuidv4(),
      img : "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title : " My First Photo",
      content : " A thing that you see in my pictures is that I was not afraid to fall in love with these people. It is more important to click with people than to click the shutter.",
  },

  {
      id : uuidv4(),
      img : "https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title : " Road Photo",
      content : "The open road, a path to somewhere, or maybe just a path itself.",
  }
];



app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});


app.get('/myblog', function (req, res) {
  res.render('index.ejs',{posts});
})


app.get("/myblog/new", (req, res) => {
  res.render("newpost.ejs");
});


app.get("/myblog/logout", (req, res) => {
  res.render("logout_register.ejs");
});


app.get("/myblog/edit/:id", (req, res) => {
  let {id} = req.params;
  let post=posts.find(p=>p.id===id);
  res.render("editpost.ejs", {post});
  // console.log(post);
  
});


app.post("/myblog/new", upload.single("image"), (req, res) => {
  if (!req.file) {
      return res.json({ success: false, message: "Image upload failed!" });
  }

  const img = `/photos/${req.file.filename}`;
  console.log(img);
  const { title, content } = req.body;

  // Store post data
  let id=uuidv4();
  const newPost = { id,img,title,content };
  posts.push(newPost);

  return res.redirect("/myblog");

});


app.post("/myblog/login", (req, res) => {
  res.redirect("/myblog");
});


app.post("/myblog/register",(req,res)=>{
  res.redirect("/myblog");

});

app.patch("/posts/edit/:id",(req,res)=>{
  let {id} = req.params;
  let post=posts.find(p=>p.id===id);

  

  
  let newTitle=req.body.title;
  post.title=newTitle;
  let newContent=req.body.content;
  post.content=newContent;
  
  res.redirect("/myblog");
});


app.delete("/myblog/delete/:id",(req,res)=>{
  let {id}=req.params;
  posts=posts.filter(p=>p.id!==id);
  res.redirect("/myblog");

});
