Framework7.prototype.plugins.statistics = function (app, params) {
    if (!params) return;

    var math=function(){
      "use strict";
      return{
        plus:function(numbers){
        
    var y= 0;
    $.each(numbers,function(a,b){
        y=y + b;

    })
    return y;

  },
  mean:function(num){
    var y=0;
    $.each(num,function(a,b){
      y =y +b;

    })
     return y/num.length;

  },
   median:function(num){
    var middle =Math.floor(num.length/2);

    if (num.length%2)
      return num[middle];
    else
      return(num[middle-1] + num[middle]) /2.0;


   },

  mode:function(num){
    var fmode =[];
    var maxnum = num[0], maxCount = 1;
    for (var i = 0; i <num.length; i++){
      if (fmode[num]== null)
        fmode[num]= 1;
      fmode[num] ++;
      if (fmode[num] > maxCount){
        maxnum =num;
        maxCount =fmode[num];
      }
    }
return maxnum;
  }
}

}();

 var strings =function (){
  "use strict";
  return{
     count:function(string){
      console.log(string[0]+string[1]+"a");
      return string[0]+string[1]+"a";
     }
  }
 }();

    return {
        hooks: {
            appInit: function () {
                console.log ("xxx");
               $$("#Button").on('click',function (){
               	var peopleList = $$("input[data-cmd='peopleList']").val().split(',');
               	console.log(peopleList);
               	$.each(peopleList,function (a,b){
               			peopleList[a] = parseInt(peopleList[a]);

               	});
                var mean =math.mean(peopleList);
                var median=math.median(peopleList);
                var mode = math.mode(peopleList);
                var content = "Mean:"+mean+"</br>Median:"+median+"</br> Mode:"+mode;
                $$("#statshere").html(content);
               	console.log(peopleList);
               });
           
			}
        }
    };
};

var $$ = Dom7;
var app = new Framework7({
	statistics:true
});

