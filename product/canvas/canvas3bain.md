<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <canvas id="canvas" width="600" height="400"></canvas>
</body>
<script>
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "blue";
    ctx.fillRect(100, 100, 200, 200);
    ctx.globalCompositeOperation = "destination-atop";
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(300, 300, 100, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
</script>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <canvas id="canvas" width="600" height="400"></canvas>
</body>
<script>
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "blue";
    ctx.fillRect(100, 100, 200, 200);
    ctx.globalCompositeOperation = "destination-atop";
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(300, 300, 100, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
</script>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <canvas id="canvas" width="600" height="400"></canvas>
</body>
<script>
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "blue";
    ctx.fillRect(100, 100, 200, 200);
    ctx.globalCompositeOperation = "destination-atop";
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(300, 300, 100, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
</script>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        canvas {
            border: 1px solid #c5aa80;
            background:url("../1.png") no-repeat;
        }
    </style>
</head>
<body>
    <canvas id="canvas" width="600" height="400"></canvas>  
</body>
<script>
    var canvas=document.getElementById("canvas"),
        ctx = canvas.getContext("2d");
        ctx.fillStyle="gray";
        ctx.fillRect(0,0,100,100);  
    canvas.addEventListener("mousedown",function(e){
        canvas.onmousemove=function(e){
        ctx.fillStyle="white";
        ctx.globalCompositeOperation="destination-out";
        ctx.fillRect(e.clientX-canvas.offsetLeft,e.clientY-canvas.offsetTop,10,10);
    } 
    })
    canvas.addEventListener("mouseup",function(){
        canvas.onmousemove=null;
    })
    console.log(window.screen.availWidth,window.screen.width)
</script>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        canvas {
            border: 1px solid #c5aa80;
            background:url("../1.png") no-repeat;
        }
    </style>
</head>
<body>
    <canvas id="canvas" width="600" height="400"></canvas>  
</body>
<script>
    var canvas=document.getElementById("canvas"),
        ctx = canvas.getContext("2d");
        ctx.fillStyle="gray";
        ctx.fillRect(0,0,100,100);  
    canvas.addEventListener("mousedown",function(e){
        canvas.onmousemove=function(e){
        ctx.fillStyle="white";
        ctx.globalCompositeOperation="destination-out";
        ctx.fillRect(e.clientX-canvas.offsetLeft,e.clientY-canvas.offsetTop,10,10);
    } 
    })
    canvas.addEventListener("mouseup",function(){
        canvas.onmousemove=null;
    })
    console.log(window.screen.availWidth,window.screen.width)
</script>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        canvas {
            border: 1px solid #c5aa80;
            background:url("../1.png") no-repeat;
        }
    </style>
</head>
<body>
    <canvas id="canvas" width="600" height="400"></canvas>  
</body>
<script>
    var canvas=document.getElementById("canvas"),
        ctx = canvas.getContext("2d");
        ctx.fillStyle="gray";
        ctx.fillRect(0,0,100,100);  
    canvas.addEventListener("mousedown",function(e){
        canvas.onmousemove=function(e){
        ctx.fillStyle="white";
        ctx.globalCompositeOperation="destination-out";
        ctx.fillRect(e.clientX-canvas.offsetLeft,e.clientY-canvas.offsetTop,10,10);
    } 
    })
    canvas.addEventListener("mouseup",function(){
        canvas.onmousemove=null;
    })
    console.log(window.screen.availWidth,window.screen.width)
</script>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <canvas id="canvas" width="600" height="400"></canvas>
</body>
<script>
    function draw() {
        var ctx = document.getElementById('canvas').getContext('2d');
        ctx.fillRect(0, 0, 150, 150); 
        ctx.save(); 
        ctx.fillStyle = '#09F' ;
        ctx.fillRect(15, 15, 120, 120);    
        ctx.restore(); 
    }
    draw();
</script>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <canvas id="canvas" width="600" height="400"></canvas>
</body>
<script>
    function draw() {
        var ctx = document.getElementById('canvas').getContext('2d');
        ctx.fillRect(0, 0, 150, 150); 
        ctx.save(); 
        ctx.fillStyle = '#09F' ;
        ctx.fillRect(15, 15, 120, 120);    
        ctx.restore(); 
    }
    draw();
</script>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <canvas id="canvas" width="600" height="400"></canvas>
</body>
<script>
    function draw() {
        var ctx = document.getElementById('canvas').getContext('2d');
        ctx.fillRect(0, 0, 150, 150); 
        ctx.save(); 
        ctx.fillStyle = '#09F' ;
        ctx.fillRect(15, 15, 120, 120);    
        ctx.restore(); 
    }
    draw();
</script>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        canvas {
            border: 1px solid #c5aa80;
        }
    </style>
</head>
<body>
    <canvas id="canvas" width="600" height="400"></canvas>
    <script>
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        ctx.save();
        ctx.rotate(0.1);
        ctx.fillStyle = 'pink';
        ctx.fillRect(100, 100, 40, 40);
        ctx.fill();
        ctx.restore();
    </script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        canvas {
            border: 1px solid #c5aa80;
        }
    </style>
</head>
<body>
    <canvas id="canvas" width="600" height="400"></canvas>
    <script>
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        ctx.save();
        ctx.rotate(0.1);
        ctx.fillStyle = 'pink';
        ctx.fillRect(100, 100, 40, 40);
        ctx.fill();
        ctx.restore();
    </script>
</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        canvas {
            border: 1px solid #c5aa80;
        }
    </style>
</head>
<body>
    <canvas id="canvas" width="600" height="400"></canvas>
    <script>
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        ctx.save();
        ctx.rotate(0.1);
        ctx.fillStyle = 'pink';
        ctx.fillRect(100, 100, 40, 40);
        ctx.fill();
        ctx.restore();
    </script>
</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <canvas id="canvas"></canvas>
</body>
<script>
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 600;
    canvas.style.border = "1px solid #000";
    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 100, 100);
    ctx.save();
    ctx.restore();
    ctx.translate(60, 60);
    ctx.scale(2, 2);
    ctx.fillRect(10, 10, 100, 100);
    ctx.restore();
    ctx.translate(50, 120);
    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'purple';
    ctx.moveTo(0, 0);
    ctx.lineTo(400, 0);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 400);
    ctx.stroke();
    ctx.globalAlpha = .3 ;
    ctx.restore();
    ctx.fillRect(10, 10, 40, 40);
</script>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <canvas id="canvas"></canvas>
</body>
<script>
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 600;
    canvas.style.border = "1px solid #000";
    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 100, 100);
    ctx.save();
    ctx.restore();
    ctx.translate(60, 60);
    ctx.scale(2, 2);
    ctx.fillRect(10, 10, 100, 100);
    ctx.restore();
    ctx.translate(50, 120);
    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'purple';
    ctx.moveTo(0, 0);
    ctx.lineTo(400, 0);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 400);
    ctx.stroke();
    ctx.globalAlpha = .3 ;
    ctx.restore();
    ctx.fillRect(10, 10, 40, 40);
