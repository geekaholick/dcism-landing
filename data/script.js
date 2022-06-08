let http = new XMLHttpRequest();
http.open('get',db.json,true);
http.send();
http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let images = JSON.parse(this.responseText);
    }
}