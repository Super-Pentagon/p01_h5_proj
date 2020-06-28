window.onload = function(){

 
    
    amount();
    check();
    checkAll()
    add(15);
    sub(15);
    del() ;
   
    var back = document.querySelector('.back');
    back.onclick = function () {
        window.location.href='orderView.html';
    }
    function checkAll() {
        var checkedAllBox = document.getElementById("checkedAllBox");
        var shopSele = document.querySelectorAll(".shopSele");
        checkedAllBox.onclick = function(){
            for(var i =0;i<shopSele.length;i++){
                shopSele[i].checked = this.checked;
            }
            amount();
    }
    }
    function check(){
        var shopSele = document.querySelectorAll(".shopSele");
        var checkedAllBox = document.getElementById("checkedAllBox");
        for(var i=0;i< shopSele.length;i++){
            (function(i){
                
                shopSele[i].onclick = function(){
                    if(this.c== 0){
                        this.c = 1;
                        this.checked = false;
                        // console.log(this.c);
                        // console.log(this.checked);
                        amount();
                        
                    }else{
                        this.c = 0;
                        this.checked = true;
                        amount();
                    }
                    for (var j = 0 ;j<shopSele.length;j++){
                        //只要一个没选中就不是全选
                        checkedAllBox.checked = true;
                        if (!shopSele[j].checked) {
                            checkedAllBox.checked = false;
                            break;
                        }
                    }
                    
                }

            })(i)    
        }
    }
 
   function del() {
    var del = document.getElementById("del");
    var shopSele = document.querySelectorAll(".shopSele");
    var checkedAllBox = document.getElementById("checkedAllBox");
       del.onclick = function(){
        for(var i =0 ;i<shopSele.length;i++){
            if(shopSele[i].checked == true){
                shopSele[i].parentNode.parentNode.remove();
                amount();

            }
        }
        checkedAllBox.checked = false;
    }
  
   }
    
    function amount() {
        var mony = 0;
        var shopSele = document.querySelectorAll(".shopSele");
        var prices = document.querySelectorAll('.shopPrice');
        var amounts = document.querySelector('.amount');
        var checkedAllBox = document.getElementById("checkedAllBox");
        for(var i =0 ; i<shopSele.length;i++){
            if(shopSele[i].checked){
                mony += parseInt(prices[i].innerText); 
            }else {
              
            }
        }
       
        amounts.innerHTML = "￥"+mony;
    }

    function add(shopOnePrice){
        var add = document.querySelectorAll('.add');
        var nums = document.querySelectorAll('.shopNum');
        var prices = document.querySelectorAll('.shopPrice');
        
        for(var i = 0 ;i<add.length;i++){
            (function(i){
               
                
                add[i].onclick = function(){
                    // console.log(i);
                    var num=parseInt(nums[i].innerText);
                    
                    var price = parseInt(prices[i].innerText);
                    
                    nums[i].innerHTML = num+1;   
                    prices[i].innerHTML = price +shopOnePrice;
                    amount();
   
                    
                }
            })(i)
          
        }
    }
    function sub(shopOnePrice){
        var sub = document.querySelectorAll(".minus");
        var nums = document.querySelectorAll('.shopNum');
        var prices = document.querySelectorAll('.shopPrice');
        for(var i = 0 ;i<sub.length;i++){
            (function(i){
               
                
                sub[i].onclick = function(){
                   
                    
                    var num=parseInt(nums[i].innerText);
                    var price = parseInt(prices[i].innerText);
                    if(num == 0){
                        shopSele[i].parentNode.parentNode.remove();
                    }else{
                        nums[i].innerHTML = num-1;   
                        prices[i].innerHTML = price -shopOnePrice;
                       amount();
                    }
                
                 
                    // console.log(price);
                    
                    
                }
            })(i)
          
        }
    }
    
    
}