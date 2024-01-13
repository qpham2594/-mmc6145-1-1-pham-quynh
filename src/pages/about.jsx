import styles from '../styles/home.module.css'

export default function About() {
  return (
    <main className= {styles.background}>
     <header/>
      <br/><br/>
      <div className= {styles.mainContent}>
      <h1 className={styles.h1Title}>Everything You Need to Know About Me </h1>
      <br/>
        <p className={styles.aboutParagraph}> Hi there! Thank you for stopping by. It really means a lot to me that you choose to be here to look through my portfolio.
        After spending almost a decade in healthcare, I decided to change career path to something I am interested in rather than following the flow of what others tell me
        I should do. The turning point for me was really when my dad passed while I was in pharmacy school - I don't want to live my life till my death bed wondering what 
        COULD have been because I am too busy following the mold or path that others set for me. It makes me realize that I can make decisions for my own, and it CAN be different
        from what others expect of me, and that's okay. I can choose to be comfortable but question if this is all I know, or all I can do for the rest of my life, or I can take 
        chances and always learn to the best of my ability. Learning how to program and everything else that comes with it, such as the design aspect as well as the theory and research
        aspects were such a steep learning curve for me because of how unfamiliar the materials are. However, I have been enjoying every step of the journey. Here are some facts about me!</p>

        <div className={styles.projectContainer}> 
          <div className={styles.factBox}>
            <p className={styles.description}> I am a first-generation Vietnamese-American who is fluent in both English and Vietnamese.</p>
          </div>
          
          <div className={styles.factBox}> 
          <p className={styles.description}> I am abitious, but that also means I have grit like no other. </p>
          </div>
          
          <div className={styles.factBox}> 
            <p className={styles.description}> I enjoy working in an environment where I can learn, grow, create, and communicate effectively.</p>
          </div>
          
          <div className={styles.factBox}> 
            <p className={styles.description}> Some of the topics I am passionate about are neurodivergence, social justice, and environmental issues.</p>
          </div>
          
          <div className={styles.factBox}> 
            <p className={styles.description}> I have a high emotional intelligence, and therefore very personable. </p>
          </div>
          
          <div className={styles.factBox}> 
            <p className={styles.description}> I am a strong believer of teamwork, so I understand that my work will also affect others as well. </p>
          </div>

          <div className={styles.factBox}> 
            <p className={styles.description}> I believe in leading by example, and I look for leaders that do the same in return. </p>
          </div>

          <div className={styles.factBox}> 
            <p className={styles.description}> Some of my hobbies include: cooking, baking, gardening, hiking, dancing, arts and crafts, and going to live jazz shows. </p>
          </div>
        </div>
      </div>  
    </main>
  )
}