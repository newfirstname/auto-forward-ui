import React, { useEffect, useContext } from 'react';
import { Row, Col, Grid, Panel, Button } from 'rsuite';

import Sources from '../connectors/Sources';
import Destinations from '../connectors/Destinations';
import Rules from '../connectors/Rules';

import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';

const SingleConnectorPage = ({ match }) => {
  const { activeConnector, getConnector } = useContext(GlobalContext);

  useEffect(() => {
    getConnector(match.params.id);
    // eslint-disable-next-line
  }, []);

  if (!activeConnector) {
    return 'loading';
  } else {
    const { name, sources, destinations, rules, id } = activeConnector;
    return (
      <Panel shaded header={name} className="mb-4">
        <Grid fluid>
          <Row className="show-grid">
            <Col xs={24} sm={24} md={8} className="mb-2">
              <Panel bordered header="sources">
                <Sources conId={id} sources={sources} />
              </Panel>
            </Col>
            <Col xs={24} sm={24} md={8}>
              <Panel bordered header="destinations" className="mb-2">
                <Destinations conId={id} destinations={destinations} />
              </Panel>
            </Col>
            <Col xs={24} sm={24} md={8}>
              <Panel bordered header="rules">
                <Rules conId={id} rules={rules} />
              </Panel>
            </Col>
          </Row>
          <Row className="mt-3">
            <Link to={process.env.PUBLIC_URL + '/connectors/' + id + '/delete'}>
              <Button color="red" appearance="ghost">
                Delete
              </Button>
            </Link>
          </Row>
        </Grid>
      </Panel>
    );
  }
};

export default SingleConnectorPage;
