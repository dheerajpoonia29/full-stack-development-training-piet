import ParentComponent from './props-example-2/ParentComponent'
import PropsExample from './props-example-1/PropsExample'
import Profile from './props-example-3/Profile'

function App() {
  return (
    <div>
      <Profile />
      <PropsExample />
      <Profile />
    </div>
  );
}

export default App;
