const modalCliente = new bootstrap.Modal(document.getElementById('modalCliente'))

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
on(document, 'click', '.btnEditar', e =>{
    console.log('Editar')
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML
    nombre_editar.value = fila.children[1].innerHTML
    apellidos_editar.value = fila.children[2].innerHTML
    direccion_editar.value = fila.children[3].innerHTML
    
    modalCliente.show()
})


