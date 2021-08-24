import { Provider } from 'react-redux'
import { store } from '../state'
import RepositoriesList from './RepositoriesList'

function App() {
  return (
    <div>
      <Provider store={store}>
        <div>
          <h1>Search for a package</h1>
          <RepositoriesList />
        </div>
      </Provider>
    </div>
  )
}

export default App;
