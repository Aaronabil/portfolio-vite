import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';
import SectionContainer from '@/components/shared/SectionContainer';
import ScrollVelocity from '@/components/reactbits/ScrollVelocity';

// Project data
const projects = [
  {
    id: 1,
    title: "Cashier App Interface",
    description: "An application for Madura stalls that is simple, light and minimalist with a fresh design touch.",
    image: "https://raw.githubusercontent.com/Aaronabil/Aaronabil.github.io/main/public/images/kasir.jpg",
    link: "#",
    github: "https://github.com/Aaronabil/kasir-visual",
    categories: ["Frontend", "Design", "Security"],
    technologies: ["CodeIgniter", "PHP", "Bootstrap", "Security Audit"]
  },
  {
    id: 2,
    title: "Task App",
    description: "A task application to organize all our tasks and record them neatly so that we can be more disciplined.",
    image: "https://raw.githubusercontent.com/Aaronabil/Aaronabil.github.io/main/public/images/filament.png",
    link: "#",
    github: "https://github.com/ophari/to_do_list_laravel-filament",
    categories: ["Frontend", "Design"],
    technologies: ["Fillament", "Laravel", "PHP", "Blade"]
  },
  {
    id: 3,
    title: "Portfolio V1",
    description: "My first portfolio was made about 1 year ago, a very simple and very basic design.",
    image: "https://raw.githubusercontent.com/Aaronabil/Aaronabil.github.io/main/public/images/v1.jpg",
    link: "https://aaronabil.github.io/portfolio-1/",
    github: "https://github.com/Aaronabil/portfolio-1",
    categories: ["Frontend"],
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 4,
    title: "Tracks Location App",
    description: "An application to track location based on IP address with a simple design.",
    image: "https://raw.githubusercontent.com/Aaronabil/Aaronabil.github.io/main/public/images/lacak.jpg",
    link: "#",
    github: "https://github.com/Aaronabil/lacakIP-py",
    categories: ["Security"],
    technologies: ["HTML", "Tailwind CSS", "Python"]
  },
  {
    id: 5,
    title: "Library App",
    description: "A library application to be used in a school and organize all the books in the library.",
    image: "https://sahabatsetara.id/wp-content/uploads/2021/11/ylswjsy7stw.jpg",
    link: "#",
    github: "https://github.com/Aaronabil/apk-perpustakaan",
    categories: ["Frontend"],
    technologies: ["CodeIgniter", "PHP", "Bootstrap", "JavaScript"]
  },
  {
    id: 6,
    title: "Prediction Number ",
    description: "A desktop application to predict numbers according to what we draw, this application uses an artificial neural network.",
    image: "data:image/jpeg;base64,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",
    link: "#",
    github: "https://github.com/Aaronabil/predict-number-py",
    categories: ["Security"],
    technologies: ["Python"]
  },
  {
    id: 7,
    title: "Crypto App",
    description: "A crypto application that contains crypto trend charts, the latest news, and wallet demos.",
    image: "https://raw.githubusercontent.com/Aaronabil/Aaronabil.github.io/main/public/images/crypto.png",
    link: "#",
    github: "https://github.com/Aaronabil/project-crypto",
    categories: ["Frontend", "Design", "Security"],
    technologies: ["Typescript", "React", "Vite", "Tailwind CSS"]
  }
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.categories.includes(filter));

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Frontend', value: 'Frontend' },
    { label: 'Design', value: 'Design' },
    { label: 'Security', value: 'Security' }
  ];

  return (
    <PageTransition>
      <div className="pt-16">
        {/* Header */}
        <SectionContainer id="projects-header" className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="relative overflow-hidden">
              <h1>
                <ScrollVelocity
                  texts={['Project', 'Showcase']}
                  velocity={100}
                  className="custom-scroll-text mb-2"
                />
              </h1>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-dark-400 to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-dark-400 to-transparent"></div>
            </div>
            <p className="text-xl mb-12">
              A collection of my work across frontend development, design, and cybersecurity. Each project showcases different skills and approaches to problem-solving.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map(category => (
                <button
                  key={category.value}
                  onClick={() => setFilter(category.value)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${filter === category.value
                      ? 'bg-primary-600 text-white'
                      : 'bg-dark-300 text-gray-300 hover:bg-dark-200'
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>
        </SectionContainer>

        {/* Projects Grid */}
        <SectionContainer id="projects-grid" className="pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card overflow-hidden group"
              >
                <div className="relative h-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex space-x-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-full transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-dark-400 hover:bg-dark-300 text-white p-2 rounded-full transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.categories.map(category => (
                      <span
                        key={category}
                        className={`text-xs px-2 py-1 rounded-full ${category === 'Frontend' ? 'bg-primary-900 text-primary-300' :
                            category === 'Design' ? 'bg-secondary-900 text-secondary-300' :
                              'bg-accent-900 text-accent-300'
                          }`}
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 bg-dark-200 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionContainer>

        {/* Call to Action */}
        <SectionContainer id="projects-cta" className="py-20 bg-dark-300">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Want to see more?</h2>
            <p className="text-xl mb-8">
              Check out my GitHub for additional projects, contributions, and code samples.
            </p>
            <a
              href="https://github.com/aaronabil"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline rounded-full inline-flex items-center"
            >
              <Github className="mr-2 h-5 w-5" />
              Visit GitHub Profile
            </a>
          </motion.div>
        </SectionContainer>
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;