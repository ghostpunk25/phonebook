import { AddContactForm } from "components/AddContactForm/AddContactForm"
import { Box } from "components/Box/Box";
import { ContactsList } from "components/ContactsList/ContactsList";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, deleteContact } from "redux/contactsApi/contacts-operations/contacts-operations";
import { getContact } from "redux/contactsApi/contacts-selectors/contacts-selectors"
import { H1, Label, Input, Span, Btn } from "./PhonebookInfo.sryled";

const PhonebookInfo = () => {
   const dispatch = useDispatch();
   const contacts = useSelector(getContact);
   const [filterContact, setFilterContact] = useState('')
   const [isVisibleForm, setIsVisibleForm] = useState(false)

   useEffect(() => {
      dispatch(getContacts())
   }, [dispatch]);

   const handleDeletecontact = (id) => {
      dispatch(deleteContact(id))
   };

   const handleFilter = (e) => {
      setFilterContact(e.target.value)
   };

   const handleClickForm = (e) => {
      setIsVisibleForm(e.target.checked)
   };

   const normalize = filterContact.toLowerCase();
   const visibleCintacts = useMemo(() => {
      return contacts?.filter(item => item.name.toLowerCase().includes(normalize))
   },
      [contacts, normalize])

   return (
      <Box px='6' display='flex' flexDirection='column'>
         <Box display='flex' flexDirection='column'>
            <Box display='flex' justifyContent='space-between' alignItems='center' mb='5' gridGap='4'>
               <H1>Книга контактів</H1>
               <Box position='relative' pl='50px' onClick={handleClickForm} checked={isVisibleForm}>
                  <Btn type="checkbox" name="checkbox" id="c_1" />
                  <Label htmlFor="c_1"><Span></Span></Label>
               </Box>
            </Box>
            {contacts?.length !== 0 ? <Input onChange={handleFilter} type="text" name="filter" placeholder="Знайти контакт" /> : <Input onChange={handleFilter} type="text" name="filter" disabled placeholder="Знайти контакт" />}
            {isVisibleForm && <AddContactForm />}
            {contacts && <ContactsList removeContact={handleDeletecontact} items={visibleCintacts} />}
         </Box>
      </Box>
   );
};

export default PhonebookInfo;