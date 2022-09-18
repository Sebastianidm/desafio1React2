import React from 'react'

const Contacto = () => {
  return (
    <div className='d-flex  justify-content-center'>
        <h1>¿Cuentanos, en que podemos ayudarte?</h1>
        <form>
        <div className="form-group">
        <label for="exampleInputEmail1">Correo</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        <small id="emailHelp" class="form-text text-muted">Nunca compartiremos tu email</small>
        </div>
        <div className="form-group">
        <label for="exampleFormControlTextarea1">Descripcion</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Contacto