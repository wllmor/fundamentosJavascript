class Usuario{
    constructor(nombre,apellidos,pass,email){
        this.nombre= nombre;
        this.apellidos= apellidos;
        this.pass= pass;
        this.email= email;
    }
}

class ErrorGenerico{
    constructor(codigo,motivo){
        this.codigo = codigo;
        this.motivo = motivo;
    }
}

class ValidarUsuario{
    validar(usuario){
        if(usuario.nombre.length > 10 || usuario.nombre.length < 0){
            return new ErrorGenerico(1,"El nombre es invalido"); //codigo1
        }

        if(usuario.apellidos.length > 10 || usuario.apellidos.length < 0){
            return new ErrorGenerico(2,"los apellidos son invalido"); //codigo2
        }

        if(usuario.pass.length > 16 || usuario.pass.length < 0){
            return new ErrorGenerico(3,"El password es invalido"); //codigo3
        }

        return ErrorGenerico(0,"");
    }    

    validarTodos(usuario){
        let errores = [];
        if(usuario.nombre.length > 10 || usuario.nombre.length < 0){
            errores.push(new ErrorGenerico(1,"El nombre es invalido")); //codigo1
        }

        
        if(usuario.apellidos.length > 10 || usuario.apellidos.length < 0){
            errores.push(new ErrorGenerico(2,"Los apellidos son  invalido")); //codigo2
        }

        
        if(usuario.pass.length > 16 || usuario.pass.length < 0){
            errores.push(new ErrorGenerico(3,"El password es invalido")); //codigo3
        }

        return errores;
    }

}

window.addEventListener("load",function(){

    let formulario = document.getElementById("formulario");

    formulario.addEventListener("submit",(evento) => {
        evento.preventDefault()

        let alertBox = document.getElementById("alertbox");
        let alertBoxMessage = alertBox.children[0];

        let nombreInput = this.document.getElementsByName("nombre")[0]
        let apellidosInput = this.document.getElementsByName("apellidos")[0]
        let passInput = this.document.getElementsByName("password")[0]
        let emailInput = this.document.getElementsByName("email")[0]

        let nombre = nombreInput.value
        let apellidos = apellidosInput.value
        let pass = passInput.value
        let email = emailInput.value 

        const usuario= new Usuario(nombre,apellidos,pass.email);
        const validador = new ValidarUsuario();

        let resultados = validador.validarTodos(usuario);

        for (const resultado of resultados) {
            
            switch (resultado.codigo) {
                case 1: 
                    alertBoxMessage.innerHTML = resultado.motivo
                    alertBox.classList.add("alerta-error")
                    alertBox.style.top = 0
                    nombreInput.value = ""
                    break;
                case 2: 
                    alertBoxMessage.innerHTML = resultado.motivo
                    alertBox.style.top = 0
                    apellidosInput.value = ""
                    break;
                case 3: 
                    alertBoxMessage.innerHTML = resultado.motivo
                    alertBox.style.top = 0
                    passInput.value = ""
                    break;
            }
        }

        console.log(resultados)

    });    

});