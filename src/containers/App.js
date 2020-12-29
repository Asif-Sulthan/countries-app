import React, {Component} from "react";
import { connect } from 'react-redux';
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary"
import SearchBox from "../components/SearchBox"
import "./App.css";
import { setSearchField, requestCountries } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchCountries.searchField,
        countries: state.requestCountries.countries,
        isPending: state.requestCountries.isPending,
        error: state.requestCountries.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestCountries: () => dispatch(requestCountries())
    }
}

class App extends Component {


    componentDidMount() {
        this.props.onRequestCountries();
    }


    render () {    

        const { searchField, onSearchChange, countries, isPending } = this.props;

        const filteredCountries = countries.filter(countries => {
            return countries.name.toLowerCase().includes(searchField.toLowerCase());
        });

        
        
        if (isPending) {
            return <h1>Loading</h1>;
        } else {

        return(
            <div className="tc">
                <h1 className="f1">Countries</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                <ErrorBoundary>
                <CardList countries = {filteredCountries}/>
                </ErrorBoundary>
                </Scroll>
            </div>            
        )}}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);