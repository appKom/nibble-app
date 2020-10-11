import 'package:flutter/material.dart';
import 'package:flutter_redux_navigation/flutter_redux_navigation.dart';
import 'package:redux/redux.dart';
import 'package:redux_thunk/redux_thunk.dart';
import 'package:nibble_app/redux/authentication/Reducer.dart';
import 'package:nibble_app/redux/authentication/state.dart';

class AppState {
  final AuthenticationState auth;

  AppState({@required this.auth});

  factory AppState.initialState(String clientId) => AppState(
        auth: AuthenticationState.initialState(clientId),
      );
}

class Logout {
  Logout();
}

ThunkAction<AppState> logoutUser = (Store<AppState> store) async {
  await store.dispatch(NavigateToAction.pushNamedAndRemoveUntil(
      '/', (route) => route.settings.name == '/'));
  await store.dispatch(Logout());
};

AppState reducer(AppState state, dynamic action) => new AppState(
      auth: authenticationReducer(state.auth, action),
    );
