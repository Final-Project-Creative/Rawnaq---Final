import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Container, Dimmer, Image, Item, Label, Loader, Message, Segment } from "semantic-ui-react";
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

import "/style.css"


class aProductList extends React.Component {
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
                        data.category === 'Accessories')

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
                            <Item key={item.id}>
                                <Item.Image src={item.image} />
                                <Item.Content>

                                    <Item.Meta className='inner'>
                                        <Item.Header
                                            as="a"
                                            onClick={() =>
                                                this.props.history.push(`/products/${item.id}`)
                                            }
                                        >
                                            {item.title}
                                        </Item.Header>
                                        <Item.Meta>
                                            <span className="cinema">{item.category}</span>
                                        </Item.Meta>
                                        <Item.Description>{item.description}</Item.Description>
                                        <Item.Extra>
                                            {item.discount_price && (
                                                <Label
                                                    color={
                                                        item.label === "primary"
                                                            ? "blue"
                                                            : item.label === "secondary"
                                                                ? "blue"
                                                                : "blue"
                                                    }
                                                >
                                                    {item.label}
                                                </Label>
                                            )}
                                        </Item.Extra>
                                    </Item.Meta>
                                </Item.Content>
                            </Item>
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
)(aProductList);
