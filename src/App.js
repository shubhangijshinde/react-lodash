import './App.css';
import Debounce from './Debounce/debounce';
import Keypad from './Keypad/Keypad';
import MemoizedOutput from './Memoize/memoizedOutput';
import OtpLogin from './OtpLogin/otp-login';
import Throttle from './Throttle/throttle';

function App() {
  return (
    <div className="App">
      <OtpLogin />
      <Keypad />
      <Debounce delay={1000} />
      <Throttle delay={1000} />
      <MemoizedOutput />
    </div>
  );
}

export default App;
