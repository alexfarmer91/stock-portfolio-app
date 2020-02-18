import React from 'react';
import GreetingScreen from './GreetingScreen'
import StockSearchDashboard from './StockSearchDashboard.js'
import BuySellPage from './BuySellPage.js'
import { Route, Switch, Redirect } from 'react-router-dom'

class SwitchBox extends React.Component {

    redirectIfLoggedIn = () => {
        if (!this.props.session) {
            return <GreetingScreen setToken={this.props.setToken} />
        } else {
            return <Redirect to="/trade" />
        }
    }

    renderTransactionPage = () => {

    }

    renderPortfolio = () => {

    }

    renderBuySellPage = (props) => {
        return <BuySellPage {...props} />
    }

    renderStockSearchPage = () => {
        return <StockSearchDashboard />
    }

    render() {
        return (
            <Switch>
                <Route exact path="/users/:id/portfolio" render={this.renderPortfolio} />
                {/* <Route exact path="/users/:id/profile" render={this.renderUserPage} /> */}
                <Route exact path="/users/:id/transactions" render={this.renderTransactionPage} />
                <Route exact path="/trade/:id" render={this.renderBuySellPage} />
                <Route exact path="/trade/" render={this.renderStockSearchPage} />
                <Route exact path="/" render={this.redirectIfLoggedIn} />
            </Switch>)
    }
}

export default SwitchBox;