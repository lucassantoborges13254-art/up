// React + Framer Motion example (single-file component)
// Install framer-motion: npm install framer-motion
import React from 'react';
import { motion } from 'framer-motion';

export default function HeroAnimated() {
  return (
    <section style={{padding:'48px 16px', textAlign:'center', background:'linear-gradient(180deg,#080808,#0f0f0f)'}}>
      <motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.6}} style={{color:'#fff', fontSize:40}}>
        Seu upgrade começa aqui.
      </motion.h1>
      <motion.p initial={{y:12,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.6, delay:0.12}} style={{color:'#9aa0a6', maxWidth:700, margin:'12px auto'}}>
        Resultados reais em tempo recorde — comece hoje e veja a diferença imediatamente.
      </motion.p>
      <motion.div initial={{scale:0.98, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:0.5, delay:0.22}}>
        <a href="#" style={{background:'linear-gradient(90deg,#3b3b3b,#6f6f6f)', color:'#fff', padding:'12px 20px', borderRadius:10, fontWeight:700, textDecoration:'none'}}>Comprar</a>
      </motion.div>
    </section>
  );
}
