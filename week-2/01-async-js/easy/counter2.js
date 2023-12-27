function counter(){
    let start = 0;
    function increment(){
        start++;
        console.log(start);
        setTimeout( increment , 1000);
    }
   increment();
}

counter();


