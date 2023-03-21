import { Logo, Text } from 'pages/Register/Register.styled';
import { ROUTES } from 'utils/routes';

const Home = () => {
  return (
    <>
      <Text>
        Hello and welcome<Logo to={ROUTES.CONTACTS}>Phonebook</Logo>
      </Text>
    </>
  );
};

export default Home;
