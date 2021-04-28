import React, {ChangeEvent, MouseEvent} from 'react'

const callback = () => {
    alert("hi")
    return 12;
}
window.setTimeout(callback, 1000)

const User = () => {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {


        alert(e.currentTarget.name)
    }

    const saveUser = () => {
        alert("user have been deleted")
    }

    const onNameCnanged = () => {
        console.log("name change")
    }

    const onAgeChanget = (e:ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
    }

    const focusLost =() => {
        console.log("focus lost")
    }

    return (
        <div><textarea onChange={onNameCnanged}
        onBlur={focusLost}>Dimych</textarea>
            <input onChange={onAgeChanget} type={"number"}/>
        <button name = "delete" onClick={deleteUser}>delete</button>
        <button name = "save" onClick={saveUser}>save</button>
        </div>
    )
}