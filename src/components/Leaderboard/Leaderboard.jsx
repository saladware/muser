import React from 'react';

import classes from "./Leaderboard.module.css"

const Leaderboard = () => {

    let users = Array.from([
        ["Евгений Горячёв", 2902],
        ["Сергей Барабанов", 1709],
        ["Егор Дубровин", 1555],
        ["Ярослав Овчаренко", 1404],
        ["Илон Маск", 1378],
        ["Полина Егорова", 1300],
        ["Елена Блиновская", 1222],
        ["Алина Рыбакова", 1220],
        ["Михаил Зубенко", 1220],
        ["Петр Петрович", 1220],
    ].entries())
    return (
        <table>

            <tr>
                <td>1</td>
                <td>{users[0][1][0]}</td>
                <td>{users[0][1][1]}</td>
            </tr>
            {users.map(user => {
                (
                    <tr>
                        <td>{user[0][0]}</td>
                        <td>{user[1][0]}</td>
                        <td>{user[1][1]}</td>
                    </tr>
                )
            })}
            <tr>
                <td>1</td>
                <td>{users[0][1][0]}</td>
                <td>{users[0][1][1]}</td>
            </tr>

        </table>
    );
}

export default Leaderboard;
