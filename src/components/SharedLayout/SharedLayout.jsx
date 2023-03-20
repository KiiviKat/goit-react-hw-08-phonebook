import { AppBar } from 'components/AppBar/AppBar';
import {
  Box,
  Heading,
  StyledMain,
} from 'components/SharedLayout/SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <Box>
      <AppBar />
      <StyledMain>
        <Suspense
          fallback={
            <div>
              <Loader />
              <Heading as={'h2'}>Loading...</Heading>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </StyledMain>
      <Toaster />
    </Box>
  );
};
