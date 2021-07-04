import { Outlet } from 'react-router-dom';
import { experimentalStyled } from '@material-ui/core/styles';
import BlogNavbar from './BlogNavbar';
import Footer from '../Footer';

const BlogLayoutRoot = experimentalStyled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100%',
  paddingTop: 64
}));

const BlogLayout = () => (
  <BlogLayoutRoot>
    <BlogNavbar />
    <Outlet />
    <Footer />
  </BlogLayoutRoot>
);

export default BlogLayout;
