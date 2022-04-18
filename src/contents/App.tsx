import type { ChangeEvent } from 'react';
import { Modal } from './components/Modal';
import { Input } from './components/Input';
import { HistoryList } from './components/HistoryList';
import { useState } from 'react';
import styled from '@emotion/styled';

function App() {
  const [histories, setHistories] = useState<chrome.history.HistoryItem[]>([])

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    chrome.runtime.sendMessage<string, chrome.history.HistoryItem[]>(e.target.value, (response) => {
      setHistories(response)
    })
  }

  return (
    <Modal>
      <Input autoFocus onChange={onChange} />
      <StVerSpace/>
      <StHistoriesContainer>
        <HistoryList histories={histories} />
      </StHistoriesContainer>
    </Modal>
  )
}

export default App

const StVerSpace = styled.span`
  display: block;
  margin-bottom: 8px;
`

const StHistoriesContainer = styled.div`
  overflow: hidden;
  height: calc(100% - (8px + 48px));
`