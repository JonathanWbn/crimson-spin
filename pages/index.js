import { motion } from "framer-motion";
import Head from "next/head";

import styles from "../styles/Home.module.css";

const allMembers = [
  "Florian",
  "Danil",
  "Carina",
  "Verena",
  "Jonathan",
  "Paolo",
  "Anne",
  "Katja",
  "Ingmar",
  "Alexey",
  "Shohidur",
];

export default function Home() {
  const [isHovering, setIsHovering] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);
  const [population, setPopulation] = React.useState([
    "Florian",
    "Danil",
    "Carina",
    "Verena",
    "Jonathan",
    "Paolo",
    "Anne",
    "Katja",
    "Alexey",
  ]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pick A Crimsee</title>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Inconsolata:400"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.populationSelect}>
        {allMembers.map((member) => (
          <label key={member} className={styles.populationSelectRow}>
            <span>{member}</span>
            <Checkbox
              checked={population.includes(member)}
              onToggle={(checked) =>
                checked
                  ? setPopulation((v) => [...v, member])
                  : setPopulation((v) => {
                      v.splice(v.indexOf(member), 1);
                      return [...v];
                    })
              }
            />
          </label>
        ))}
      </div>
      <motion.button
        animate={isClicked ? "clicked" : "default"}
        variants={{
          clicked: { y: 250 },
          default: { y: 0 },
        }}
        className={styles.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
        onClick={() => setIsClicked(true)}
      >
        <motion.svg
          animate={isHovering ? "hovering" : "default"}
          variants={{
            hovering: { x: -100, scale: 1 },
            default: { x: 0, scale: 1.2 },
          }}
          height="65px"
          width="65px"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 56 56"
        >
          <path d="M31,36H9c-2.8,0-5-2.2-5-5V9c0-2.8,2.2-5,5-5h22c2.8,0,5,2.2,5,5v22C36,33.8,33.8,36,31,36z M9,6C7.3,6,6,7.3,6,9v22  c0,1.7,1.3,3,3,3h22c1.7,0,3-1.3,3-3V9c0-1.7-1.3-3-3-3H9z"></path>
          <path d="M13,16c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S14.7,16,13,16z M13,12c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S13.6,12,13,12z"></path>
          <path d="M27,16c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S28.7,16,27,16z M27,12c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S27.6,12,27,12z"></path>
          <path d="M13,30c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S14.7,30,13,30z M13,26c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S13.6,26,13,26z"></path>
          <path d="M27,30c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S28.7,30,27,30z M27,26c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S27.6,26,27,26z"></path>
          <path d="M43,31c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S44.7,31,43,31z M43,27c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S43.6,27,43,27z"></path>
          <path d="M36,38c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S37.7,38,36,38z M36,34c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S36.6,34,36,34z"></path>
          <path d="M29,45c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S30.7,45,29,45z M29,41c-0.6,0-1,0.4-1,1s0.4,1,1,1c0.6,0,1-0.4,1-1  S29.6,41,29,41z"></path>
          <path d="M47,51H25c-2.8,0-5-2.2-5-5V35c0-0.6,0.4-1,1-1h10c1.7,0,3-1.3,3-3V20c0-0.6,0.4-1,1-1h12c2.8,0,5,2.2,5,5v22  C52,48.8,49.8,51,47,51z M22,36v10c0,1.7,1.3,3,3,3h22c1.7,0,3-1.3,3-3V24c0-1.7-1.3-3-3-3H36v10c0,2.8-2.2,5-5,5H22z"></path>
        </motion.svg>
        <motion.span
          animate={isHovering ? "hovering" : "default"}
          initial="default"
          variants={{
            hovering: { x: -20 },
            default: { x: 200 },
          }}
        >
          Roll the dice!
        </motion.span>
      </motion.button>
    </div>
  );
}

function Checkbox({ checked, onToggle }) {
  return (
    <>
      <input
        checked={checked}
        type="checkbox"
        style={{ display: "none" }}
        onChange={(e) => onToggle(e.target.checked)}
      />
      {checked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M10.041 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591zm-5.041-15c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M5 2c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z" />
        </svg>
      )}
    </>
  );
}
