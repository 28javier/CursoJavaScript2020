const jokerURL = 'https://api.chucknorris.io/jokes/random';
const usuarioURL = 'https://reqres.in/api/users?page=2';

//Cloudinary
const cloudPresent = 'b2aujbxb';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dd4oppuhs/upload';

// fetch(jokerURL).then(resp => {
//     resp.json().then(({ id, value }) => {
//         console.log(id);
//         console.log(value);
//     });
//     // console.log(resp);
// });

// promesas en cadenas
// fetch(jokerURL)
//     .then(resp => resp.json())
//     .then(({ id, value }) => {
//         console.log(id, value);
//     });

const obtenerChistes = async() => {

    try {
        const resp = await fetch(jokerURL);
        if (!resp.ok) {
            throw 'No se pudo realizar la peticcion';
        }
        const { icon_url, id, value } = await resp.json();
        return { icon_url, id, value };

    } catch (err) {
        throw err;
    }
};

const obtenerUsuarios = async() => {

    try {
        const resp = await fetch(usuarioURL);
        if (!resp.ok) {
            throw 'No se pudo realizar la peticion de usuarios';
        }
        const { data: usuario } = await resp.json();
        return usuario;
        // console.log(usuario);

    } catch (err) {
        throw err;
    }

};

// archivoSubir: file
const subirImagen = async(archivoSubir) => {

    const formData = new FormData();
    formData.append('upload_preset', cloudPresent);
    formData.append('file', archivoSubir);

    try {

        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });
        if (resp.ok) {
            const cloudResp = await resp.json();
            console.log(cloudResp);
            return cloudResp.secure_url;
        } else {

            throw await resp.json();
        }

    } catch (err) {
        throw err;
    }
}







export {
    obtenerChistes,
    obtenerUsuarios,
    subirImagen
}