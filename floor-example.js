function time() {

    return Math.floor(new Date()
      .getTime() / 1000);
  }


  export function convertX(x) {

    return Math.floor(x * 320 / 140);
    
}


console.log(convertX(20));

