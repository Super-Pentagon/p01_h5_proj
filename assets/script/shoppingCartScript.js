window.onload = function(){
    // var shopSele = document.querySelector(".shopSele");
    var shopSele = document.querySelectorAll(".shopSele");
    
    var arr = new Array(shopSele.length);
    for(var i=0;i< shopSele.length;i++){
        arr[i] =  $(shopSele[i]).prop("checked");
        bind(shopSele[i],"click",function(){
           
            if( $(shopSele[i]).prop("checked")){
                
                $(shopSele[i]).prop("checked") = false;
                console.log(0);
                
            
            }
        });
        
    }


    function bind(obj, eventStr, callBack) {
        if (obj.addEventListener){
            //大部分浏览器
            obj.addEventListener(eventStr, callBack, false);
        }else{
            /**
             * this是谁由调用方式决定
             */
            //IE8以下
            obj.attachEvent("on"+eventStr, function () {
                    callBack().call(obj);
            });

        }

    }
}