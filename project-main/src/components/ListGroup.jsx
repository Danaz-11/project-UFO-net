import { useState } from "react";


function ListGroup() {
    let items = ['item-Dan', 'item-Bogdan',
        'another item...', 'item priveous','Last item']
    // items = [];

    const [selectedIndex, setselectedIndex] = useState(-1);
    
    return (
    <>
        <h1>List</h1>
        {/*{items.length===0 ? <p>No item found</p> : null}*/}
        {items.length === 0 && <p>No item found</p>}
        <ul className="list-group">
        {items.map((item, index) => (
            <li 
            className={ selectedIndex === index ? 
                'list-group-item active' : 'list-group-item'}
            key={item} 
            onClick={() => { setselectedIndex(index)}}>
            {item}
            </li>))}
        </ul>
    </>
    );
}

    export default ListGroup;