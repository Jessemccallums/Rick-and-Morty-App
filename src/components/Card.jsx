import styled from 'styled-components'
import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/actions';
import '../App.css'
import { useState, useEffect } from 'react';

const DivCards = styled.div`
 border: 5px;
 background: #F7F6F2;
 border-radius: 26px;
 padding: 10px;
`;

const Scrollfix = styled.div`

height: 114px;
width: 114px;
overflow: auto;
border: 1px solid #666;
background-color: #ccc;
padding: 8px;
`

const TextCenter = styled.div`

text-align: left;
@import url('https://fonts.googleapis.com/css2?family=Uncial+Antiqua&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 27px;

color: #000000;
`;

const Title = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 21px;
line-height: 27px;

color: #000000;
`



const Equis = styled.button`

@import url('https://fonts.googleapis.com/css2?family=Uncial+Antiqua&display=swap');
font-family: 'Uncial Antiqua', cursive;
padding-top: 10px;
font-size: 400px
background-color: #F15A78;



font-family: "Montserrat Alternates", sans-serif;
width: 28%;
padding: 10px;
text-align: center;
margin: auto;
justify-items: center;
border: none;
background: rgb(251, 76, 105);
border-radius: 11px;
font-weight: 900;
margin-left: 103px;
margin-top: 17px;




`;






function Card({ id, name, species, gender, image, onClose, addFavorite, removeFavorite, myFavorites }) {

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         removeFavorite(id)
      } else {
         setIsFav(true)
         addFavorite({ id, name, species, gender, image, onClose, addFavorite, removeFavorite })
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (

      <DivCards>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <div>
            <img className={styles.imagen} src={image} alt="" width="150px" />
         </div>
         <Link to={`/detail/${id}`}
            className="linktitulo">
            <Title>{name}</Title>
         </Link>
         <TextCenter>{species}</TextCenter>
         <TextCenter>{gender}</TextCenter>
         <Equis onClick={() => onClose(id)}>X</Equis>
      </DivCards>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => {
         dispatch(addFavorite(character))
      },
      removeFavorite: (id) => {
         dispatch(removeFavorite(id))
      }
   }
}

const mapStateToProps = (state) => {
   return {myFavorites: state.myFavorites}
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)