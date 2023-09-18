import { useRecoilValue } from 'recoil'
import CodeEditor from '../components/Editor'
import LanguageSelector from '../components/LanguageSelector'
import OutputWindow from '../components/OutputWindow'
import { resultState } from '../appContext'

const Ide: React.FC = () => {
  const result = useRecoilValue(resultState)
  return (
    <div className="m-auto w-4/5">
      <div className="flex h-screen flex-col justify-center">
        <LanguageSelector />
        <CodeEditor />
        <OutputWindow outputDetails={result} />
      </div>
    </div>
  )
}

export default Ide
