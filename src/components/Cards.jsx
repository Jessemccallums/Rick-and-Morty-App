import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return(
      
     <div>
      {characters.map((el) => {
         return <Card name={el.name} species={el.species}
         gender={el.gender} image={el.image} onClose={() => window.alert('Emulamos que se cierra la card')}/>
      })}
   </div>
   )
}