import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  Divider,
  Link,
  TextField,
  Typography
} from '@material-ui/core';

const Form16 = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      minHeight: '100%',
      p: 3
    }}
  >
    <Container maxWidth="sm">
      <Card>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: 400,
            p: 4
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Box>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Register
              </Typography>
              <Typography
                color="textSecondary"
                sx={{ mt: 1 }}
                variant="body2"
              >
                Register on the internal platform
              </Typography>
            </Box>
            <img
              alt="Amplify"
              src="/static/icons/amplify.svg"
              style={{
                maxWidth: '53.62px',
                width: '100%'
              }}
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              mt: 3
            }}
          >
            <form onSubmit={(event) => event.preventDefault()}>
              <TextField
                fullWidth
                label="Name"
                margin="normal"
                name="name"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Email Address"
                margin="normal"
                name="email"
                type="email"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Password"
                margin="normal"
                name="password"
                type="password"
                variant="outlined"
              />
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  ml: -1,
                  mt: 2
                }}
              >
                <Checkbox
                  color="primary"
                  name="policy"
                />
                <Typography
                  color="textSecondary"
                  variant="body2"
                >
                  I have read the
                  {' '}
                  <Link
                    color="primary"
                    component="a"
                    href="#"
                  >
                    Terms and Conditions
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Button
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Register
                </Button>
              </Box>
            </form>
          </Box>
          <Divider sx={{ my: 3 }} />
          <Link
            color="textSecondary"
            href="#"
            variant="body2"
          >
            Having an account
          </Link>
        </CardContent>
      </Card>
    </Container>
  </Box>
);

export default Form16;
