import React, { Component } from 'react';

class List extends Component {
    render() {
        let list = [{
            name: 'Victor',
            email: 'victormota@gmail.com'
        },{
            name: 'Sophie',
            email: 'sophie@gmail.com'
        }];
        return (
            <div>
                <table border = '1'>
                    <tr>
                        <th> Nome: </th>
                        <th> Email: </th>
                    </tr>
                    { list.map((item) => {
                        return (
                            <tr>
                                <td> { item.name } </td>
                                <td> { item.email } </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        );
    }
}

export default List;