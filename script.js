let ctr=0;
function callback()
{
    console.log(ctr);
    ctr=ctr+1;
}
setInterval(callback,1000);

callback();
callback();
callback();
callback();
callback();
