import 'package:flutter/material.dart';
import 'package:nibble_app/models/auth_pkce.dart';
import 'package:nibble_app/models/token.dart';
import 'package:nibble_app/models/user.dart';

@immutable
class AuthPKCEState {
  final AuthPKCE pkce;
  const AuthPKCEState({@required this.pkce});
}

@immutable
class TokenState {
  final Token token;
  const TokenState({@required this.token});
}

@immutable
class UserState {
  final User user;
  const UserState({@required this.user});
}

class AuthenticationState {
  final AuthPKCEState authPKCEState;
  final TokenState tokenState;
  final UserState userState;

  AuthenticationState({
    this.authPKCEState,
    this.tokenState,
    this.userState,
  });

  factory AuthenticationState.initialState(String clientId) =>
      AuthenticationState(
        authPKCEState: new AuthPKCEState(pkce: new AuthPKCE(clientId)),
        tokenState: new TokenState(token: null),
        userState: new UserState(user: null),
      );
}
