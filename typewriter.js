const sentence = "hello there from lighthouse labs";

let count = 50


    for (const char of sentence) {
        setTimeout(() => {
            process.stdout.write(char) 
          }, count);
          count += 100
      }


 setTimeout(() => {
            process.stdout.write('\n') 
          }, count);
    
     
