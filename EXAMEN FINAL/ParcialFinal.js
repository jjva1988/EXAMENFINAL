let correo = prompt("Ingresar su correo: ");

if (+correo[0] >= 0 && +correo[0] <= 9) {
    alert("VUELVA A INTENTARLO");
} else {
    let correo2 = correo.toLowerCase();
    if (correo2.endsWith("CUMBRE.EDU.BO")) {
    } let password = prompt("Ingrese la contraseña")
    if (password.length > 8) {
        if (password.startsWith("$*")) {
            let solicitudPost = confirm("desea ingresar un post");
            if (solicitudPost == true) {
                let post = prompt("mi primer post js")
                if (post.length > 0) {
                    let cadenaPost = "mi primer post en js"
                    alert("mi primer post js")
                    console.warn(cadenaPost.split(" "))
                } else {
                    alert(`correo no valido. Vuelva a intentarlo ${math.random().newDate().getDate()} `);
                }
            }
        }
    }
}
