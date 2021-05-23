export default class Resource extends Component {
    state = {
        loading: true,
        payload: []
    }
    
    componentDidMount() {
        this.setState({ loading: true })
        axios.get(this.props.path).then(res => {
            this.setState({
                payload: res.data,
                loading: false
            })
        })
    }

    render() {
        return this.props.render(this.state)
    }
};

/***************************************** */

{/* <Resource
    path='/api/puppies'
    render={data => {
        if (data.loading) return <p>Loading Puppies...</p>
        return data.payload.map(puppy => <div>{puppy}</div>)
    }}
/>

<Resource
    path='/api/kitten'
    render={data => {
        if (data.loading) return <p>Loading Puppies...</p>
        return data.payload.map(kitten => <div>{kitten}</div>)
    }}
/> */}

{/* <Resource
    path='/api/profile'
    render={data => {
        if (data.loading) return <p>Loading Profile...</p>
        return (
            <div>
                <h1>{data.payload.name}</h1>
            </div>
        )
    }}
/> */}