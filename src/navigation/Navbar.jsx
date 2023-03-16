import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import useSettings from 'hooks/useSettings';
/* COMPONENTS */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
/* ICONS */
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import InventoryIcon from '@mui/icons-material/Inventory';
/* STYLES */
import {
  StyledContainer,
  StyledAppBar,
  DefaultBackground,
  StyledToolBar,
  LogoTypography,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  CartIconButton,
  ProfileIconButton,
  Gradient
} from './_Navbar';
/* STORE */
import {
  doLogout
} from 'store/slices/auth/actions';
/* MENUS */
//import { menus } from './menus.js';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { settings } = useSettings();
  const { list: favorites } = useSelector((state) => state.favorites);
  const { list: cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const content = []; // menus.find((menu) => menu.name === 'navbar')?.list;

  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      const query = e.target.value;
      e.target.value = null;
      e.preventDefault();
      e.target.blur();
      navigate(`/search/${query}`);
    }
  }

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleFavoritesClick = () => {
    navigate('/favorites')
  }

  const handleShoppingCartClick = () => {
    navigate('/cart')
  }

  const handleProfileClick = () => {
    navigate('/account/profile');
    handleMenuClose();
  }

  const handleOrdersClick = () => {
    navigate('/account/orders');
    handleMenuClose();
  }

  const handleLogoutClick = () => {
    dispatch(doLogout());
    handleMenuClose();
    navigate('/');
  }

  const menuId = 'account-menu';
  const renderMenu = (
    <Menu
      id={menuId}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={handleProfileClick}
      >
        <IconButton
          size='large'
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
        <p><FormattedMessage id='NAVBAR.PROFILE' /></p>
      </MenuItem>
      <MenuItem
        onClick={handleOrdersClick}
      >
        <IconButton
          size='large'
          color='inherit'
        >
          <InventoryIcon />
        </IconButton>
        <p><FormattedMessage id='NAVBAR.ORDERS' /></p>
      </MenuItem>
      <MenuItem
        onClick={handleLogoutClick}
      >
        <IconButton
          size='large'
          color='inherit'
        >
          <LogoutIcon />
        </IconButton>
        <p><FormattedMessage id='NAVBAR.LOGOUT' /></p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position='fixed'>
        <DefaultBackground>
          <StyledContainer maxWidth={settings.maxWidth}>
            <StyledToolBar>
              <Link to='/'>
                <LogoTypography
                  variant='h6'
                  noWrap
                  component='div'
                >
                  E-COMMERCE
                </LogoTypography>
              </Link>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {content.map((item) => (
                  <Button
                    key={item.title}
                    component={Link}
                    to={item.path}
                    sx={{ my: 2, color: 'inherit', display: 'block' }}
                  >
                    {item.title}
                  </Button>
                ))}
              </Box>
              <Search sx={{ flexGrow: 1 }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder='Buscar…'
                  inputProps={{ 'aria-label': 'buscar' }}
                  onKeyDown={handleSearch}
                />
              </Search>
              <Box sx={{ flexGrow: 1 }} />
              <Box>
                <CartIconButton
                  size='large'
                  color='inherit'
                  onClick={handleShoppingCartClick}
                >
                  <Badge badgeContent={cart.length} color='error'>
                    <ShoppingCartIcon />
                  </Badge>
                </CartIconButton>
              </Box>
              <Box>
                <CartIconButton
                  size='large'
                  color='inherit'
                  onClick={handleFavoritesClick}
                >
                  <Badge badgeContent={favorites.length} color='error'>
                    <FavoriteIcon />
                  </Badge>
                </CartIconButton>
              </Box>
              <Box>
                <ProfileIconButton
                  size='large'
                  edge='end'
                  aria-controls={menuId}
                  aria-haspopup='true'
                  onClick={user
                    ? handleMenuOpen
                    : () => navigate('/login')
                  }
                  color={user
                    ? 'inherit'
                    : 'tertiary'
                  } 
                >
                  <AccountCircle />
                </ProfileIconButton>
              </Box>
            </StyledToolBar>
          </StyledContainer>
        </DefaultBackground>
        <Gradient />
      </StyledAppBar>
      {renderMenu}
    </Box>
  );
}

export default Navbar;
