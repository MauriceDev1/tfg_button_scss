import Button from "./components/Button"
import './app.scss'

function App() {
  const data = [
    {
      id: 1,
      title: 'Self service',
      link: '',
      color:'purple'
    },
    {
      id: 2,
      title: 'TFG Synergy',
      link: '',
      color: 'blue'
    },
    {
      id: 3,
      title: 'TFG Learn',
      link: '',
      color: 'red'
    },
  ]

  return (
    <div className="my-container">
        {data.map(d =>
          <Button 
            key={d.id}
            title={d.title}
            link={d.link}
            color={d.color}
          />
        )}
    </div>
  )
}

export default App
