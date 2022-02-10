import React, { useState } from 'react';

const ContextoTema = React.createContext();


const ProveedorTema = ({children}) => {
  const [tema, cambiarTema] = useState(
    {
      centro: 'center',
      izquierda: 'left',
      derecha: 'right',
      fuente: 20
    }
  )
    const aumentarFuente = () => cambiarTema({...tema,fuente: tema.fuente + 1})
    const disminuirFuente = () => cambiarTema({...tema,fuente: tema.fuente - 1})
    const alinearIzquierda = () => cambiarTema({...tema,align: tema.izquierda})
    const alinearCentro = () => cambiarTema({...tema,align: tema.centro})
    const alinearDerecha = () => cambiarTema({...tema,align: tema.derecha})

  return (
    <ContextoTema.Provider value = {{tema, aumentarFuente, disminuirFuente,alinearIzquierda, alinearCentro, alinearDerecha}}>
      {children}
    </ContextoTema.Provider>
  )
}
 
export {ContextoTema, ProveedorTema};