$(function(){
  //get dom elem  
  var $width  =$('#width'),
      $height =$('#height'),
      $btnCal =$('#calculate'),
      $perimeter =$('#perimeter'),
      $area   =$('#area');

  /*calc button click event*/
  $btnCal.click(function(){
    //get value
    var w=Number($width.val()),
        h=Number($height.val());

    //calculate
    /*
    var p=2 * (w+h),
        a=w * h;
    */ 
    var rect =rectangle();
    //output
    $perimeter.val(rect.perimeter(w,h));
    $area.val(rect.area(w,h));
  }); 
});
