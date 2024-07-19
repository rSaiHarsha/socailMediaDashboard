import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>Developed by <a href="https://www.linkedin.com/in/sai-harsha-rayapati/" target="_blank" rel="noopener noreferrer" style={styles.link}>R Sai Harsha</a></p>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop :"15px",
    position: 'relative',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    fontFamily:"Roboto",
    color:"black",
    textAlign: 'center',
    padding: '10px 0',
    boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
    borderradius : "20px"
  },
  text: {
    margin: 0,
  },
  link: {
    color: '#0077b5',
    textDecoration: 'none',
  },
};

export default Footer;
