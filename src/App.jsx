import './App.css'
import ImageGenerator from './Components/ImageGenerator';
import Input from './Components/Input';
import Generate from './Components/Generate';
import Image from './Components/Image';

const App = () => {

  return (
    <div className="App w-screen h-screen flex-col m-auto items-center gap-7">
          <ImageGenerator />
          <Input />
          <Generate />
          <Image />
    </div>
  );
}

export default App;
