import {AppBar, Box, Container, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

const ToolBar = () => {
  return (
    <Box sx={{flexGrow: 1, marginBottom: 3}}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography
              variant="h5"
              component={NavLink}
              to="/"
              sx={{
                flexGrow: 1,
                display: {
                  xs: 'none',
                  sm: 'block',
                  textDecoration: 'none',
                  color: 'white',
                }
              }}
            >
              Static Pages
            </Typography>
            <Box sx={{marginLeft: 'auto'}}>
              <Typography
                variant="h6"
                component={NavLink}
                to="/"
                sx={{
                  textDecoration: 'none',
                  color: 'white',
                  padding: '0 10px',
                  '&.active': {color: '#afafaf'},
                  '&:hover': {color: '#afafaf'}

                }}
              >
                Home</Typography>

              <Typography
                variant="h6"
                component={NavLink}
                to="/pages/about"
                sx={{
                  textDecoration: 'none',
                  color: 'white',
                  padding: '0 10px',
                  borderLeft: '2px solid gray',
                  '&.active': {color: '#afafaf'},
                  '&:hover': {color: '#afafaf'}

                }}
              >About</Typography>
              <Typography
                variant="h6"
                component={NavLink}
                to="/pages/contacts"
                sx={{
                  textDecoration: 'none',
                  color: 'white',
                  padding: '0 10px',
                  borderLeft: '2px solid gray',
                  '&.active': {color: '#afafaf'},
                  '&:hover': {color: '#afafaf'}

                }}
              >Contacts</Typography>
              <Typography
                variant="h6"
                component={NavLink}
                to="/pages/privacy"
                sx={{
                  textDecoration: 'none',
                  color: 'white',
                  padding: '0 10px',
                  borderLeft: '2px solid gray',
                  '&.active': {color: '#afafaf'},
                  '&:hover': {color: '#afafaf'}

                }}
              >Privacy</Typography>
              <Typography
                variant="h6"
                component={NavLink}
                to="/pages/admin"
                sx={{
                  textDecoration: 'none',
                  color: 'white',
                  padding: '0 10px',
                  borderLeft: '2px solid gray',
                  '&.active': {color: '#afafaf'},
                  '&:hover': {color: '#afafaf'}

                }}
              >Admin</Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default ToolBar;