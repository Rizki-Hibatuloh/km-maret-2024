    // Looping

    /**
     * Study case 1
     * 
     * Tampilkan 10 bilangan ganjil dan genap pertama
     * 
     */
    /*
    let num = 10
    for(let i = 1 ; i <= num ; i++){
        if(i % 2 === 0){
            console.log("Genap : " + i);
        }else{
            console.log("Ganjil : " + i);
        }
    }
    */

    /**
     * Study case 2
     * 
     * Tentukan jumlah faktor dari sebuah bilangan
     */
    /*
    let bilangan= 24;
    let faktor=0;

    for(let i = 1; i <= bilangan ; i++){
        if(bilangan % i == 0){
            faktor ++;
        }
    }
    console.log("Faktor dari bilangan "+ bilangan + " adalah "+faktor);
    */

    /**
     * Study case 3
     * 
     * Cek apakah bilangan prima
     */

    /*
    if(faktor===2) {
        console.log("Bilangan Prima");
    } else {
        console.log("Bukan bilangan  Prima");
    }
    */

     /**
     * Study case 4
     * 
     * Tampilkan bentuk segitiga sama siku-siku
     * 
     * #
     * ##
     * ###
     * ####
     * ######
     */

    let s = 5;
    let result="";
    for(let i = 0; i < s ; i++){
        for(let j= 0 ; j <= i ; j++){
            result += "#";
        }
        console.log(result+  "\n");
    }

     /**
     * Study case 5
     * 
     * Tampilkan bentuk segitiga sama siku-siku
     * 
     * 1
     * 12
     * 123
     * 1234
     * 12345
     */
     for(let i = 1 ; i <=5 ; i++){
        let s ='';      //variabel penampung
        for(let j = 1 ; j<=i;j++) {
            s += j;
        }
        console.log(s);
    }
