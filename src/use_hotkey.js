const keyMap = {
  Escape: 'esc',
}

const specialKeys = ['shift', 'ctrl', 'alt']

const isPressed = (k, e) => {
  const pressedKey = keyMap[e.key] || e.key?.toLowerCase()
  const allKeys = k.split('_')
  return allKeys.every(k2 => (specialKeys.includes(k2) && e[`${k2}Key`]) || pressedKey === k2)
}

function useHotkey(actions) {
  const keys = Object.keys(actions)
  const onKeyUp = e => {
    const relevant = keys.find(k => isPressed(k, e))
    relevant && actions[relevant](e)
  }
  return onKeyUp
}

export default useHotkey
