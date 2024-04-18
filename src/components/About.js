import React from 'react';
import logo_img from './img/learnpm.jpg';
import ins_img_1 from './img/instructorRaj.png';
import ins_img_2 from './img/review1.png'
import ins_img_3 from './img/review2.png'
import ins_img_4 from './img/review3.png'
import ins_img_5 from './img/review4.png'

const About = () => {
  // Inline styles
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '1200px',
      margin: '0 auto',
    },
    iframe: {
      width: '1200px',
      height: '600px',
      marginBottom: '20px',
    },
    description: {
      width: '970px',
      fontFamily: '"Arial Bold", "Arial", sans-serif',
      fontWeight: '700',
      color: '#333333',
      textAlign: 'center',
      lineHeight: 'normal',
      marginBottom: '20px',
    },
    whoWeAreContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      gap: '20px',
      margin: '20px 0',
    },
    whoWeAreHeading: {
      fontWeight: 'bold',
      fontSize: '24px',
      flexShrink: 0,
    },
    image: {
      width: '197px',
      height: '138px',
      flexShrink: 0,
    },
    learnPmDescription: {
      flex: 1,
      fontFamily: '"Arial", sans-serif',
      color: '#333333',
      textAlign: 'left',
      lineHeight: '1.5',
      maxWidth: '600px',
    },
    line: {
      width: '100%',
      height: '2px',
      border: 'none',
      backgroundColor: '#333333',
      margin: '20px 0',
    },
    atAGlanceHeading: {
      fontWeight: '700',
      color: '#333333',
      textAlign: 'left',
      fontSize: '18px',
      alignSelf: 'flex-start',
      marginBottom: '20px',
    },
    textBlockContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      width: '100%',
      marginBottom: '20px',
    },
    textBlock: {
      width: 'calc((100% - 200px) / 3)',
      backgroundColor: '#f5f5f5',
      padding: '20px',
      boxSizing: 'border-box',
      fontFamily: '"Arial", sans-serif',
      color: '#333333',
      textAlign: 'center',
    },
    percentage: {
      fontSize: '36px',
      lineHeight: '1',
      marginBottom: '5px',
      textAlign: 'center'
    },
    description_g: {
      fontSize: '16px',
      lineHeight: '1.5',
    },
    leadershipContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)', // Two columns
      gridGap: '20px', // Gap between columns and rows
      marginBottom: '40px',
    },

    leadershipProfile: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
    },
    profileColumn1: {
      gridArea: 'column1',
    },
    profileColumn2: {
      gridArea: 'column2',
    },
    profileImage: {
      borderRadius: '50%',
      width: '100px',
      height: '100px',
      marginRight: '20px',
    },
    profileText: {
      textAlign: 'left',
      flex: 1,
    },
  };
  const leadershipProfiles = [
    { id: 1, name: 'Raj Heda', description: 'Raj Heda has been teaching software development and Agile courses for over 20 years. He has extensive experience leading teams in Agile transformation, with successful results.', imgSrc: ins_img_1 },
    { id: 2, name: 'Raj Heda', description: 'Raj Heda has been teaching software development and Agile courses for over 20 years. He has extensive experience leading teams in Agile transformation, with successful results.', imgSrc: ins_img_2 },
    { id: 3, name: 'Raj Heda', description: 'Raj Heda has been teaching software development and Agile courses for over 20 years. He has extensive experience leading teams in Agile transformation, with successful results.', imgSrc: ins_img_3 },
    { id: 4, name: 'Raj Heda', description: 'Raj Heda has been teaching software development and Agile courses for over 20 years. He has extensive experience leading teams in Agile transformation, with successful results.', imgSrc: ins_img_4 },
    { id: 5, name: 'Raj Heda', description: 'Raj Heda has been teaching software development and Agile courses for over 20 years. He has extensive experience leading teams in Agile transformation, with successful results.', imgSrc: ins_img_5 },
  ];

  // Return the component's JSX
  return (
    <div style={styles.container}>
      {/* Video Section */}
      <iframe
        style={styles.iframe}
        src="https://www.youtube.com/embed/Kfpfn0SsexQ"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Learn PM Video"
      ></iframe>
      {/* Description Section */}
      <p style={styles.description}>
        Learn PM is a platform composed of courses, coaches and newest information driven by a grateful purpose to give a perfect learning experience.
      </p>
      {/* Who We Are Section */}
      <div style={styles.whoWeAreContainer}>
        <h2 style={styles.whoWeAreHeading}>Who We Are</h2>
        <img
          style={styles.image}
          src={logo_img}
          alt="LearnPM Logo"
        />
        <p style={styles.learnPmDescription}>
          LearnPM is a boutique Agile consultancy with decades of software development experience. We grew up in the era of structured design methodologies, adapted our learning to the rapid development approaches, and graduated to Agile. Wherever you are in your software evolution, we are there to help in your journey.
        </p>
      </div>
      {/* Divider Line */}
      <hr style={styles.line} />
      {/* At a Glance Section */}
      <h2 style={styles.atAGlanceHeading}>At a Glance</h2>
      <div style={styles.textBlockContainer}>
        <div style={styles.textBlock}>
          <div style={styles.percentage}>94%</div>
          <div style={styles.description_g}>Of customers choose us again to LearnPM</div>
        </div>
        <div style={styles.textBlock}>
          <div style={styles.percentage}>97%</div>
          <div style={styles.description_g}>Customers think we are really good team</div>
        </div>
        <div style={styles.textBlock}>
          <div style={styles.percentage}>88%</div>
          <div style={styles.description_g}>Get a good job when they finish our courses</div>
        </div>
      </div>
      <hr style={styles.line} />
      <div style={styles.leadershipContainer}>
        {leadershipProfiles.map((profile) => (
          <div key={profile.id} style={styles.leadershipProfile}>
            <img
              style={styles.profileImage}
              src={profile.imgSrc}
              alt={`${profile.name}`}
            />
            <div style={styles.profileText}>
              <strong>{profile.name}.</strong> {profile.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;