/*jQuery(function() {
        jQuery.getScript('http://kikiefendiclock.googlecode.com/files/www.kikiyo.co.cc.cursor-bintang-silver.js');
      });*/

      const images= document.querySelectorAll('img');
      images.forEach((image)=>{
    Img.addEventListener('click',(event)=>{
      event.currentTarget.classlist.toggle('img-circle');
      });
  });
