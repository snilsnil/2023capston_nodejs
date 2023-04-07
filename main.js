const port=3000,
http=require("http"),
httpStatus=require("http-status-codes"),
router=require("./router"),
contentTypes=require("./content-types"),
utils=require("./utils");






// router about html

router.get("/", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/index.html", res)
});

router.get("/pc", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/pc.html", res)
});

router.get("/pc/LOZBOTW", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/pc/LOZBOTW.html", res)
});

router.get("/pc/LOZSS", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/pc/LOZSS.html", res)
});

router.get("/pc/supermario", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/pc/supermario.html", res)
});

router.get("/xbox", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/xbox.html", res)
});

router.get("/xbox/LOZBOTW", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/xbox/LOZBOTW.html", res)
});

router.get("/xbox/LOZSS", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/xbox/LOZSS.html", res)
});

router.get("/xbox/supermario", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/xbox/supermario.html", res)
});

router.get("/ps", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/ps.html", res)
});

router.get("/ps/LOZBOTW", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/ps/LOZBOTW.html", res)
});

router.get("/ps/LOZSS", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/ps/LOZSS.html", res)
});

router.get("/ps/supermario", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/ps/supermario.html", res)
});

router.get("/nintendo", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/nintendo.html", res)
});

router.get("/nintendo/LOZBOTW", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/nintendo/LOZBOTW.html", res)
});

router.get("/nintendo/LOZSS", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/nintendo/LOZSS.html", res)
});

router.get("/nintendo/supermario", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/nintendo/supermario.html", res)
});

router.get("/loginform", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/loginform.html", res)
});

router.get("/signup", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/signup.html", res)
});

router.get("/findidpassword", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/findidpassword.html", res)
});








// router about image

router.get("/logo.png", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("public/img/logo.png", res)
});

router.get("/LOZBOTW.png", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("public/img/main/LOZBOTW.png", res)
});

router.get("/LOZSS.png", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("public/img/main/LOZSS.png", res)
});

router.get("/supermario.png", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("public/img/main/supermario.png", res)
});








// router about video

router.get("/LOZBOTW.mp4", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.mp4);
    utils.getFile("public/video/LOZBOTW.mp4", res)
});

router.get("/LOZSS.mp4", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.mp4);
    utils.getFile("public/video/LOZSS.mp4", res)
});

router.get("/supermario.mp4", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.mp4);
    utils.getFile("public/video/supermario.mp4", res)
});







// router about css

router.get("/confetti_cuisine.css", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/confetti_cuisine.css", res)
});

router.get("/signup.css", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/signup.css", res)
});

router.get("/gm_gal.css", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/gm_gal.css", res)
});






// router about js

router.get("/index.js", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.js);
    utils.getFile("public/js/index.js", res)
});

router.get("/index2.js", (req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.js);
    utils.getFile("public/js/index2.js", res)
});

http.createServer(router.handle).listen(port);
console.log(`The server has started and is listening on port number: ${port}`);