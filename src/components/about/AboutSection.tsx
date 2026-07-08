import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { TEAM_MEMBERS, ABOUT_STORY } from '@/constants/team.constants';
import { fadeUpVariants, staggerContainer } from '@/animations/fadeVariants';
import type { TeamMember } from '@/interfaces/team.interface';

const VetProfileCard = ({ member }: { member: TeamMember }) => (
  <motion.div variants={fadeUpVariants} className="card-surface p-6 flex flex-col items-center text-center">
    <div className="h-20 w-20 rounded-full bg-emerald/10 text-emerald flex items-center justify-center text-xl font-bold mb-4">
      {member.initials}
    </div>
    <h3 className="font-bold text-lg">{member.fullName}</h3>
    <p className="text-sm text-emerald font-medium mb-2">{member.role}</p>
    <p className="text-xs text-petrol/60 dark:text-cream/60 flex items-center gap-1.5 mb-4">
      <GraduationCap size={14} /> {member.university}
    </p>
    <p className="text-sm text-petrol/70 dark:text-cream/70 leading-relaxed">{member.bio}</p>
  </motion.div>
);

/** Sección "Quiénes Somos": historia de la clínica + tarjetas del equipo. */
export const AboutSection = () => (
  <section id="quienes-somos" className="section-container section-padding">
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-2xl mx-auto text-center mb-14"
    >
      <span className="text-xs font-semibold uppercase tracking-wide text-emerald">Quiénes somos</span>
      <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-6">Una historia de confianza y cuidado</h2>
      <p className="text-petrol/70 dark:text-cream/70 whitespace-pre-line leading-relaxed text-left md:text-center">
        {ABOUT_STORY}
      </p>
    </motion.div>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
    >
      {TEAM_MEMBERS.map((member) => (
        <VetProfileCard key={member.id} member={member} />
      ))}
    </motion.div>
  </section>
);
