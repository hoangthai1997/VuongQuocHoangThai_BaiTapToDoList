function Validation(){
    this.kiemTraRong = function(input, spanId, mess){
        if (input !== "") {
            getEle(spanId).style.display = "none";
            getEle(spanId).innerHTML = "";
            return true;
          }
          getEle(spanId).style.display = "block";
          getEle(spanId).innerHTML = mess;
          return false;
        };
        this.kiemTraTrungTenTask = function (input, spanId, mess, arr) {
          /**
           * 1. Duyệt mảng nv
           * 2. Nếu input bằng item.manv
           *    => return false
           *    Ngược lại
           *    => return true
           */
          var check = true;
          arr.forEach(function (item) {
            if (input === item.id) {
              //Sai
              check = false;
            }
          });
      
          if (check) {
            getEle(spanId).style.display = "none";
            getEle(spanId).innerHTML = "";
            return true;
          }
      
          getEle(spanId).style.display = "block";
          getEle(spanId).innerHTML = mess;
          return false;
        };
      }
    
