import { writeTextFile, BaseDirectory } from '@tauri-apps/api/fs';
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom';
import React from 'react';
export const InfoTwo = () => {

  const blackTheme = async () => {
    try {
      let email = 'https://mailto'+ sessionStorage.getItem('Email');
      let youtube =  sessionStorage.getItem('Youtube');
      let Name = sessionStorage.getItem('Name');
      let profession = sessionStorage.getItem('Profession');
      let country = sessionStorage.getItem('Nationality');
      let hobby = sessionStorage.getItem('Hobby');
      await writeTextFile("data.html", `
      <!DOCTYPE html>
<html>
<head>
    <title>Web Gen</title>
    <link rel="stylesheet" type="text/css" href="{{css_path}}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
</head>
<body>
    <header>
        <div class="main">
            <ul>
                <li class="active"><a href=>Home</a></li>
                <li><a href="${youtube}">Blogs</a></li>
                <link rel="stylesheet" href="css/style.css">
                <li><a href="mailto:${email}">Contact me</a></li>
                
            </ul>
        </header>
        </div>
        <div class="title">
        <h1>hello I'm ${Name}</h1>
        </div>
        <main>
        <p>Greetings, I am ${Name}. I'm a ${profession} from ${country}. I love ${hobby}, Make sure to check out my blogs!</p>
        <div>
        </main>
    </div>
</body>
</html>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
*{
	margin: 0;
	padding: 0;
	font-family: 'Poppins', sans-serif;
}

html{
	font-size: 10px
}
body{
	
	background-image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
	background-size: cover;
	background-repeat: no-repeat;
	overflow: hidden;
	min-height: 100%;
}
header{
	height: 15vh;
}

main{
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}

ul{
	float: right;
	list-style-type: none;
    margin-top: 2%;
    margin-right: 2%;
    padding: 0;
    
}

ul li{
	display: inline-block;
    margin: 3 1% 2 4;
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    
}

ul li a{
	text-decoration: none;
	color: #fff;
	padding: 10px 25px;
	border: 1px solid transparent;
	transition: 0.6s ease;
	font-size: 15px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
}

ul li a:hover{
	background-color: #fff;
	color: #000;
    border: 1px solid #fff;
}
ul li.active a{
	background-color: #fff;
	color: #000;
    border: 1px solid #fff;
}


.header{
	max-width: 1200px;
	margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 1;
}

.title{
	position: absolute;
	top: 25%;
	left: 50%;
	transform: translate(-50%,-50%);
	color: #fff;
	font-size: 200%;
    font-weight: 600;
    letter-spacing: 1px;
    text-align: center;
    z-index: 2;
}

p{
	position: absolute;
	top: 65%;
	left: 50%;
	transform: translate(-50%,-50%);
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-align: center;
    z-index: 2;
}

p{
	color: #fff;
	font-size: 200%;
}


</style>
      `, {
        dir: BaseDirectory.Desktop,
        overwrite: true
      },
      toast.success("File created successfully!"),
      )
    } catch (e) {
      console.log(e);
    }
    }
    const blueTheme = async () => {
      try {
        let email = 'https://mailto'+ sessionStorage.getItem('Email');
        let youtube =  sessionStorage.getItem('Youtube');
        let Name = sessionStorage.getItem('Name');
        let profession = sessionStorage.getItem('Profession');
        let country = sessionStorage.getItem('Nationality');
        let hobby = sessionStorage.getItem('Hobby');
        await writeTextFile("data.html", `
        <!DOCTYPE html>
  <html>
  <head>
      <title>Web Gen</title>
      <link rel="stylesheet" type="text/css" href="{{css_path}}">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  </head>
  <body>
      <header>
          <div class="main">
              <ul>
                  <li class="active"><a href=>Home</a></li>
                  <li><a href="${youtube}">Blogs</a></li>
                  <link rel="stylesheet" href="css/style.css">
                  <li><a href="mailto:${email}">Contact me</a></li>
                  
              </ul>
          </header>
          </div>
          <div class="title">
          <h1>hello I'm ${Name}</h1>
          </div>
          <main>
          <p>Greetings, I am ${Name}. I'm a ${profession} from ${country}. I love ${hobby}, Make sure to check out my blogs!</p>
          <div>
          </main>
      </div>
  </body>
  </html>
  <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  *{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
  
  html{
    font-size: 10px
  }
  body{
    
    background-image: linear-gradient(to right, purple , pink);   
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    min-height: 100%;
  }
  header{
    height: 15vh;
  }
  
  main{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  ul{
    float: right;
    list-style-type: none;
      margin-top: 2%;
      margin-right: 2%;
      padding: 0;
      
  }
  
  ul li{
    display: inline-block;
      margin: 3 1% 2 4;
      font-size: 1.5rem;
      font-weight: 600;
      color: #fff;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 1px;
      
  }
  
  ul li a{
    text-decoration: none;
    color: #fff;
    padding: 10px 25px;
    border: 1px solid transparent;
    transition: 0.6s ease;
    font-size: 15px;
      font-weight: 600;
      color: #fff;
      cursor: pointer;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 1px;
  }
  
  ul li a:hover{
    background-color: #fff;
    color: #000;
      border: 1px solid #fff;
  }
  ul li.active a{
    background-color: #fff;
    color: #000;
      border: 1px solid #fff;
  }
  
  
  .header{
    max-width: 1200px;
    margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2rem;
      height: 100%;
      width: 100%;
      position: relative;
      z-index: 1;
  }
  
  .title{
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #fff;
    font-size: 200%;
      font-weight: 600;
      letter-spacing: 1px;
      text-align: center;
      z-index: 2;
  }
  
  p{
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%,-50%);
      color: #fff;
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 1px;
      text-align: center;
      z-index: 2;
  }
  
  p{
    color: #fff;
    font-size: 200%;
  }
  
  
  </style>
        `, {
          dir: BaseDirectory.Desktop,
          overwrite: true
        },
        toast.success("File created successfully!"),
        )
      } catch (e) {
        console.log(e);
      }
      }
      const redTheme = async () => {
        try {
          let email = 'https://mailto'+ sessionStorage.getItem('Email');
          let youtube =  sessionStorage.getItem('Youtube');
          let Name = sessionStorage.getItem('Name');
          let profession = sessionStorage.getItem('Profession');
          let country = sessionStorage.getItem('Nationality');
          let hobby = sessionStorage.getItem('Hobby');
          await writeTextFile("data.html", `
          <!DOCTYPE html>
    <html>
    <head>
        <title>Web Gen</title>
        <link rel="stylesheet" type="text/css" href="{{css_path}}">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    </head>
    <body>
        <header>
            <div class="main">
                <ul>
                    <li class="active"><a href=>Home</a></li>
                    <li><a href="${youtube}">Blogs</a></li>
                    <link rel="stylesheet" href="css/style.css">
                    <li><a href="mailto:${email}">Contact me</a></li>
                    
                </ul>
            </header>
            </div>
            <div class="title">
            <h1>hello I'm ${Name}</h1>
            </div>
            <main>
            <p>Greetings, I am ${Name}. I'm a ${profession} from ${country}. I love ${hobby}, Make sure to check out my blogs!</p>
            <div>
            </main>
        </div>
    </body>
    </html>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    *{
      margin: 0;
      padding: 0;
      font-family: 'Poppins', sans-serif;
    }
    
    html{
      font-size: 10px
    }
    body{
      
      background-image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1524721696987-b9527df9e512?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80');
      background-size: cover;
      background-repeat: no-repeat;
      overflow: hidden;
      min-height: 100%;
    }
    header{
      height: 15vh;
    }
    
    main{
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    ul{
      float: right;
      list-style-type: none;
        margin-top: 2%;
        margin-right: 2%;
        padding: 0;
        
    }
    
    ul li{
      display: inline-block;
        margin: 3 1% 2 4;
        font-size: 1.5rem;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        transition: all 0.3s ease;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        
    }
    
    ul li a{
      text-decoration: none;
      color: #fff;
      padding: 10px 25px;
      border: 1px solid transparent;
      transition: 0.6s ease;
      font-size: 15px;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    
    ul li a:hover{
      background-color: #fff;
      color: #000;
        border: 1px solid #fff;
    }
    ul li.active a{
      background-color: #fff;
      color: #000;
        border: 1px solid #fff;
    }
    
    
    .header{
      max-width: 1200px;
      margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
        height: 100%;
        width: 100%;
        position: relative;
        z-index: 1;
    }
    
    .title{
      position: absolute;
      top: 25%;
      left: 50%;
      transform: translate(-50%,-50%);
      color: #fff;
      font-size: 200%;
        font-weight: 600;
        letter-spacing: 1px;
        text-align: center;
        z-index: 2;
    }
    
    p{
      position: absolute;
      top: 65%;
      left: 50%;
      transform: translate(-50%,-50%);
        color: #fff;
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 1px;
        text-align: center;
        z-index: 2;
    }
    
    p{
      color: #fff;
      font-size: 200%;
    }
    
    
    </style>
          `, {
            dir: BaseDirectory.Desktop,
            overwrite: true
          },
          toast.success("File created successfully!"),
          )
        } catch (e) {
          console.log(e);
        }
        }


  return (
    <div className='font-poppins' >
      <h1 className='mt-10 mb-2 text-center capitalize text-transparent text-4xl bg-gradient-to-r from-indigo-600 to-indigo-900 font-extrabold bg-clip-text'>themes</h1>'
      <hr className='w-1/5 mx-auto bg-gradient-to-r from-indigo-600 to-indigo-900 '/>
      {/* my Cards */}
      <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center mt-20 '>
        {/* 1st card */}
        <div className='py-10 text-white   hover:scale-110 transition-[0.5s] '>
          <div className=' overflow-hidden rounded-lg shadow-lg shadow-green-500 bg-green-500  max-w-sm '>
            <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt='mountain' className='w-full'/>
            <div className="px-6 py-4">
              <div className='font-bold text-xl mb-2 text-center'>
                Green Theme
              </div>

            </div>
            <div className='justify-center items-center flex '>
              <button onClick={blackTheme} className="bg-white  text-green-500 w-[200px] transition-[0.5s] rounded-lg font-bold my-6 mx-auto py-3 ring-2 ring-white hover:ring-green-700 hover:bg-green-700  hover:shadow-xl hover:shadow-green-700 hover:text-white hover:scale-110">
                Get It Now!
              </button>
            </div>
          </div>
        </div>
        {/* 2nd card */}
        <div className='py-10 text-black hover:scale-110 transition-[0.5s]'>
          <div className='rounded-lg overflow-hidden  shadow-lg shadow-white bg-white max-w-sm'>
            <img src="https://images.unsplash.com/photo-1563293815-7d1c589bd909?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
            alt='mountain' className='w-full'/>
            <div className="px-6 py-4">
              <div className='font-bold text-xl mb-2 text-center'>
                White Theme
              </div>

            </div>
            <div className='justify-center items-center flex '>
              <button onClick={blueTheme} className="bg-gray-500  text-black w-[200px] transition-[0.5s] rounded-lg font-bold my-6 mx-auto py-3 ring-2 ring-gray-500 hover:ring-black hover:bg-black hover:shadow-xl hover:shadow-black hover:text-white hover:scale-110">
                Get It Now!
              </button>
            </div>
          </div>
          
        </div>
        {/* 3rd card */}
        <div className='py-10 text-white hover:scale-110 transition-[0.5s]'>
          <div className='rounded-lg overflow-hidden shadow-lg max-w-sm shadow-pink-500 bg-gradient-to-r from-indigo-500 via-indigo-600 to-pink-600'>
            <img src="https://images.unsplash.com/photo-1489189642444-0709966aec44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt='mountain' className='w-full'/>
            <div className="px-6 py-4">
              <div className='font-bold text-xl mb-2 text-center'>
                Gradient Theme
              </div>

            </div>
            <div className='justify-center items-center flex '>
              <button onClick={redTheme} className="bg-white  text-red-600 w-[200px] transition-[0.5s] rounded-lg font-bold my-6 mx-auto py-3 ring-2 ring-white   hover:bg-gradient-to-r hover:from-purple-500 hover:via-indigo-600 hover:to-pink-600 hover:shadow-xl hover:shadow-red-800 hover:text-red-100 hover:scale-110" >
                Get It Now!
              </button>
            </div>
          </div>
        </div>
      </div>
      <Link to="/info"><button className="bg-white text-black w-[200px] text-center flex  justify-center transition-[0.5s] rounded-lg font-bold my-6 mx-auto py-3 ring-2 ring-white hover:ring-indigo-600 hover:bg-indigo-600  hover:shadow-xl hover:shadow-indigo-700 hover:text-white hover:scale-110">
            Back
          </button></Link>
    </div>
  )
}
