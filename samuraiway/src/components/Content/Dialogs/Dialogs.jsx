import React from 'react';
import dialogs from './Dialogs.module.css';


const Dialogs = () => {
    return (
        <div className={dialogs.dialogs}>

            <div className={dialogs.dialogs__items}>

                <div className={dialogs.dialog + ' ' + dialogs.dialog__active}>
                    <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/4/4d/Wojak.png/200px-Wojak.png" alt="" className={dialogs.item__ava} />
                    <h2 className={dialogs.item__name}>Влад</h2>
                </div>

                <div className={dialogs.dialog}>
                    <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/4/4d/Wojak.png/200px-Wojak.png" alt="" className={dialogs.item__ava} />
                    <h2 className={dialogs.item__name}>Lou</h2>
                </div>

                <div className={dialogs.dialog}>
                    <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/4/4d/Wojak.png/200px-Wojak.png" alt="" className={dialogs.item__ava} />
                    <h2 className={dialogs.item__name}>Игорек</h2>
                </div>


            </div>

            <div className={dialogs.dialogs__messages}>
                <div className={dialogs.message}><p>Hi</p></div>
                <div className={dialogs.message}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quos at beatae iste dolore quas ipsam sequi aliquam corporis voluptatum culpa dolores animi ipsum porro blanditiis, repellat tempore incidunt accusamus.</p></div>
                <div className={dialogs.message}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, natus dicta corrupti nobis ducimus eos dignissimos eum pariatur corporis culpa.</p></div>
            </div>

        </div >
    );
}

export default Dialogs;
