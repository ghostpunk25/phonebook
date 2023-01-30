import { Box } from "components/Box/Box";
import { Btn, Span } from "./ContactsList.styled";

export const ContactsList = ({ items, removeContact }) => {
   return (
      <Box as='ul' overflow='auto' height='400px' mb='4' color='white' display='flex' flexDirection='column' gridGap='5' background='#282c34' p='5'>
         {items.map(item => (
            <Box as='li' display='flex' gridGap='5' justifyContent='space-between' borderBottom='1px solid #9e9e9e47' key={item.id}>
               <Box display='flex' gridGap='5' alignItems='center'>
                  <Span></Span>
                  <Box display='flex' flexDirection='column' gridGap='3'>
                     <p>{item.name}</p>
                     <p>{item.number}</p>
                  </Box>
               </Box>
               <Btn type="button" onClick={() => removeContact(item.id)}>Видалити</Btn>
            </Box>
         ))}
      </Box >
   );
};