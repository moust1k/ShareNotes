import React from 'react'
import { useState } from 'react'
import env from '../env.json';
import { Link } from 'react-router-dom';


const Create = () => {

    const [url, setUrl] = useState('')
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('');

    const sendData = (obj) => {
        setFormClass('hide');
        setLineClass('');
        fetch(env.urlBackend, {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                if (response.result) {
                    setUrl(env.url + '/' + response.url);
                }
            })
    }

    // Function for handle button(add 1 more note)
    const handleForm = () => {
        setFormClass('');
        setLineClass('hide');
    }

    const loadDataFromForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        note = note.trim();
        if (note === '') {
            alert('Заполните поля')
            return false;
        } else {
            sendData({ 'note': note })
        }
    }

    return (
        <div className="row">
            <div>
                <form action="" onSubmit={loadDataFromForm} className={formClass}>
                    <div className="form-group">
                        <label htmlFor="note">Введите заметку</label>
                        <textarea name="note" className="form-control" defaultValue="Введите note" id="note"></textarea>
                        <p><b>Внимание!</b> Максимальная длина заметки 1000 символов.</p>
                    </div>
                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-primary">Создать</button>
                    </div>

                </form>
                <div className={lineClass}>
                    <div className="alert alert-primary" role="alert">{url}</div>
                    <p>Скопируйте URL и передайте человеку. Можно просто скопировать hash и ввести на нашем сайте во вкладке <Link to='/note'>Note</Link>.</p>
                    <div className="text-right"><button onClick={function () { window.location.reload() }} className="btn btn-primary">Создать еще один note</button></div>
                </div>
            </div>
        </div >
    )
}

export default Create