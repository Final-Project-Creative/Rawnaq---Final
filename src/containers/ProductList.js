import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  Container,
  Dimmer,
  Image,
  Item,
  Label,
  Loader,
  Message,
  Segment
} from "semantic-ui-react";
import { productListURL, addToCartURL } from "../constants";
import { fetchCart } from "../store/actions/cart";
import { authAxios } from "../utils";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./style.css"

class ProductList extends React.Component {
  state = {
    loading: false,
    error: null,
    data: []
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(productListURL)
      .then(res => {
        this.setState({
          data: res.data.filter((data) =>
            data.category === 'Womem')

          , loading: false
        });
        console.log(res.data)
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  }

  handleAddToCart = slug => {
    this.setState({ loading: true });
    authAxios
      .post(addToCartURL, { slug })
      .then(res => {
        this.props.refreshCart();
        this.setState({ loading: false });
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  };

  render() {
    const { data, error, loading } = this.state;
    return (
      <Container>
        {error && (
          <Message
            error
            header="There was some errors with your submission"
          //content={JSON.stringify(error)}
          />
        )}
        {loading && (
          <Segment>
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>

            <Image src="/images/wireframe/short-paragraph.png" />
          </Segment>
        )}
        <Item.Group className='wrapper'>
          {data.map(item => {
            return (
              <Card className='kkk'>
                <CardActionArea>


                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2"
                      as="a"
                      onClick={() =>
                        this.props.history.push(`/products/${item.id}`)
                      }

                    >
                      <Image src={item.image} />
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="black" component="p">

                      <span className="cinema"> ${item.price}</span>   <span className="cinema2">${item.discount_price}</span>
                      <br></br>
                      <br></br>
                      {item.label}

                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>

                </CardActions>
              </Card>

            );
          })}
        </Item.Group>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    refreshCart: () => dispatch(fetchCart())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProductList);
