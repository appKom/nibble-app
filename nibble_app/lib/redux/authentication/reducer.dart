import 'package:nibble_app/redux/authentication/actions.dart';
import 'package:nibble_app/redux/authentication/state.dart';
import 'package:nibble_app/redux/store.dart';

AuthenticationState authenticationReducer(
    AuthenticationState state, dynamic action) {
  if (action is Logout) {
    return new AuthenticationState.initialState(
        state.authPKCEState.pkce.clientId);
  } else {
    return new AuthenticationState(
      userState: userReducer(state.userState, action),
      tokenState: tokenReducer(state.tokenState, action),
      authPKCEState: authPKCEReducer(state.authPKCEState, action),
    );
  }
}

UserState userReducer(UserState prevState, dynamic action) {
  if (action is SetUser) {
    return new UserState(user: action.payload);
  }
  return prevState;
}

TokenState tokenReducer(TokenState prevState, dynamic action) {
  if (action is SetToken) {
    return new TokenState(token: action.payload);
  }
  return prevState;
}

AuthPKCEState authPKCEReducer(AuthPKCEState prevState, dynamic action) {
  if (action is SetAuthPKCE) {
    return new AuthPKCEState(pkce: action.payload);
  }
  return prevState;
}
