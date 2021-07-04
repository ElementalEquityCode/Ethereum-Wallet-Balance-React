import { useState, useEffect, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  Input,
  Link,
  Paper,
  Typography
} from '@material-ui/core';
import { socialApi } from '../../../__fakeApi__/socialApi';
import useMounted from '../../../hooks/useMounted';
import DotsHorizontalIcon from '../../../icons/DotsHorizontal';
import SearchIcon from '../../../icons/Search';

const connectStatusMap = {
  connected: 'Connected',
  not_connected: 'Connect',
  pending: 'Pending'
};

const SocialConnections = (props) => {
  const mounted = useMounted();
  const [connections, setConnections] = useState([]);
  const [search, setSearch] = useState('');

  const getConnections = useCallback(async () => {
    const data = await socialApi.getConnections();

    if (mounted.current) {
      setConnections(data);
    }
  }, [mounted]);

  useEffect(() => {
    getConnections();
  }, [getConnections]);

  const handleConnectToggle = (connectionId) => {
    setConnections((prevConnections) => prevConnections.map((connection) => {
      if (connection.id === connectionId) {
        const updatedConnection = { ...connection };

        updatedConnection.status = (connection.status === 'connected' || connection.status === 'pending'
          ? 'not_connected'
          : 'pending');

        if (updatedConnection.status === 'pending') {
          toast.success('Request sent!');
        }

        return updatedConnection;
      }

      return connection;
    }));
  };

  return (
    <Card {...props}>
      <CardHeader title="Connections" />
      <Divider />
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          px: 3,
          py: 2
        }}
      >
        <SearchIcon fontSize="small" />
        <Box sx={{ ml: 2 }}>
          <Input
            disableUnderline
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search connections"
            value={search}
          />
        </Box>
      </Box>
      <Divider />
      <Box sx={{ p: 3 }}>
        <Grid
          container
          spacing={3}
        >
          {connections
            .filter((connection) => connection.name.toLowerCase().includes(search))
            .map((connection) => (
              <Grid
                item
                key={connection.id}
                md={6}
                xs={12}
              >
                <Paper
                  sx={{ height: '100%' }}
                  variant="outlined"
                >
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                      p: 2
                    }}
                  >
                    <Avatar
                      component={RouterLink}
                      src={connection.avatar}
                      sx={{
                        height: 60,
                        width: 60
                      }}
                      to="#"
                    />
                    <Box
                      sx={{
                        flexGrow: 1,
                        mx: 2
                      }}
                    >
                      <Link
                        color="textPrimary"
                        component={RouterLink}
                        to="#"
                        variant="h5"
                      >
                        {connection.name}
                      </Link>
                      <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="body2"
                      >
                        {connection.commonConnections}
                        {' '}
                        connections in common
                      </Typography>
                      {connection.status !== 'rejected' && (
                        <Button
                          color="primary"
                          onClick={() => handleConnectToggle(connection.id)}
                          size="small"
                          variant="outlined"
                        >
                          {connectStatusMap[connection.status]}
                        </Button>
                      )}
                    </Box>
                    <IconButton>
                      <DotsHorizontalIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Paper>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Card>
  );
};

export default SocialConnections;
