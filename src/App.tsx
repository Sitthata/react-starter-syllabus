import Navbar from './components/navigation/Navbar'
import SyallabusTable from './components/syllabus/SyallabusTable'

import './styles/index.css'

function App() {
  return (
    <section>
      <div className="mx-auto max-w-[750px] p-4">
        <Navbar />
        <SyallabusTable />
      </div>
    </section>
  )
}

export default App
