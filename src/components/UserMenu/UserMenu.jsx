import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { LogOutButton, UserBox, UserText } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useAuth();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <UserBox>
      <UserText>{isLoggedIn && `Hello, ${user.name}`}</UserText>
      {isLoggedIn && (
        <LogOutButton type="button" onClick={handleLogout}>
          Log Out
        </LogOutButton>
      )}
    </UserBox>
  );
};
