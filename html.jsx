 <div>
            <div className='container text-center w-50 p-5'>
                <div id='Formulario container' >
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">id</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                            />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Imagen</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"
                            />
                        </div>


                        <button type="submit" className="btn btn-primary m-2">Actualizar</button>
                        <button type="submit" className="btn btn-danger m-2">Enviar</button>


                    </form>
                </div>
                <br />

                <div className="row">


                    <div className="col-sm-6 mb-3 mb-sm-0 py-2">
                        <div className="card">
                            <img id="imagen" src="" class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Titulo</h5>
                                <div class="d-grid gap-2 d-md-block ">
                                    <button class="btn btn-outline-success m-1" type="button"

                                    >Editar</button>
                                    <button
                                        class="btn btn-outline-danger m-2"
                                        type="button"

                                    >Eliminar</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
