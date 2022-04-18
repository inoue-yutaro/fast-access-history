import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

let isModalOpen = false
const id = 'fast-access-history-root'

const insertModal = () => {
  const reactBindRoot = document.createElement('div');
  reactBindRoot.setAttribute('id', id)
  reactBindRoot.setAttribute('class', 'fah-modal-area')

  document.body.appendChild(reactBindRoot)
  document.body.classList.add('fah-body')

  ReactDOM.createRoot(reactBindRoot!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
  isModalOpen = true
}

const removeModal = () => {
  const reactBindRoot = document.getElementById(id)
  reactBindRoot?.remove()
  document.body.classList.remove('fah-body')
  isModalOpen = false
}

document.addEventListener('keydown', event => {
  if(event.ctrlKey && event.key == 'p') {
    isModalOpen ? removeModal() : insertModal();
  }
})
