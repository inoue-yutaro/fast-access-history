import type { ChangeEvent } from 'react';
import { Modal } from './components/Modal';
import { Input } from './components/Input';

function App() {
  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    chrome.runtime.sendMessage(e.target.value, (response) => {
      console.log(response)
    })
  }

  return (
    <Modal>
      <Input
        autoFocus
        onChange={onChange}
      />
    </Modal>
  )
}

export default App
