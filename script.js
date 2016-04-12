
// DEPTH FIRST TREE TRAVERSAL

// CHARACTERS IN STRING 

function find_chars(string1,string2){
    var maxstring, minstring;
    var find = [];
    if(string1.length > string2.length){
      maxstring = string1;
      minstring = string2;
    }else{
      maxstring = string2;
      minstring = string1;
    }
    for(i = 0; i<= maxstring.length -1; i++){
      for(j=0; j<=minstring.length-1;j++){
        if(minstring[j]==maxstring[i]){
          if(find.length==0){
            find.push(minstring[j]);
          }else{
            exist = 0;
            for(c = 0; c <= find.length-1; c++){
              if(find[c]==minstring[j]){
                exist = 1;
              }
            }
            if(exist==0){
              find.push(minstring[j]);
            }
          }
        }
      }
    }
    return find;
}

// ARRAY COMPACTION FUNCTION 

function compaction(input,transformed){
	for (var i = 0; i <= input.length-1; i++) {
  	exist = 0;
		if(transformed.length==0 ){
    	transformed.push(input[i]);
    }else{
    	for (var j = 0; j <= input.length ; j++) {
        	if(transformed[j]== input[i]){
          	exist = 1;
          }
      }
      if(exist == 0){
        transformed.push(input[i]);
     	}
    }
	}
  return transformed;
}

// ROTATING ARRAY FUNCTION 

function rotating(n,input){
  var rotate =[];
  var rotateLength = input.length - n;
  for(var i = 0; i <= input.length-1; i++){
    if(i>=rotateLength){
      rotate.push(input[i]);
    }
  }
  for(var i=0; i<= input.length-1;i++){
    if(i<rotateLength){
      rotate.push(input[i]);
    }
  }
  return rotate;
}

// LEAST COMMON MULTIPLE

function lcm(list) {
var tour = list.length-1;
var z =0;
  for(i=0; i<= list.length-1;i++){
    if(i<tour){
    z!=0 ? a = Math.abs(z) : a = Math.abs(list[i]);
    b = Math.abs(list[i+1]);
    x = a;
    y = list[i+1];
    while(b) {
      var t = b;
      b = a % b;
      a = t;   
    }
    z = (!x || !y) ? 0 : Math.abs((x * y) / a);
    }
   }
  return z;
}



