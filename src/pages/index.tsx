//3rd party imports
import Lottie from 'react-lottie'

// my imports
import workspaceAnimation from '../animations/workstation.json'
import { Greetings } from '../components/greetings/greetings'

const Home = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: workspaceAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <div className="page_container" style={{ justifyContent: 'space-between' }}>
      <Greetings />
      <Lottie style={{ maxWidth: '60%' }} options={defaultOptions} />
    </div>
  )
}

export default Home
