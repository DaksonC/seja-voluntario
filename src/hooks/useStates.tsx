import { useEffect, useState } from 'react'

interface Regiao {
  id: number
  sigla: string
  nome: string
}

interface IState {
  id: number
  sigla: string
  nome: string
  regiao: Regiao
}

function useStates() {
  const [states, setStates] = useState<IState[]>([])

  useEffect(() => {
    fetch('https://brasilapi.com.br/api/ibge/uf/v1')
      .then((response) => response.json())
      .then((data) => setStates(data))
  }, [])

  return states
}

export { useStates }
