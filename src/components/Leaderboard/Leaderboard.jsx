import React from 'react';

import classes from "./Leaderboard.module.css"

const Leaderboard = () => {
    const users = [
        ["Горячёв Евгений", 1239],
        ["Иван Сергеев", 1022],
        ["Анастасия Ершова", 1017],
        ["Вениамин Фадеев", 105],
        ["Елена Захарова", 910],
        ["Милана Шашкова", 800],
        ["Яся Гаврилова", 789],
        ["Полина Агафонова", 678],
        ["Сергей Ерёмин", 341],
    ]

    return (
        <div>
            <h2 style={{"textAlign": "center"}}>лидеры рейтинга</h2>
            <table>
            <tr >
                <td style={{ "borderRadius": "1rem 0 0 0" }}>1</td>
                <td>{users[0][0]}</td>
                <td style={{ "borderRadius": "0 1rem 0 0" }}>{users[0][1]}</td>
            </tr>
            {Array.from(users.slice(1, -1).entries()).map(item => (
                <tr>
                    <td>{item[0] + 2}</td>
                    <td>{item[1][0]}</td>
                    <td>{item[1][1]}</td>
                </tr>
            ))}
            <tr >
                <td style={{ "borderRadius": "0 0 0 1rem" }}>{users.length}</td>
                <td>{users.at(-1)[0]}</td>
                <td style={{ "borderRadius": "0 0 1rem 0" }}>{users.at(-1)[1]}</td>
            </tr>

        </table>
        </div>
        
    );
}

export default Leaderboard;
