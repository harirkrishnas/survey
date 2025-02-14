import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Link as MuiLink
} from '@mui/material';
import SurveyFormWrapper from '../components/SurveyFormWrapper';

// Helper function to convert a title to a URL slug.
const slugify = (text: string): string =>
  text.replace(/\s*\(.*?\)\s*/g, '').toLowerCase().replace(/\s+/g, '-');

interface Stakeholder {
  title: string;
  role: string;
  focus: string;
}

const stakeholderData: Stakeholder[] = [
  {
    title: 'Social Entrepreneurs (SE)',
    role: 'Frontline managers driving innovative business models on the ground.',
    focus: 'Assessing digital literacy, operational resilience, and adaptive leadership to overcome conflict challenges.'
  },
  {
    title: 'Digital Platform Providers & IT Service Companies',
    role: 'Technology innovators supplying advanced digital tools and AI solutions.',
    focus: 'Evaluating technology adoption, platform performance, cybersecurity protocols, and strategies for operational continuity during crises.'
  },
  {
    title: 'Municipal & Regional Policy Makers / Government Officials',
    role: 'Architects of regulatory and infrastructural frameworks in conflict environments.',
    focus: 'Assessing institutional support, regulatory clarity, and the implementation of smart infrastructure and emergency interventions.'
  },
  {
    title: 'Industry/Cluster Leaders & Business Network Coordinators',
    role: 'Coordinators who facilitate collaboration and resource sharing among SE networks.',
    focus: 'Identifying best practices, peer influences, and ways to integrate digital networking for enhanced collective action.'
  },
  {
    title: 'Local Community Organizations & NGOs',
    role: 'Grassroots entities driving community-based digital interventions and support.',
    focus: 'Evaluating social cohesion, community resilience, and feedback on local capacity-building initiatives for digital readiness.'
  },
  {
    title: 'Donor Agencies & Financial Institutions',
    role: 'Investors providing the financial backbone for scaling social entrepreneurship.',
    focus: 'Analyzing funding criteria, impact assessments, and the efficacy of public–private partnerships aimed at bridging digital divides.'
  }
];

export default function Home(): React.ReactElement {
  return (
    <>
      <Head>
        <title>University Survey | Social Entrepreneurship Activation</title>
        <meta
          name="description"
          content="Explore innovative research on social entrepreneurship activation in conflict zones. Understand the dynamics, integrated views, and actionable outcomes that shape change."
        />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Raleway:wght@400;700&family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Header */}
      <AppBar position="sticky" sx={{ backgroundColor: 'white', boxShadow: 3 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
            University Survey
          </Typography>
          <Box>
            <Button href="#" sx={{ color: 'text.primary', textTransform: 'none' }}>
              Home
            </Button>
            <Button href="#overview" sx={{ color: 'text.primary', textTransform: 'none' }}>
              Overview
            </Button>
            <Button href="#stakeholders" sx={{ color: 'text.primary', textTransform: 'none' }}>
              Stakeholders
            </Button>
            <Button href="#contact" sx={{ color: 'text.primary', textTransform: 'none' }}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <main>
        {/* Hero or Overview Section */}
        <Container id="overview" sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Overview and Objectives
          </Typography>
          <Typography variant="body1" align="center" sx={{ maxWidth: 700, mx: 'auto', mb: 4 }}>
            Our research investigates the evolving landscape of social entrepreneurship in conflict zones by examining
            individual, organizational, and community dimensions.
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Survey Objectives
            </Typography>
            <ul style={{ paddingLeft: 20 }}>
              <li>
                <Typography variant="body1">
                  <strong>Understand SE Dynamics:</strong> Document transformative shifts in entrepreneurial practices amid conflict.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <strong>Integrate Dual Views:</strong> Analyze digital platform integration alongside regional infrastructural dynamics for a holistic perspective.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <strong>Generate Actionable Outcomes:</strong> Develop a decision‑support toolkit by combining self‑reported data with external metrics.
                </Typography>
              </li>
            </ul>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Sampling Concept
            </Typography>
            <Typography variant="body1">
              Using a stratified sampling strategy combined with the 5W1H framework, we engage diverse participants from various
              conflict phases for comprehensive insights.
            </Typography>
          </Box>
        </Container>

        {/* Stakeholders Section */}
        <Container id="stakeholders" sx={{ py: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Survey Stakeholders
          </Typography>
          <Typography variant="body1" align="center" sx={{ maxWidth: 750, mx: 'auto', mb: 4 }}>
            Our survey targets six pivotal stakeholder groups. Each plays a unique role in the ecosystem of social entrepreneurship,
            ensuring that both digital and on‑ground dynamics are thoroughly represented.
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {stakeholderData.map((stakeholder, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  variant="outlined"
                  sx={{
                    height: '100%',
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'scale(1.03)' }
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 'bold' }}>
                      {stakeholder.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      <strong>Role:</strong> {stakeholder.role}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      <strong>Survey Focus:</strong> {stakeholder.focus}
                    </Typography>
                    <Link href={`/survey/${slugify(stakeholder.title)}`} passHref>
                      <Button variant="contained" color="primary" sx={{ textTransform: 'none' }}>
                        Attend Survey
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Contact Section */}
        <Container id="contact" sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" align="center" sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
            Have questions or ideas to share? Our team is here to help. Reach out and join the conversation at{' '}
            <MuiLink href="mailto:info@universitysurvey.edu" underline="hover" color="primary">
              info@universitysurvey.edu
            </MuiLink>
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              href="mailto:info@universitysurvey.edu"
              sx={{ textTransform: 'none', fontWeight: 'bold' }}
            >
              Email Us
            </Button>
          </Box>
        </Container>

        {/* Optionally render the interactive Survey Form */}
        <SurveyFormWrapper stakeholder="demo-stakeholder" />
      </main>

      {/* Footer */}
      <Box component="footer" sx={{ py: 4, backgroundColor: 'white', borderTop: '1px solid #e0e0e0' }}>
        <Container>
          <Typography variant="body2" align="center" color="text.secondary">
            &copy; {new Date().getFullYear()} University Survey App. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
}