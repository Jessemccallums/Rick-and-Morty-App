export const validation = (userData, setErrors, errors) => {


    if (!userData.username)
        setErrors({ ...errors, username: "por favor completa este campo" });
    else if (userData.username.length > 35)
        setErrors({ ...errors, username: "no puedes superar los 35 caracteres" });
    else if (
        !/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{3})+$/.test(userData.username)
    ) {
        setErrors({ ...errors, username: "email invalide" });
    } else {
        setErrors({ ...errors, username: "" });
    }


};

export const validationPassword = (userData, setErrors, errors) => {
    if (!userData.password) {
        setErrors({ ...errors, password: "Password Vacio" })
    } else {
        if (userData.password.length < 6 || userData.password.length > 10) {
            setErrors({ ...errors, password: "Debe tener entre 6 y 10 caracteres" })
        } else {
            if (!userData.password.match(/\d/)) {
                setErrors({ ...errors, password: "Debe tener al menos un numero" })
            } else {
                setErrors({ ...errors, password: "" })
            }
        }
    }
}

