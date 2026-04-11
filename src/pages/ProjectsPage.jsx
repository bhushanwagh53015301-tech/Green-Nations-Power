import { motion as Motion } from 'framer-motion'

const projects = [
  {
    name: 'Uruli Kanchan Residential Cluster',
    type: 'Residential Rooftop Portfolio',
    impact: 'Reduced monthly bills by 90-95% across early adopters.',
  },
  {
    name: 'Uruli Kanchana Group Housing Society',
    type: 'Group Housing Society',
    impact: 'Delivered high rooftop utilization with strong common-area energy savings.',
  },
  {
    name: 'Kharadi MIDC',
    type: 'Commercial and Industrial',
    impact: 'Reduced operating power costs through efficient commercial rooftop design.',
  },
  {
    name: 'Pimpri Group Housing Society',
    type: 'Residential Society Solar',
    impact: 'Enabled long-term monthly bill reduction for society common loads.',
  },
]

function ProjectsPage() {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-white py-12"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="font-montserrat text-3xl font-extrabold text-brand-navy">
            Signature Projects
          </h1>
          <p className="text-base text-slate-600">A sample of GNP deployment profiles across Pune district.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-xl border border-slate-200 bg-bg-light p-5"
            >
              <p className="text-sm font-semibold text-brand-green">{project.type}</p>
              <h2 className="mt-1 font-montserrat text-xl font-bold text-brand-navy">
                {project.name}
              </h2>
              <p className="mt-3 text-base text-slate-600">{project.impact}</p>
            </article>
          ))}
        </div>
      </div>
    </Motion.div>
  )
}

export default ProjectsPage
