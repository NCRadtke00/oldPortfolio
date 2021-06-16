import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out my work</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            //src='images/img-9.jpg'
                            text='Asp .Net 3.1, MVC5, Core3.1, Entity Framework, CSS3, HTML5, JavaScript, SQL, GoogleMaps API, GeoCode API, Stripe API'
                            label='Sudsy'
                            path='/projects'
                        />
                        <CardItem
                            //src=''
                            text='Simple Portfolio built in React with CSS3 and HTML5'
                            label='Portfolio'
                            path='/projects'
                        />
                        <CardItem
                            //src=''
                            text='Asp .Net 3.1, MVC5, Core3.1, Entity Framework, CSS3, HTML5, JavaScript, SQL, GoogleMaps API, GeoCode API,'
                            label='WasteCollection'
                            path='/projects'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            //src='images/img-3.jpg'
                            text='Education and Skills'
                            label='Education'
                            path='/education'
                        />
                        <CardItem
                            //src='images/img-4.jpg'
                            text='Employment History'
                            label='Employment'
                            path='/employment'
                        />
                        <CardItem
                            //src='images/img-8.jpg'
                            text='Resume'
                            label='resume'
                            path='/resume'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
