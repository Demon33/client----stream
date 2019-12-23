import React from 'react';

class GoogleAuth extends React.Component() {
    
    componentDidMount() {
        window.gapi.load('client:auth2', () =>{
            window.gapi.client.init({
              clientId:
                '101966810360-0b3rsc7iiqd73mkh7bj14dls6544fem5.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setIsSignedIn({isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {

    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>Not Signed in</div>
        } else if (this.state.isSignedIn) {
            return <div>Signed In</div>
        }
    }
    return (
        <div>
            {isSignedIn}
        </div>
    );
}

export default GoogleAuth;
