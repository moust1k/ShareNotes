import { Link } from "react-router-dom"

const Main = () => {
    return (
        <div className="row">
            <div className="main-buttons">
                <div><Link to="/create" type=" button" className="btn btn-primary btn-main">Создать note</Link></div>
                <div><Link to="/note" type=" button" className="btn btn-primary btn-main">Просмотреть note</Link></div>
            </div>
            <div>
                <p><b>ShareNotes</b> – сервис для обмена заметками. Создайте заметку, отправьте ссылку на заметку и ваш друг сможет ее просмотреть.
                    После просмотра заметка будет удалена (или по истечении 15 минут с момента создания).</p>
                <p>Как сделать заметку? </p>
                <ul>
                    <li>Пройдите по ссылке</li>
                    <li>Вставьте текст и нажмите Create</li>
                    <li>Отправьте сгенерированный адрес другу!</li>
                </ul>
                <p>Как прочитать заметку? Перейдите по присланному URL, либо введите адрес руками здесь.</p>
            </div>
        </div >
    )
}

export default Main