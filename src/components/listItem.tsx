import React from 'react';
import { ListName as IProps } from '../App';

const image: string = "http://nakertrans.sumbarprov.go.id/images/noimage.jpg";

const ListItem: React.FC<IProps> = ({people}) => {

    const renderList = (): JSX.Element[] => {
        return (
            people.map((item, idx) => {
                return (
                    <div className="wrapper-list" key={idx}>
                        <div className="name-profile">
                            <img src={item.img ? item.img : image} alt={item.name} />
                            <p>{item.name}</p>
                        </div>
                        <p>{item.age} years old</p>
                        <p>{item.notes}</p>
                    </div>
                )
            })
        )
    }
 
    return (
        <div>
            {renderList()}
        </div>
    )
}

export default ListItem;
