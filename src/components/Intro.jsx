import React, { Component } from 'react';

class Intro extends Component {
    render() {
        return (
            <div className="container mt-5 custom-container mb-5">
                <div className="row">
                    <div className="col-md-5">
                    <img className='img-fluid mb-4 custom-img' src="/src/assets/logoOnePiece.png" alt="Logo One Piece"/>
                    </div>
                    <div className="col-md-7">
                        <div>                
                            <h1 className="fs-2 border-bottom-custom text-center">Bem-vindo ao Mundo de One Piece!</h1>
                            <p className="fs-5">One Piece é um anime e mangá japonês criado por <strong>Eiichiro Oda</strong>. A história segue as aventuras de Monkey D. Luffy, um jovem pirata com poderes de borracha, que lidera sua tripulação em busca do tesouro lendário conhecido como One Piece, a fim de se tornar o Rei dos Piratas.</p>
                                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro;
