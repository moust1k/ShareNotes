import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import env from '../env.json'
// http://localhost:3000/note/kb9uu2t3owc4izwpo47bvwkx

const Note = () => {
    let { noteURL } = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setlineClass] = useState('hide');
    const [formClass, setFormClass] = useState('hide');
    const [errorClass, setErrorClass] = useState('hide');


    useEffect(() => {
        if (noteURL !== undefined) {
            fetch(env.urlBackend, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({ "url": noteURL })
            })
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    if (response.result) {
                        setNoteText(response.note);
                        setlineClass('');
                        setFormClass('hide');
                        setErrorClass('hide')
                    } else if (!response.result) {
                        setlineClass('hide');
                        setFormClass('hide');
                        setErrorClass('')
                    }
                })
        } else {
            setlineClass('hide');
            setFormClass('');
            setErrorClass('hide')
        }
    }, []);

    const getNote = (event) => {
        event.preventDefault();
        let url = event.target.elements.url.value;
        url = url.trim();
        if (url === '') {
            alert('Заполните поля')
            return false;
        } else {
            noteURL = url;
            window.location.href = env.url + '/' + url;
        }
    }

    const searchNote = () => {
        window.location.href = env.url;
    }

    return (
        <div className="row">
            <div className="col-12">
                <div>
                    <form action="" onSubmit={getNote} className={formClass}>
                        <div className="form-group">
                            <label htmlFor="url">Введите hash заметки</label>
                            <input type="text" name="url" id="url" className="form-control" />
                        </div>
                        <div className="form-group text-right">
                            <button type="submit" className="btn btn-primary">Искать Note</button>
                        </div>
                    </form>
                </div>
                <div className={lineClass}>
                    <div className="alert alert-success" role="alert">
                        <h4 className="alert-heading">Note: {noteURL}</h4>
                        <div>{noteText}</div>
                    </div>
                    <div className="text-right"><button onClick={searchNote} className="btn btn-primary">Искать другой note</button></div>
                </div>
                <div className={errorClass}>
                    <div className="alert alert-danger" role="alert">
                        Note с таким hash не найден!
                    </div>
                    <div className="text-right"><button onClick={searchNote} className="btn btn-primary">Искать другой note</button></div>
                </div>
            </div>
        </div >
    )
}

export default Note