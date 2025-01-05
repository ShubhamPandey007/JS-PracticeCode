// set Timeout and set Interval

setTimeout(console.log(true))

// setTimeout('hii')

setTimeout('console.log("shubham")', 3000);  //setTimeout ka use karke code ko daly karva sakte hai

/////multiple lines ke liye backtick(``)

setTimeout(`
    console.log("Hii")
    console.log("I am shubham")
    ,5000
    console.log("I am software engineer")`, 2000)

    console.log('welcome to ')


  /////
  
  const timer1 = setTimeout('console.log("Hi-1")', 1000)
  const timer2 = setTimeout('console.log("Hi-2")',2000);
  const timer3 = setTimeout('console.log("Hi-3")',4000);
  const timer4 = setTimeout(a, 4000)

  function a () {

    console.log('Hello World');
  }
  console.log('Hello Javascript world')