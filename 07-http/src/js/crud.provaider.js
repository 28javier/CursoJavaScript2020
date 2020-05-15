const crudUrl = 'https://reqres.in/api/users';

const getUsuarioId = async(id) => {

    const resp = await fetch(`${crudUrl}/${id}`);
    const { data } = await resp.json();
    return data;
}

const createUsuario = async(usuario) => {

    const resp = await fetch(crudUrl, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // console.log(await resp.json());
    return await resp.json();
}

const updateUsuario = async(id, usuario) => {

    const resp = await fetch(`${crudUrl}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // console.log(await resp.json());
    return await resp.json();
}

const deleteUsuario = async(id) => {

    const resp = await fetch(`${crudUrl}/${id}`, {
        method: 'DELETE'
    });

    return (resp.ok) ? 'Borrado' : 'No se pudo eliminar';
}


export {
    getUsuarioId,
    createUsuario,
    updateUsuario,
    deleteUsuario
}