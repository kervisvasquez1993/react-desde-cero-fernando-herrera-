import React from 'react'
import useFeth from './hooks/useFeth'

const MultipleHookComponet = () => {
  const {data, isLoading, hasError} = useFeth("ditto")
  const resultado = isLoading ? "cargando" : data.name

  return (
    <div>{resultado}  </div>
  )
}

export default MultipleHookComponet