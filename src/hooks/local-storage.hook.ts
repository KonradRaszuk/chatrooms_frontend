import { useState, useEffect } from 'react'

/**
 * Hook do przechowywania wartości w localStorage pod wskazanym kluczem.
 * 
 * @param key – nazwa klucza w localStorage
 * @param initialValue – wartość domyślna, jeśli w localStorage nic nie ma
 * @returns [value, setValue] – aktualna wartość oraz funkcja do jej zmiany
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
) {
  // 1. Zainicjuj stan wartością z localStorage (jeśli jest) albo initialValue
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      // Bezpieczne dla SSR
      return initialValue
    }
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(`useLocalStorage: nie udało się odczytać klucza "${key}"`, error)
      return initialValue
    }
  })

  // 2. Za każdym razem, gdy storedValue się zmieni, zapisuj do localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    } catch (error) {
      console.warn(`useLocalStorage: nie udało się zapisać klucza "${key}"`, error)
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue]
}