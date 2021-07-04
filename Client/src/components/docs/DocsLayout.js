import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { experimentalStyled } from '@material-ui/core';
import DocsNavbar from './DocsNavbar';
import DocsSidebar from './DocsSidebar';

const DocsLayoutWrapper = experimentalStyled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 256
  }
}));

const DocsLayoutContainer = experimentalStyled('div')({
  flex: '1 1 auto',
  overflow: 'auto'
});

const DocsLayout = () => {
  const [isSidebarMobileOpen, setIsSidebarMobileOpen] = useState(false);

  return (
    <>
      <DocsNavbar onSidebarMobileOpen={() => setIsSidebarMobileOpen(true)} />
      <DocsSidebar
        onMobileClose={() => setIsSidebarMobileOpen(false)}
        openMobile={isSidebarMobileOpen}
      />
      <DocsLayoutWrapper>
        <DocsLayoutContainer>
          <Outlet />
        </DocsLayoutContainer>
      </DocsLayoutWrapper>
    </>
  );
};

export default DocsLayout;
