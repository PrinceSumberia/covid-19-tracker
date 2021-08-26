import React, { Component } from 'react';
import axios from 'axios';
import FadeIn from 'react-fade-in';
import { withStyles } from '@material-ui/styles';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Form from './Form';
import Placeholder from './Placeholder';

import styles from '../styles/HelpStyles';

class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      data: {},
      currentResources: [],
      loadingStatus: null,
    };
    this.handleQuery = this.handleQuery.bind(this);
    this.handleLoading = this.handleLoading.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.fetchResources();
  }

  async fetchResources() {
    try {
      const [response] = await Promise.all([
        axios.get('https://data.covid19india.org/resources/resources.json'),
      ]);
      const hashmap = {};
      response.data.resources.forEach((x) => {
        if (typeof hashmap[x['state']] === 'undefined')
          hashmap[x['state']] = {};
        if (typeof hashmap[x['state']][x['city']] === 'undefined')
          hashmap[x['state']][x['city']] = {};

        if (
          typeof hashmap[x['state']][x['city']][x['category']] === 'undefined'
        )
          hashmap[x['state']][x['city']][x['category']] = [];
        if (Array.isArray(hashmap[x['state']][x['city']][x['category']]))
          hashmap[x['state']][x['city']][x['category']].push(x);
      });
      this.setState({ data: hashmap });
    } catch (err) {}
  }

  handleQuery(query) {
    this.setState({ query: query }, this.getData);
  }

  handleLoading() {
    this.setState({ loadingStatus: 'loading' });
  }

  getData() {
    let resources = [];
    for (const key of Object.keys(this.state.data)) {
      if (key.toLowerCase() === this.state.query.toLowerCase()) {
        resources.push({ ...this.state.data[key] });
      } else {
        for (const dist of Object.keys(this.state.data[key])) {
          if (dist.toLowerCase() === this.state.query.toLowerCase()) {
            resources.push({ [key]: this.state.data[key][dist] });
          }
        }
      }
    }
    this.setState({ currentResources: resources });
    setTimeout(() => this.setState({ loadingStatus: 'completeLoading' }), 2000);
  }

  render() {
    const { classes } = this.props;
    const res = this.state.currentResources.map((object) => {
      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          for (const key2 in object[key]) {
            if (object[key].hasOwnProperty(key2)) {
              const result = object[key][key2].map((resource) => (
                <FadeIn
                  key={resource.phonenumber.split(0, 5)}
                  className={classes.card}
                >
                  <div className={classes.header}>
                    <h3 className={classes.cardHeading}>{resource.category}</h3>
                    <a
                      className={classes.cardLink}
                      href={resource.contact}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        className={classes.icons}
                      />
                    </a>
                  </div>
                  <div className={classes.content}>
                    <p className={classes.text}>
                      Organization: {resource.nameoftheorganisation}
                    </p>
                    <p className={classes.text}>
                      Contact: {resource.phonenumber}
                    </p>
                  </div>
                </FadeIn>
              ));
              return result;
            }
          }
        }
      }
      return null;
    });
    return (
      <div className={classes.help}>
        <h1 className={classes.mainHeading}>
          Search for Essentials and Services
        </h1>
        <Form
          handleQuery={this.handleQuery}
          handleLoading={this.handleLoading}
        />
        {this.state.loadingStatus === 'loading' && (
          <div className={classes.container}>
            <Placeholder />
            <Placeholder />
            <Placeholder />
          </div>
        )}
        {this.state.loadingStatus === 'completeLoading' && (
          <div className={classes.container}>{res}</div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Help);
