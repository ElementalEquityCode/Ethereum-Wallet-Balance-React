/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Markdown from 'react-markdown';
import matter from 'gray-matter';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';
import { Container } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import useSettings from '../hooks/useSettings';
import gtm from '../lib/gtm';

const MarkdownWrapper = experimentalStyled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  '& blockquote': {
    borderLeft: `4px solid ${theme.palette.text.secondary}`,
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
    '& > p': {
      color: theme.palette.text.secondary,
      marginBottom: 0
    }
  },
  '& code': {
    color: '#01ab56',
    fontFamily: 'Inconsolata, Monaco, Consolas, \'Courier New\', Courier, monospace',
    fontSize: 14,
    paddingLeft: 2,
    paddingRight: 2
  },
  '& h1': {
    fontSize: 35,
    fontWeight: 500,
    letterSpacing: '-0.24px',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(6)
  },
  '& h2': {
    fontSize: 29,
    fontWeight: 500,
    letterSpacing: '-0.24px',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(6)
  },
  '& h3': {
    fontSize: 24,
    fontWeight: 500,
    letterSpacing: '-0.06px',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(6)
  },
  '& h4': {
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: '-0.06px',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(4)
  },
  '& h5': {
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: '-0.05px',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  '& h6': {
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: '-0.05px',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  '& li': {
    fontSize: 14,
    lineHeight: 1.5,
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(4)
  },
  '& p': {
    fontSize: 14,
    lineHeight: 1.5,
    marginBottom: theme.spacing(2),
    '& > a': {
      color: theme.palette.secondary.main
    }
  }
}));

const renderers = {
  link: (props) => {
    const { href, children, ...other } = props;

    if (!href.startsWith('http')) {
      return (
        <a
          href={href}
          {...other}
        >
          {children}
        </a>
      );
    }

    return (
      <a
        href={href}
        rel="nofollow noreferrer noopener"
        target="_blank"
        {...other}
      >
        {children}
      </a>
    );
  },
  code: (props) => {
    const { language, value, ...other } = props;

    return (
      <SyntaxHighlighter
        language={language}
        style={dracula}
        {...other}
      >
        {value}
      </SyntaxHighlighter>
    );
  }
};

const Docs = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { settings } = useSettings();
  const [file, setFile] = useState(null);

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, [file]);

  useEffect(() => {
    const getFile = async () => {
      try {
        // Allow only paths starting with /docs.
        // If you'll use this on another route, remember to check this part.
        if (!pathname.startsWith('/docs')) {
          navigate('/404', { replace: true });
          return;
        }

        const response = await fetch(`/static${pathname}.md`, {
          headers: {
            accept: 'text/markdown' // Do not accept anything else
          }
        });

        if (response.status !== 200) {
          navigate(response.status === 404
            ? '/404'
            : '/500', { replace: true });
          return;
        }

        const data = await response.text();

        setFile(matter(data));
      } catch (err) {
        console.error(err);
        navigate('/500');
      }
    };

    getFile();
  }, [pathname]);

  if (!file) {
    return null;
  }

  return (
    <div>
      <Helmet>
        <title>{`Docs: ${file.data.title} | Material Kit Pro`}</title>
      </Helmet>
      <Container
        maxWidth={settings.compact ? 'lg' : false}
        sx={{ pb: '120px' }}
      >
        <MarkdownWrapper>
          <Markdown
            escapeHtml
            renderers={renderers}
            source={file.content}
          />
        </MarkdownWrapper>
      </Container>
    </div>
  );
};

export default Docs;