</script>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <canvas id="canvas"></canvas>
</body>
<script>
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 600;
    canvas.style.border = "1px solid #000";
    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 100, 100);
    ctx.save();
    ctx.restore();
    ctx.translate(60, 60);
    ctx.scale(2, 2);
    ctx.fillRect(10, 10, 100, 100);
    ctx.restore();
    ctx.translate(50, 120);
    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'purple';
    ctx.moveTo(0, 0);
    ctx.lineTo(400, 0);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 400);
    ctx.stroke();
    ctx.globalAlpha = .3 ;
    ctx.restore();
    ctx.fillRect(10, 10, 40, 40);
</script>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <canvas id="canvas" width="600" height="400"></canvas>
</body>
<script>
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var rad = 0.1;
    setInterval(function() {
        rad += 0.1;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(250, 250);
        ctx.rotate(rad);
        ctx.fillRect(-50, -50, 100, 100);
        ctx.restore();
    }, 30);
</script>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <canvas id="canvas" width="600" height="400"></canvas>
</body>
<script>
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var rad = 0.1;
    setInterval(function() {
        rad += 0.1;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(250, 250);
        ctx.rotate(rad);
        ctx.fillRect(-50, -50, 100, 100);
        ctx.restore();
    }, 30);
</script>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <canvas id="canvas" width="600" height="400"></canvas>
</body>
<script>
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var rad = 0.1;
    setInterval(function() {
        rad += 0.1;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(250, 250);
        ctx.rotate(rad);
        ctx.fillRect(-50, -50, 100, 100);
        ctx.restore();
    }, 30);
</script>
</html>


<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.rawgit.com/konvajs/konva/1.6.3/konva.min.js"></script>
    <meta charset="utf-8">
    <title>Konva Star Demo</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #F0F0F0;
        }
    </style>
</head>
<body>
    <div id="container"></div>
    <script>
        var stage = new Konva.Stage({
            container: 'container',
            width: 300,
            height: 300
        });
        var layer = new Konva.Layer();
        var star = new Konva.Star({
            x: stage.getWidth() / 2,
            y: stage.getHeight() / 2,
            numPoints: 5, 
            innerRadius: 40, 
            outerRadius: 100, 
            fill: 'yellow', 
            stroke: 'red', 
            strokeWidth: 4 
        });
        layer.add(star);
        stage.add(layer);
    </script>
</body>
</html>

