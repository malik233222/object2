



let car1 ={
    marka: 'Bmw',
    model: 'F30',
    color: 'red',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bmw.az%2Fru%2Fall-models%2Fm-series.html&psig=AOvVaw24OSJ2hMQjVLQUEmqUH-dD&ust=1701910614580000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIjH2p7N-YIDFQAAAAAdAAAAABAF'
}
let car2 ={
    marka: 'merc',
    model: 's500',
    color: 'red',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bmw.az%2Fru%2Fall-models%2Fm-series.html&psig=AOvVaw24OSJ2hMQjVLQUEmqUH-dD&ust=1701910614580000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIjH2p7N-YIDFQAAAAAdAAAAABAF'
    //linki isledirik tam olaraq SERTDE anlamadim
}



 function idkWhatIamDoing(){
    console.log(this.marka+ " "+ this.model+" "+this.color+ " "+ this.image);
    //bir variant budu 2ci variant ise burda for in isletmekdir sadece olaraq saat 4:59dur yazmaga axotum yoxdur.
 }








function selectCar(){
    let val = document.getElementById('select').value;
    if(val==0){
        idkWhatIamDoing.call(car1)
    }
    else{
        idkWhatIamDoing.call(car2)
    }


}