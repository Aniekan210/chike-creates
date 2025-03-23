import { motion } from "framer-motion";
import styles from './AboutPage.module.css';
import Image from "next/image";
import useDeviceType from "@/hooks/useDeviceType";

const AboutPage = () => {
  const deviceType = useDeviceType();

  return (
    <motion.div
      className={styles.aboutContainer}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* About ChikeCreates Studios Section */}
      <div className={styles.aboutStudio}>
        {/* Logo Placeholder */}
        <div className={styles.logoPlaceholder}>
          <Image
            src="/images/logo4.png" // Replace with your logo
            alt="ChikeCreates Studios Logo"
            width={350}
            height={200} // Adjust height as needed
            className={styles.logo}
          />
        </div>

        {/* Write-Up */}
        <div className={styles.studioWriteUp}>
          <motion.h1
            className={styles.studioWriteUpHeading}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            About ChikeCreates Studios
          </motion.h1>
          <motion.p
            className={styles.studioWriteUpText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            "Great stories don’t start perfect—they just start."
          </motion.p>
          <motion.p
            className={styles.studioWriteUpText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            At ChikeCreates Studios, we believe that every story begins with a spark—an idea that may be rough around the edges but holds the potential to become something unforgettable. As a full-service creative powerhouse, we specialize in writing, producing, and directing compelling content, from feature-length films and short films to commercials and event coverage.
          </motion.p>
          <motion.p
            className={styles.studioWriteUpText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            We embrace the creative process in all its imperfections, refining ideas, experimenting boldly, and crafting narratives that leave a lasting impact. Whether it’s a cinematic masterpiece or a high-energy commercial, we merge creativity with technical excellence to bring visions to life.
          </motion.p>
          <motion.p
            className={styles.studioWriteUpText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            Beyond production, we offer seamless event coverage, ensuring that every moment is captured with authenticity and artistry. At ChikeCreates Studios, we don’t wait for perfection—we create, evolve, and tell stories that matter.
          </motion.p>
          <motion.p
            className={styles.studioWriteUpText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            Let’s start something great together.
            <br />
            #ChikeCreates #WeTellStoriesThatMatter
          </motion.p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className={styles.missionStatement}>
        <motion.h2
          className={styles.missionHeading}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          Mission Statement
        </motion.h2>
        <motion.p
          className={styles.missionText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          To bring ideas to life through bold, authentic, and visually compelling storytelling that resonates with audiences and leaves a lasting impact.
        </motion.p>
      </div>

      {/* Vision Statement */}
      <div className={styles.visionStatement}>
        <motion.h2
          className={styles.visionHeading}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          Vision Statement
        </motion.h2>
        <motion.p
          className={styles.visionText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          Our mission is to glorify God through faithful stewardship of every talent, resource, and opportunity entrusted to ChikeCreates Studios, creating impactful stories that uplift, inspire, and leave a lasting, positive influence on everyone we encounter.
        </motion.p>
      </div>

      {/* About Chike Section */}
      <div className={styles.aboutChike}>
        {/* Image */}
        <motion.div
          className={styles.imageWrapper}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image
            src={'/images/chike.jpg'}
            alt="Chike"
            layout="responsive"
            width={400}
            height={600}
            className={styles.image}
            priority
          />
          <motion.p
            className={styles.ceoText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            CEO and Founder
          </motion.p>
        </motion.div>

        {/* Write-Up */}
        <div className={styles.chikeWriteUp}>
          <motion.h1
            className={styles.chikeWriteUpHeading}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            Who is Chike?
          </motion.h1>
          <motion.p
            className={styles.chikeWriteUpText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
          >
            From a young age, I was the kid always lost in a book or glued to the TV, captivated by great storytelling. This passion for unique narratives has been with me for as long as I can remember, driving my purpose to bring inspiring and unforgettable stories to the world.
          </motion.p>
          <motion.p
            className={styles.chikeWriteUpText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            Since 2009, I've immersed myself in a diverse range of projects, from advertising campaigns to film ventures, constantly pushing my creative boundaries. Now based in Lagos, Nigeria, I thrive on collaboration and exploring new creative opportunities.
          </motion.p>
          <motion.p
            className={styles.chikeWriteUpText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.5 }}
          >
            A Marketing graduate from Kennesaw State University, GA, USA, I spent several years at DDB Lagos and Insight Publicis in various leadership roles. I'm deeply committed to finding opportunities that challenge me to innovate and infuse fresh ideas into every project.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;