const http=require('http'),fs=require('fs'),path=require('path');
const types={'.html':'text/html','.js':'application/javascript','.css':'text/css','.png':'image/png','.json':'application/json','.svg':'image/svg+xml','.webmanifest':'application/manifest+json','.ico':'image/x-icon'};
http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split('?')[0]); if(p==='/')p='/index.html';
  const fp=path.join(process.cwd(),p);
  fs.readFile(fp,(e,d)=>{ if(e){res.writeHead(404);res.end('Not found');return;}
    res.writeHead(200,{'Content-Type':types[path.extname(fp)]||'application/octet-stream'}); res.end(d); });
}).listen(8080,()=>console.log('Serving http://localhost:8080'));
