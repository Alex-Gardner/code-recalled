import { useState } from "react"

const useModal = () => {
  const [modalState, setModalState] = useState({
    isShowing: false,
  })

  function toggleModalState() {
    setModalState({
      isShowing: !modalState.isShowing,
    })
  }
  return {
    modalState,
    toggleModalState,
  }
}

export default useModal
