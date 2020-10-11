import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:flutter_redux_navigation/flutter_redux_navigation.dart';
import 'package:redux/redux.dart';

import 'package:nibble_app/redux/authentication/actions.dart';
import 'package:nibble_app/redux/store.dart';
import 'package:nibble_app/theme/scibble_color.dart';

class Login extends StatefulWidget {
  Login({Key key}) : super(key: key);

  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<Login> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: StoreConnector<AppState, Store<AppState>>(
        converter: (store) => store,
        onDidChange: (store) {
          final state = store.state.auth;
          if (state.tokenState.token != null && state.userState.user == null) {
            getUserProfile(store);
          }
        },
        builder: (context, store) {
          final token = store.state.auth.tokenState.token;
          return Center(
            child: Column(
              children: [
                Spacer(flex: 1),
                Text(
                  'Scibble',
                  style: TextStyle(
                    fontSize: 50,
                    color: Colors.black54,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Spacer(flex: 1),
                token == null ? LoginButton() : CircularProgressIndicator(),
                Spacer(flex: 1),
              ],
            ),
          );
        },
      ),
    );
  }
}

class LoginButton extends StatelessWidget {
  LoginButton({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return StoreConnector<AppState, Store<AppState>>(
      converter: (store) => store,
      builder: (context, store) {
        final code = store.state.auth.authPKCEState.pkce.code;
        return (FlatButton(
          color: ScibbleColor.onlineBlue,
          textColor: Colors.white,
          splashColor: ScibbleColor.onlineOrange,
          disabledColor: ScibbleColor.onlineBlueDisabled,
          padding: EdgeInsets.all(15.0),
          onPressed: code == null
              ? () => store.dispatch(NavigateToAction.push('/login/online'))
              : null,
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Image.asset(
                'assets/images/Online_hvit_o.png',
                height: 30,
              ),
              Container(
                margin: EdgeInsets.fromLTRB(10, 0, 0, 0),
                child: Text(
                  'Logg inn gjennom Online',
                  style: TextStyle(fontSize: 20.0),
                ),
              )
            ],
          ),
        ));
      },
    );
  }
}
