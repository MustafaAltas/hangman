import React from 'react'

function Win() {
    const handleReload = ()=> {
        return window.location.reload(false)
    }
  return (
    <div className='win'>
        <h3>Tebrikler</h3>
        <p>İdam Olmadan Kurtulabildin... {":)"}</p>
        <button onClick={handleReload}>Oyun Devam Et</button>
    </div>
  )
}

export default Win
