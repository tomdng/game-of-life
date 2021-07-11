// Thanks to Dan Abramov for this setInterval that works as a React hook
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
import { useEffect, useRef } from "react"

export function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
