import React, { useEffect, useState } from 'react';
import Logo from "../Images/train.jpg";


const CityTalk = () => {
   
    const [currentDateTime, setCurrentDateTime] =useState(new Date());
    ;
    useEffect(()=>{
        const timer = setInterval(() => {
            setCurrentDateTime(new Date());
          }, 1000);
          return () => clearInterval(timer);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

 

  return (
    <div style={styles.container}>
      <div style={styles.header}>City Talk</div>
      <hr style={{marginTop:'0px'}}></hr>
      <div style={styles.content}>
        <img
          src={Logo} // Replace with your image URL
          alt="Puja Special Trains"
          style={styles.image}
        />
        <div style={styles.textContent}>
          <h4 style={styles.title}>Puja special trains: Time revised</h4>
          <p style={styles.date} >{formattedDate}</p>
          <p style={styles.description}>
            CNM News: To clear the rush during the Puja festival season, special trains will be operated between Mangaluru Junction.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #ccc',
    width: '500px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    margin: '0 auto',
    padding: '10px',
    position: 'absolute',  // Use absolute positioning
    left: '0',             // Align it to the left of the screen
    top: '50px', 
  },
  header: {
    backgroundColor: '#254A80',
    color: '#fff',
    padding: '10px',
    fontWeight: 'bold',
    fontSize: '18px',
    width:'80px',
    height:'20px',
  },
  content: {
    padding: '10px',
  },
  image: {
    width: '100%',
    height: '250px',
    marginBottom: '10px',
  },
  
  textContent: {
    padding: '0 10px',
  },
  title: {
    fontSize: '22px',
    margin: '0 0 5px',
    position:'absolute',
    left:'40px',
    fontSize:'13px',
    
  },
  date: {
    fontSize: '14px',
    color: '#999',
    marginBottom: '10px',
    marginLeft:'280px',
    
    
  },
  description: {
    fontSize: '14px',
    color: '#333',
    textAlign:'justify',
  },
  

  
};

export default CityTalk;
