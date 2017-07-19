import express from 'express';
var path = require('path');
var open = require('open');
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get("/",function(req,res){
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.get('/users',function(req,res){
  res.json(
    [
      {"id": 1,"firstName":"Vishal","lastName":"Pallerla","email":"vpallerla@uh.edu"},
      {"id": 2,"firstName":"Akshay","lastName":"Pallerla","email":"apallerla@uh.edu"},
      {"id": 3,"firstName":"Rajender","lastName":"Pallerla","email":"rpallerla@uh.edu"}
    ]
  );
});

app.listen(port,function(err){
  if(err)
    console.log(err);
  else
    open('http://localhost:'+port);
}
);