<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.rawgit.com/konvajs/konva/1.6.3/konva.min.js"></script>
    <meta charset="utf-8">
    <title>Konva Star Demo</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #F0F0F0;
        }
    </style>
</head>
<body>
    <div id="container"></div>
    <script>
        var stage = new Konva.Stage({
            container: 'container',
            width: 300,
            height: 300
        });
        var layer = new Konva.Layer();
        var star = new Konva.Star({
            x: stage.getWidth() / 2,
            y: stage.getHeight() / 2,
            numPoints: 5, 
            innerRadius: 40, 
            outerRadius: 100, 
            fill: 'yellow', 
            stroke: 'red', 
            strokeWidth: 4 
        });
        layer.add(star);
        stage.add(layer);
    </script>
</body>
</html>


<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.rawgit.com/konvajs/konva/1.6.3/konva.min.js"></script>
    <meta charset="utf-8">
    <title>Konva Star Demo</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #F0F0F0;
        }
    </style>
</head>
<body>
    <div id="container"></div>
    <script>
        var stage = new Konva.Stage({
            container: 'container',
            width: 300,
            height: 300
        });
        var layer = new Konva.Layer();
        var star = new Konva.Star({
            x: stage.getWidth() / 2,
            y: stage.getHeight() / 2,
            numPoints: 5, 
            innerRadius: 40, 
            outerRadius: 100, 
            fill: 'yellow', 
            stroke: 'red', 
            strokeWidth: 4 
        });
        layer.add(star);
        stage.add(layer);
    </script>
</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>拖拽的小星星</title>
    <script src="https://cdn.bootcss.com/konva/1.6.3/konva.min.js"></script>
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #F0F0F0;
        }
    </style>
</head>
<body>
    <div id="container">
    </div>
</body>
<script>
    var width = window.innerWidth;
    var height = window.innerHeight;
    function star() {
        var scale = Math.random();
        var star = new Konva.Star({
            x: Math.random() * stage.getWidth(),
            y: Math.random() * stage.getHeight(),
            numPoints: 5,
            innerRadius: 30,
            outerRadius: 50,
            fill: '#89b717',
            opactiy: .8,
            draggable: true,
            scale: {
                x: scale,
                y: scale
            },
            rotation: Math.random() * 180,
            shadowColor: 'black',
            shadowBlur: 10,
            shadowOffset: {
                x: 5,
                y: 5
            },
            shadowOpacity: 0.6,
            startScale: scale
        })
        layer.add(star);
    }
    var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height
    })
    var layer = new Konva.Layer();
    for (var i = 0; i < 10; i++) {
        star()
    }
    stage.add(layer);
</script>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>拖拽的小星星</title>
    <script src="https://cdn.bootcss.com/konva/1.6.3/konva.min.js"></script>
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #F0F0F0;
        }
    </style>
</head>
<body>
    <div id="container">
    </div>
</body>
<script>
    var width = window.innerWidth;
    var height = window.innerHeight;
    function star() {
        var scale = Math.random();
        var star = new Konva.Star({
            x: Math.random() * stage.getWidth(),
            y: Math.random() * stage.getHeight(),
            numPoints: 5,
            innerRadius: 30,
            outerRadius: 50,
            fill: '#89b717',
            opactiy: .8,
            draggable: true,
            scale: {
                x: scale,
                y: scale
            },
            rotation: Math.random() * 180,
            shadowColor: 'black',
            shadowBlur: 10,
            shadowOffset: {
                x: 5,
                y: 5
            },
            shadowOpacity: 0.6,
            startScale: scale
        })
        layer.add(star);
    }
    var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height
    })
    var layer = new Konva.Layer();
    for (var i = 0; i < 10; i++) {
        star()
    }
    stage.add(layer);
</script>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>拖拽的小星星</title>
    <script src="https://cdn.bootcss.com/konva/1.6.3/konva.min.js"></script>
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #F0F0F0;
        }
    </style>
</head>
<body>
    <div id="container">
    </div>
</body>
<script>
    var width = window.innerWidth;
    var height = window.innerHeight;
    function star() {
        var scale = Math.random();
        var star = new Konva.Star({
            x: Math.random() * stage.getWidth(),
            y: Math.random() * stage.getHeight(),
            numPoints: 5,
            innerRadius: 30,
            outerRadius: 50,
            fill: '#89b717',
            opactiy: .8,
            draggable: true,
            scale: {
                x: scale,
                y: scale
            },
            rotation: Math.random() * 180,
            shadowColor: 'black',
            shadowBlur: 10,
            shadowOffset: {
                x: 5,
                y: 5
            },
            shadowOpacity: 0.6,
            startScale: scale
        })
        layer.add(star);
    }
    var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height
    })
    var layer = new Konva.Layer();
    for (var i = 0; i < 10; i++) {
        star()
    }
    stage.add(layer);
</script>
</html>